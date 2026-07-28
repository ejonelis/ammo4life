type Section = { key: string; label: string };

export function SectionPills({ sections }: { sections: Section[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {sections.map((section) => (
        <a
          key={section.key}
          href={`#${section.key}`}
          className="rounded-full border border-border px-3.5 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
        >
          {section.label}
        </a>
      ))}
    </div>
  );
}
