import Link from "next/link";
import { getAllPosts, getAllTopics } from "@/lib/posts";
import { siteConfig } from "@/lib/site-config";
import { quotes } from "@/lib/wisdom";
import { PostCard } from "@/components/PostCard";
import { TopicPills } from "@/components/TopicPills";
import { NewsletterForm } from "@/components/NewsletterForm";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const topics = getAllTopics();
  const featuredQuotes = quotes.slice(0, 2);

  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="py-16 sm:py-24">
        <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
          {siteConfig.tagline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {siteConfig.author.shortBio}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/journey"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Read my journey
          </Link>
          <Link
            href="/wisdom"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Open the Wisdom Chest
          </Link>
        </div>
      </section>

      {featuredQuotes.length > 0 && (
        <section className="border-t border-border py-16">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-serif text-2xl font-medium">From the Wisdom Chest</h2>
            <Link href="/wisdom" className="text-sm text-muted hover:text-accent">
              Open the chest &rarr;
            </Link>
          </div>
          <div className="space-y-8">
            {featuredQuotes.map((quote) => (
              <blockquote key={quote.text} className="border-l-2 border-accent pl-6">
                <p className="font-serif text-xl italic leading-snug text-foreground">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <footer className="mt-3 text-sm text-muted">
                  &mdash; {quote.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}

      {posts.length > 0 && (
        <section className="border-t border-border py-16">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-serif text-2xl font-medium">Latest articles</h2>
            <Link href="/articles" className="text-sm text-muted hover:text-accent">
              All articles &rarr;
            </Link>
          </div>
          <div>
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {topics.length > 0 && (
        <section className="border-t border-border py-16">
          <h2 className="mb-6 font-serif text-2xl font-medium">Browse by topic</h2>
          <TopicPills topics={topics} />
        </section>
      )}

      <section id="newsletter" className="border-t border-border py-16">
        <div className="rounded-2xl bg-surface p-8 sm:p-10">
          <h2 className="font-serif text-2xl font-medium">
            Get it as I add to it
          </h2>
          <p className="mt-3 max-w-lg text-muted">
            New quotes, books, and lessons for the chest, plus what I&apos;m
            writing — straight to your inbox. No fluff, no spam.
          </p>
          <div className="mt-6">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
