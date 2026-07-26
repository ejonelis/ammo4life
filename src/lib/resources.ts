// Curated resources page data. Edit freely — add, remove, or reorder items.
export type Resource = {
  title: string;
  creator: string;
  note: string;
  href?: string;
};

export type ResourceCategory = {
  name: string;
  items: Resource[];
};

export const resourceCategories: ResourceCategory[] = [
  {
    name: "Books",
    items: [
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
    ],
  },
  {
    name: "Podcasts",
    items: [
      {
        title: "Add a podcast you actually listen to",
        creator: "Host name",
        note: "One line on why it earned a permanent spot in your queue.",
      },
    ],
  },
  {
    name: "Videos & Talks",
    items: [
      {
        title: "Add a talk that shifted something for you",
        creator: "Speaker name",
        note: "What changed after you watched it.",
      },
    ],
  },
  {
    name: "Tools",
    items: [
      {
        title: "Add a tool you use weekly",
        creator: "Category, e.g. 'Finance'",
        note: "What it replaced and why it stuck.",
      },
    ],
  },
];
