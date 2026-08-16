import type { Metadata } from "next";
import {
  wisdomSections,
  quotes,
  books,
  podcasts,
  videos,
  people,
  toolsThen,
  toolsNow,
} from "@/lib/wisdom";
import { ResourceList } from "@/components/ResourceList";
import { SectionPills } from "@/components/SectionPills";

export const metadata: Metadata = {
  title: "The Wisdom Chest",
  description:
    "Quotes, books, podcasts, videos, people, and tools worth remembering — kept here so none of it gets lost.",
};

export default function WisdomPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-4xl font-medium tracking-tight">
        The Wisdom Chest
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        The quotes, books, podcasts, videos, and people that actually shaped how I
        think &mdash; plus the apps and tools that got me to where I am, and the
        ones I still use every day. Kept here so none of it gets lost, for whoever
        needs it.
      </p>

      <div className="mt-8">
        <SectionPills sections={wisdomSections} />
      </div>

      <div className="mt-14 space-y-16">
        <section id="quotes">
          <h2 className="font-serif text-2xl font-medium">Quotes I Ponder On</h2>
          <div className="mt-6 space-y-8">
            {quotes.map((quote) => (
              <blockquote
                key={quote.text}
                className="border-l-2 border-accent pl-6"
              >
                <p className="font-serif text-xl italic leading-snug text-foreground">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <footer className="mt-3 text-sm text-muted">
                  &mdash; {quote.author}
                  {quote.note && <span className="block mt-1">{quote.note}</span>}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="books">
          <h2 className="font-serif text-2xl font-medium">Books</h2>
          <ResourceList items={books} />
        </section>

        <section id="podcasts">
          <h2 className="font-serif text-2xl font-medium">Podcasts</h2>
          <ResourceList items={podcasts} />
        </section>

        <section id="videos">
          <h2 className="font-serif text-2xl font-medium">YouTube &amp; Videos</h2>
          <ResourceList items={videos} />
        </section>

        <section id="people">
          <h2 className="font-serif text-2xl font-medium">People</h2>
          <p className="mt-1 text-sm text-muted">
            The ones I like, and the ones who helped me &mdash; whether they know it
            or not.
          </p>
          <ul className="mt-6 space-y-6">
            {people.map((person) => (
              <li
                key={person.name}
                className="border-b border-border pb-6 last:border-b-0"
              >
                {person.href ? (
                  <a
                    href={person.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-foreground hover:text-accent"
                  >
                    {person.name}
                  </a>
                ) : (
                  <span className="text-lg font-medium text-foreground">
                    {person.name}
                  </span>
                )}
                <p className="text-sm text-muted">{person.relationship}</p>
                <p className="mt-2 text-muted">{person.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="tools">
          <h2 className="font-serif text-2xl font-medium">Apps &amp; Tools</h2>
          <p className="mt-1 text-sm text-muted">
            What got me here, and what I actually still reach for every day.
          </p>

          <h3 className="mt-8 text-sm font-medium uppercase tracking-wide text-muted">
            Then &mdash; tools that got me here
          </h3>
          <ResourceList items={toolsThen} />

          <h3 className="mt-8 text-sm font-medium uppercase tracking-wide text-muted">
            Now &mdash; tools I use every day
          </h3>
          <ResourceList items={toolsNow} />
        </section>
      </div>
    </div>
  );
}
