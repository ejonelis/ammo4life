import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { TURNSTILE_SECRET_KEY } from 'astro:env/server';

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

  try {
    // Already subscribed is treated as success (UNIQUE email + OR IGNORE).
    await env.DB.prepare('INSERT OR IGNORE INTO subscribers (email) VALUES (?)').bind(email).run();
    return json({ ok: true });
  } catch (err) {
    console.error('Newsletter signup failed:', err);
    return json({ error: 'Something went wrong. Please try again in a moment.' }, 500);
  }
};
