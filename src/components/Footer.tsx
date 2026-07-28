import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { key: "twitter", label: "X / Twitter", href: siteConfig.social.twitter },
  { key: "instagram", label: "Instagram", href: siteConfig.social.instagram },
  { key: "youtube", label: "YouTube", href: siteConfig.social.youtube },
  { key: "linkedin", label: "LinkedIn", href: siteConfig.social.linkedin },
].filter((link) => link.href);

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. Written down so it
          isn&apos;t lost.
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Link href="/journey" className="transition-colors hover:text-foreground">
            My Journey
          </Link>
        </div>
      </div>
    </footer>
  );
}
