import { getCollection, type CollectionEntry } from 'astro:content';
import readingTime from 'reading-time';

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  topics: string[];
  readingTime: string;
};

export function slugifyTopic(topic: string): string {
  return topic
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function toMeta(entry: CollectionEntry<'posts'>): PostMeta {
  return {
    slug: entry.id,
    title: entry.data.title,
    date: entry.data.date,
    excerpt: entry.data.excerpt,
    topics: entry.data.topics,
    readingTime: readingTime(entry.body ?? '').text,
  };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const entries = await getCollection('posts');
  return entries.map(toMeta).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getAllTopics(): Promise<{ name: string; slug: string; count: number }[]> {
  const posts = await getAllPosts();
  const map = new Map<string, { name: string; slug: string; count: number }>();

  for (const post of posts) {
    for (const topic of post.topics) {
      const slug = slugifyTopic(topic);
      const existing = map.get(slug);
      if (existing) existing.count += 1;
      else map.set(slug, { name: topic, slug, count: 1 });
    }
  }

  return Array.from(map.values()).sort((a, b) => b.count - a.count);
}
