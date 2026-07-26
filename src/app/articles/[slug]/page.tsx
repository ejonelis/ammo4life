import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/format";
import { NewsletterForm } from "@/components/NewsletterForm";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link href="/articles" className="text-sm text-muted hover:text-accent">
        &larr; All articles
      </Link>

      <header className="mt-6 mb-10">
        <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>&middot;</span>
          <span>{post.readingTime}</span>
          {post.topics.length > 0 && (
            <>
              <span aria-hidden>&middot;</span>
              <span>{post.topics.join(", ")}</span>
            </>
          )}
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        <MDXRemote source={post.content} />
      </div>

      <div className="mt-16 rounded-2xl bg-surface p-8">
        <h2 className="font-serif text-xl font-medium">Enjoyed this?</h2>
        <p className="mt-2 text-sm text-muted">
          Get the next one straight to your inbox, once a week.
        </p>
        <div className="mt-5">
          <NewsletterForm />
        </div>
      </div>
    </article>
  );
}
