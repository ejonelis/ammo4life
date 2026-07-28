import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-serif text-xl font-medium tracking-tight text-foreground"
        >
          {siteConfig.name}
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm sm:gap-x-6">
          {siteConfig.nav.map((item) => (
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
      </div>
    </header>
  );
}
