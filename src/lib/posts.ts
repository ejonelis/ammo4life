import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  topics: string[];
  readingTime: string;
};

export type Post = PostMeta & {
  content: string;
};

function slugifyTopic(topic: string): string {
  return topic
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function readPostFile(filename: string): Post {
  const slug = filename.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? new Date(0).toISOString(),
    excerpt: data.excerpt ?? "",
    topics: data.topics ?? [],
    readingTime: readingTime(content).text,
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map(readPostFile)
    .filter((post) => post.title && post.date)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(
      (post): PostMeta => ({
        slug: post.slug,
        title: post.title,
        date: post.date,
        excerpt: post.excerpt,
        topics: post.topics,
        readingTime: post.readingTime,
      })
    );
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return readPostFile(`${slug}.mdx`);
}

export function getAllTopics(): { name: string; slug: string; count: number }[] {
  const posts = getAllPosts();
  const map = new Map<string, { name: string; slug: string; count: number }>();

  for (const post of posts) {
    for (const topic of post.topics) {
      const slug = slugifyTopic(topic);
      const existing = map.get(slug);
      if (existing) {
        existing.count += 1;
      } else {
        map.set(slug, { name: topic, slug, count: 1 });
      }
    }
  }

  return Array.from(map.values()).sort((a, b) => b.count - a.count);
}

export function getPostsByTopic(topicSlug: string): PostMeta[] {
  return getAllPosts().filter((post) =>
    post.topics.some((topic) => slugifyTopic(topic) === topicSlug)
  );
}

export { slugifyTopic };
