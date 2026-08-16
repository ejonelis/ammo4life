import type { Quote } from "@/lib/wisdom";

export function QuoteList({ quotes }: { quotes: Quote[] }) {
  return (
    <div className="space-y-5">
      {quotes.map((quote) => (
        <blockquote key={quote.text} className="border-l-2 border-accent pl-5">
          <p className="font-serif text-lg italic leading-snug text-foreground">
            &ldquo;{quote.text}&rdquo;
          </p>
          {(quote.author || quote.note) && (
            <footer className="mt-2 text-sm text-muted">
              {quote.author && <>&mdash; {quote.author}</>}
              {quote.note && <span className="block mt-1">{quote.note}</span>}
            </footer>
          )}
        </blockquote>
      ))}
    </div>
  );
}
