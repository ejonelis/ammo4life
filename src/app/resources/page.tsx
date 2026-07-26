import type { Metadata } from "next";
import { resourceCategories } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Resources",
  description: "The books, podcasts, videos, and tools that actually helped.",
};

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-4xl font-medium tracking-tight">Resources</h1>
      <p className="mt-4 max-w-xl text-muted">
        Not an affiliate-link dump &mdash; just the books, podcasts, videos, and
        tools that actually changed how I work, and a line on why each one earned
        its place here.
      </p>

      <div className="mt-14 space-y-14">
        {resourceCategories.map((category) => (
          <section key={category.name}>
            <h2 className="font-serif text-2xl font-medium">{category.name}</h2>
            <ul className="mt-6 space-y-6">
              {category.items.map((item) => (
                <li key={item.title} className="border-b border-border pb-6 last:border-b-0">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-foreground hover:text-accent"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <span className="text-lg font-medium text-foreground">
                      {item.title}
                    </span>
                  )}
                  <p className="text-sm text-muted">{item.creator}</p>
                  <p className="mt-2 text-muted">{item.note}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
