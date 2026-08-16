"use client";

import { useState } from "react";
import Link from "next/link";

type NavItem = { label: string; href: string };

export function Nav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="hidden items-center gap-x-6 text-sm sm:flex">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-muted transition-colors hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/#newsletter"
          className="rounded-full bg-accent px-4 py-1.5 text-accent-foreground transition-opacity hover:opacity-90"
        >
          Subscribe
        </Link>
      </nav>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-9 w-9 items-center justify-center rounded-full text-foreground sm:hidden"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          className="h-5 w-5"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open && (
        <nav className="absolute right-0 top-full z-10 mt-3 w-56 rounded-2xl border border-border bg-background p-3 shadow-lg sm:hidden">
          <div className="flex flex-col">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link
            href="/#newsletter"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-accent px-4 py-2 text-center text-sm text-accent-foreground transition-opacity hover:opacity-90"
          >
            Subscribe
          </Link>
        </nav>
      )}
    </div>
  );
}
