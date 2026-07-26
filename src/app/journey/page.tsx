import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "My Journey",
  description: "From employee to founder to my first €1,000,000 — the real story.",
};

export default function JourneyPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-serif text-4xl font-medium tracking-tight">My Journey</h1>
      <p className="mt-4 text-lg text-muted">{siteConfig.author.shortBio}</p>

      <div className="prose prose-lg mt-12 max-w-none">
        <h2>Where I started</h2>
        <p>
          [Edit this: a few honest paragraphs on the job you had, what it paid, and
          what it felt like before anything changed. Specifics beat generalities —
          the title, the commute, the moment you knew something had to give.]
        </p>

        <h2>The leap</h2>
        <p>
          [Edit this: what actually triggered the decision to go out on your own?
          What did you risk? What did the people around you say? This is the part
          readers relate to most, so don&apos;t polish it too much.]
        </p>

        <h2>Building the first company</h2>
        <p>
          [Edit this: the messy middle. First customers, first mistakes, the
          decisions that mattered more than they seemed to at the time.]
        </p>

        <h2>The first &euro;1,000,000</h2>
        <p>
          [Edit this: what that milestone actually looked like from the inside —
          and what it did and didn&apos;t change.]
        </p>

        <h2>What I&apos;d tell you over coffee</h2>
        <p>
          [Edit this: the short, unvarnished version — the stuff you&apos;d only say
          off the record.]
        </p>
      </div>

      <div className="mt-16 rounded-2xl bg-surface p-8">
        <h2 className="font-serif text-xl font-medium">
          Want the lessons as they happen?
        </h2>
        <p className="mt-2 text-sm text-muted">
          I write about this stuff as I live it, not after I&apos;ve forgotten the
          hard parts.
        </p>
        <div className="mt-5">
          <NewsletterForm />
        </div>
      </div>
    </article>
  );
}
