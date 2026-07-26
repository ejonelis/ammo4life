import { createClient } from "@supabase/supabase-js";

// Server-only client. Never import this from a client component — the anon
// key is safe here only because it's used exclusively on the server and the
// `subscribers` table's RLS policy allows nothing but inserts.
export function getSupabaseClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      "Supabase is not configured. Set SUPABASE_URL and SUPABASE_ANON_KEY."
    );
  }

  return createClient(url, key);
}
