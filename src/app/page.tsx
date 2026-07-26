import Link from "next/link";
import { getAllPosts, getAllTopics } from "@/lib/posts";
import { siteConfig } from "@/lib/site-config";
import { PostCard } from "@/components/PostCard";
import { TopicPills } from "@/components/TopicPills";
import { NewsletterForm } from "@/components/NewsletterForm";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const topics = getAllTopics();

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
            href="/articles"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Browse articles
          </Link>
        </div>
      </section>

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

      <section
        id="newsletter"
        className="border-t border-border py-16"
      >
        <div className="rounded-2xl bg-surface p-8 sm:p-10">
          <h2 className="font-serif text-2xl font-medium">
            5 minutes, once a week
          </h2>
          <p className="mt-3 max-w-lg text-muted">
            The tools, ideas, and lessons that actually moved the needle for me —
            straight to your inbox. No fluff, no spam.
          </p>
          <div className="mt-6">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
