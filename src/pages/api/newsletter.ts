import type { APIRoute } from 'astro';
import { SUPABASE_URL, SUPABASE_ANON_KEY, TURNSTILE_SECRET_KEY } from 'astro:env/server';

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }

  // Honeypot: real users never fill this in.
  if (typeof body.company === 'string' && body.company) return json({ ok: true });

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return json({ error: 'Enter a valid email address.' }, 400);
  }

  if (TURNSTILE_SECRET_KEY) {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({
        secret: TURNSTILE_SECRET_KEY,
        response: String(body['cf-turnstile-response'] ?? ''),
      }),
    });
    const out = (await res.json()) as { success?: boolean };
    if (!out.success) return json({ error: 'Spam check failed. Please try again.' }, 400);
  }

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('Newsletter signup failed: SUPABASE_URL / SUPABASE_ANON_KEY not set.');
    return json({ error: 'Something went wrong. Please try again in a moment.' }, 500);
  }

  try {
    // Insert via Supabase's REST API. RLS on `subscribers` allows anon inserts only,
    // so ask for no response body (return=minimal); reading rows back would be denied.
    const res = await fetch(`${SUPABASE_URL.replace(/\/+$/, '')}/rest/v1/subscribers`, {
      method: 'POST',
      headers: {
        // Works with both the publishable key (sb_publishable_…) and a legacy anon key.
        apikey: SUPABASE_ANON_KEY,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({ email }),
    });

    // 409 = unique_violation (23505): already subscribed, treat as success.
    if (!res.ok && res.status !== 409) {
      throw new Error(`Supabase ${res.status}: ${await res.text()}`);
    }
    return json({ ok: true });
  } catch (err) {
    console.error('Newsletter signup failed:', err);
    return json({ error: 'Something went wrong. Please try again in a moment.' }, 500);
  }
};
