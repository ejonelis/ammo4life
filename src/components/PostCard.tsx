import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/format";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="border-b border-border py-8 first:pt-0">
      <Link href={`/articles/${post.slug}`} className="group block">
        <h3 className="font-serif text-2xl font-medium leading-snug text-foreground transition-colors group-hover:text-accent">
          {post.title}
        </h3>
        <p className="mt-2 text-muted">{post.excerpt}</p>
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
      </Link>
    </article>
  );
}
