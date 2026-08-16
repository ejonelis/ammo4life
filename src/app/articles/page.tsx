import type { Metadata } from "next";
import { getAllPosts, getAllTopics, getPostsByTopic } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";
import { TopicPills } from "@/components/TopicPills";

export const metadata: Metadata = {
  title: "Articles",
  description: "Everything I've written about building a business and building myself — notes to myself.",
};

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;
  const topics = getAllTopics();
  const posts = topic ? getPostsByTopic(topic) : getAllPosts();
  const activeTopic = topics.find((t) => t.slug === topic);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-4xl font-medium tracking-tight">Articles</h1>
      <p className="mt-4 max-w-xl text-muted">
        Everything I&apos;ve written about building a business and building
        myself &mdash; notes to myself, not advice for you, kept in no particular
        order except the order I learned it in.
      </p>

      {topics.length > 0 && (
        <div className="mt-8">
          <TopicPills topics={topics} activeSlug={activeTopic?.slug} />
        </div>
      )}

      <div className="mt-12">
        {posts.length === 0 ? (
          <p className="text-muted">No articles here yet &mdash; check back soon.</p>
        ) : (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        )}
      </div>
    </div>
  );
}
