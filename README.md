# Ammo4Life

A minimal, personal blog about the mindset shifts, tools, and decisions behind
going from employee to founder. Built with Astro, MDX, Cloudflare Workers and Supabase (free plan).

## Stack

- **Astro + Tailwind 4**, deployed on Cloudflare Workers via `@astrojs/cloudflare` (same setup as the DNA Window & Door site).
- **MDX files in `src/content/posts/`**: articles are Markdown with frontmatter; no CMS needed.
- **Supabase (free plan)**: one `subscribers` table for newsletter signups (`supabase/migrations/0001_subscribers.sql`). RLS allows inserts only, so the list can't be read through the public API.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run preview    # build + wrangler dev (closest to production)
```

Copy `.dev.vars.example` to `.dev.vars` and fill in `SUPABASE_URL` and `SUPABASE_ANON_KEY` (Supabase > Project Settings > API Keys; use the publishable key). Without them every page works; only the newsletter signup returns an error.

## Writing a post

Add `src/content/posts/my-new-post.mdx`:

```mdx
---
title: "Your Title"
date: "2026-08-01"
excerpt: "One sentence that shows up in article lists."
topics: ["Mindset", "Tools"]
---

Your article content, in Markdown.
```

Topic filters on `/articles?topic=<slug>` are generated from the topics across posts.

## Deploying

One-time setup (needs a Cloudflare login):

```bash
npx wrangler login
npx wrangler secret put SUPABASE_URL
npx wrangler secret put SUPABASE_ANON_KEY
```

If the Supabase project is new, run `supabase/migrations/0001_subscribers.sql` in its SQL editor first.

The Worker serves `ammo4life.com` and `www.ammo4life.com` (custom domains in `wrangler.jsonc`; DNS is on Cloudflare, registrar is GoDaddy). `www` is the main address: a Cloudflare Redirect Rule sends `ammo4life.com/*` to `www`, keeping the query string.

Every push to `main` on GitHub deploys automatically (Cloudflare Workers Builds: `npm run build`, then `npx wrangler deploy`; see the Worker's Settings > Builds). To deploy from your machine instead, run `npm run deploy`.

## Subscribers

View or export them in the Supabase dashboard (Table Editor > `subscribers`). There's intentionally no admin UI on the site.

Note: free Supabase projects pause after about a week with no activity. If signups are quiet, check the dashboard now and then and click **Restore** if it's paused (or upgrade).

Optional spam protection: set `TURNSTILE_SECRET_KEY` (secret) and `PUBLIC_TURNSTILE_SITE_KEY`; see `.dev.vars.example`.

## Personalizing

Site name, tagline, bio and nav live in `src/lib/site-config.ts`; the Wisdom Chest content is in `src/lib/wisdom.ts`.
