-- Newsletter subscribers table for Ammo4Life.
create table if not exists subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table subscribers enable row level security;

-- Anyone (the anon key used by the newsletter API route) may insert a new
-- subscriber, but nobody using the anon key can read, update, or delete rows.
-- Manage/export the list from the Supabase dashboard using your own account,
-- which bypasses RLS.
create policy "Allow public signups"
  on subscribers
  for insert
  to anon
  with check (true);
