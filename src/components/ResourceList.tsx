import type { Resource } from "@/lib/wisdom";

export function ResourceList({ items }: { items: Resource[] }) {
  return (
    <ul className="mt-6 space-y-6">
      {items.map((item) => (
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
            <span className="text-lg font-medium text-foreground">{item.title}</span>
          )}
          <p className="text-sm text-muted">{item.creator}</p>
          <p className="mt-2 text-muted">{item.note}</p>
        </li>
      ))}
    </ul>
  );
}
