import Link from "next/link";

type Topic = { name: string; slug: string; count: number };

export function TopicPills({
  topics,
  activeSlug,
}: {
  topics: Topic[];
  activeSlug?: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/articles"
        className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
          !activeSlug
            ? "border-accent bg-accent text-accent-foreground"
            : "border-border text-muted hover:text-foreground"
        }`}
      >
        All
      </Link>
      {topics.map((topic) => (
        <Link
          key={topic.slug}
          href={`/articles?topic=${topic.slug}`}
          className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
            activeSlug === topic.slug
              ? "border-accent bg-accent text-accent-foreground"
              : "border-border text-muted hover:text-foreground"
          }`}
        >
          {topic.name}
        </Link>
      ))}
    </div>
  );
}
