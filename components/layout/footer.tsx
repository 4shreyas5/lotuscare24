import Link from "next/link";
import { Mail } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Wordmark } from "@/components/brand/wordmark";
import { footerNavGroups, legalNavLinks } from "@/lib/nav-items";

function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <Container size="default" className="py-12 lg:py-16">
        <div className="flex flex-col gap-4 border-b border-border pb-10">
          <Wordmark />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Thuiszorg met persoonlijke aandacht — een vast, klein team dat u
            leert kennen.
          </p>
          <a
            href="mailto:info@lotusvitaal.com"
            className="inline-flex min-h-11 w-fit items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            <Mail className="size-4 text-primary" aria-hidden="true" />
            info@lotusvitaal.com
          </a>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 pt-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {footerNavGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-medium text-foreground">
                {group.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Lotus Vitaal. Alle rechten
            voorbehouden.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
