import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "My Journey",
  description: "From employee to building something of my own — the real story, as it happens.",
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

        <h2>Building it now</h2>
        <p>
          [Edit this: the messy middle, as it&apos;s actually happening — first
          customers or first attempts, first mistakes, the decisions that matter
          more than they seem to right now. It&apos;s fine if this isn&apos;t
          finished. That&apos;s the point of writing it down as you go.]
        </p>

        <h2>What I&apos;m building toward</h2>
        <p>
          [Edit this: the goal you&apos;re actually chasing, and why it matters to
          you beyond the number — whatever that goal is for you.]
        </p>

        <h2>What I&apos;d want you to know</h2>
        <p>
          [Edit this: the short, unvarnished version — the stuff you&apos;d want
          your kids to know even if you weren&apos;t there to say it yourself.]
        </p>
      </div>

      <div className="mt-16 rounded-2xl bg-surface p-8">
        <h2 className="font-serif text-xl font-medium">
          Want the lessons as they happen?
        </h2>
        <p className="mt-2 text-sm text-muted">
          I&apos;m writing this down as I live it, not after I&apos;ve forgotten
          the hard parts — for my kids, and for whoever else it helps.
        </p>
        <div className="mt-5">
          <NewsletterForm />
        </div>
      </div>
    </article>
  );
}
