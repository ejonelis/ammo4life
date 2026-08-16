import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Nav } from "@/components/Nav";

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
        <Nav items={siteConfig.nav} />
      </div>
    </header>
  );
}
