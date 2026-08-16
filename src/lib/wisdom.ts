// The Wisdom Chest — everything on /wisdom is edited from here.
// Add, remove, or reorder freely. Nothing here needs code changes elsewhere.

export type Quote = {
  text: string;
  author: string;
  note?: string;
};

export type Resource = {
  title: string;
  creator: string;
  note: string;
  href?: string;
};

export type Person = {
  name: string;
  relationship: string;
  note: string;
  href?: string;
};

export type WisdomSection = {
  key: string;
  label: string;
};

export const wisdomSections: WisdomSection[] = [
  { key: "quotes", label: "Quotes I Ponder On" },
  { key: "books", label: "Books" },
  { key: "podcasts", label: "Podcasts" },
  { key: "videos", label: "YouTube & Videos" },
  { key: "people", label: "People" },
  { key: "tools", label: "Apps & Tools" },
];

export const quotes: Quote[] = [
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    note: "I come back to this every time I catch myself waiting for the 'right' moment.",
  },
  {
    text: "What you leave behind is not what is engraved in stone monuments, but what is woven into the lives of others.",
    author: "Pericles",
    note: "Why this whole site exists, honestly.",
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Will Durant, paraphrasing Aristotle",
  },
  {
    text: "[Edit this: add a quote that's actually shaped you, and one line on why it stuck.]",
    author: "Source",
  },
];

export const books: Resource[] = [
  {
    title: "The E-Myth Revisited",
    creator: "Michael Gerber",
    note: "The book that made me realize working IN my business and working ON it are two different jobs.",
  },
  {
    title: "Deep Work",
    creator: "Cal Newport",
    note: "Reset how I think about attention as a founder's scarcest resource.",
  },
];

export const podcasts: Resource[] = [
  {
    title: "Add a podcast you actually listen to",
    creator: "Host name",
    note: "One line on why it earned a permanent spot in your queue.",
  },
];

export const videos: Resource[] = [
  {
    title: "Add a talk or video that shifted something for you",
    creator: "Speaker name",
    note: "What changed after you watched it.",
  },
];

export const people: Person[] = [
  {
    name: "Add someone who shaped you",
    relationship: "How you know them",
    note: "What they taught you, in a sentence or two — the kind of thing you'd want your kids to know about this person even if they never meet them.",
  },
];

// Tools that got you here — the ones you've since moved on from but that mattered at the time.
export const toolsThen: Resource[] = [
  {
    title: "Add a tool that got you here",
    creator: "What it was for",
    note: "What it did for you at the time, even if you don't use it anymore.",
  },
];

// Tools you actually rely on today.
export const toolsNow: Resource[] = [
  {
    title: "Add a tool you use every day now",
    creator: "What it's for",
    note: "Why it's still in daily rotation.",
  },
];
