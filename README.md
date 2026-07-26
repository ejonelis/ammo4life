# Ammo4Life

A minimal, personal blog about the mindset shifts, tools, and decisions behind
going from employee to founder. Built with Next.js, MDX, and Supabase.

## Stack

- **Next.js (App Router) + TypeScript + Tailwind CSS** — the site itself, deployed on Vercel.
- **MDX files in `content/posts/`** — articles are Markdown with frontmatter, no database or CMS required. Write a post, commit, push, done.
- **Supabase** — used for exactly one thing: storing newsletter signups in a `subscribers` table. Nothing else on the site touches a database.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site runs fine without Supabase configured — every page works, only the newsletter signup will return a friendly error until you connect it (see below).

## Writing a post

Add a new `.mdx` file to `content/posts/`, e.g. `content/posts/my-new-post.mdx`:

```mdx
---
title: "Your Title"
date: "2026-08-01"
excerpt: "One sentence that shows up in article lists."
topics: ["Mindset", "Tools"]
---

Your article content, in Markdown.
```

- `topics` can be any strings you like — topic pages and the topic filter on `/articles` are generated automatically from whatever topics appear across your posts.
- Posts are sorted by `date`, newest first.
- Commit and push; Vercel rebuilds the site.

## Personalizing the site

Almost everything you'd want to change on first launch lives in two files:

- `src/lib/site-config.ts` — your name, bio, tagline, nav links, social links.
- `src/app/journey/page.tsx` — the "My Journey" narrative (currently placeholder `[Edit this: ...]` sections).
- `src/lib/resources.ts` — the curated books/podcasts/videos/tools list on `/resources`.

## Setting up Supabase (newsletter signups)

1. Create a free project at [supabase.com](https://supabase.com).
2. In the Supabase SQL editor, run the migration in `supabase/migrations/0001_subscribers.sql`. It creates a `subscribers` table with row-level security that only allows *inserts* — nobody can read the list back out through the public API, including you, except from the Supabase dashboard itself (which uses your own authenticated access and bypasses RLS).
3. In Supabase, go to **Project Settings → API** and copy the **Project URL** and the **anon public key**.
4. Copy `.env.local.example` to `.env.local` and fill in `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
5. Restart `npm run dev`. The newsletter form on the homepage and at the bottom of every article will now work.
6. To see or export subscribers, use the **Table Editor** in the Supabase dashboard — there's intentionally no admin UI on the site itself.

## Deploying to Vercel

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. In the Vercel project's **Environment Variables**, add `SUPABASE_URL` and `SUPABASE_ANON_KEY` with the same values from your `.env.local`.
4. Deploy. Every future push to your main branch redeploys automatically.
5. To use `ammo4life.com`: in the Vercel project, go to **Settings → Domains**, add `ammo4life.com`, and follow Vercel's instructions to point your domain's DNS at Vercel (usually an A record or CNAME, depending on your registrar).

## Project structure

```
content/posts/        MDX articles (frontmatter + content)
src/app/               Pages (Home, Articles, Article detail, Journey, Resources, API routes)
src/components/        Header, Footer, PostCard, TopicPills, NewsletterForm
src/lib/                Post loading, site config, resources data, Supabase client
supabase/migrations/    SQL for the subscribers table
```
