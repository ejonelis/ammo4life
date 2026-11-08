# Ammo4Life

A minimal, personal blog about the mindset shifts, tools, and decisions behind
going from employee to founder. Built with Astro, MDX, and Cloudflare Workers + D1.

## Stack

- **Astro + Tailwind 4**, deployed on Cloudflare Workers via `@astrojs/cloudflare` (same setup as the DNA Window & Door site).
- **MDX files in `src/content/posts/`**: articles are Markdown with frontmatter; no CMS needed.
- **Cloudflare D1**: one `subscribers` table for newsletter signups (`migrations/0001_subscribers.sql`).

## Local development

```bash
npm install
npm run dev        # http://localhost:4321 (newsletter needs the Workers runtime, see below)
npm run preview    # build + wrangler dev, with a local D1
```

First time only, create the local table:

```bash
npx wrangler d1 migrations apply ammo4life --local
```

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
npx wrangler d1 create ammo4life           # paste the database_id into wrangler.jsonc
npx wrangler d1 migrations apply ammo4life --remote
```

Then either connect the GitHub repo in Cloudflare (Workers & Pages > Import from Git; build `npm run build`, deploy `npx wrangler deploy`) or run `npm run deploy`.

## Subscribers

```bash
npx wrangler d1 execute ammo4life --remote --command "select email, created_at from subscribers"
```

Optional spam protection: set `TURNSTILE_SECRET_KEY` (secret) and `PUBLIC_TURNSTILE_SITE_KEY`; see `.dev.vars.example`.

## Personalizing

Site name, tagline, bio and nav live in `src/lib/site-config.ts`; the Wisdom Chest content is in `src/lib/wisdom.ts`.
