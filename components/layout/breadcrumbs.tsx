import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

import { Container } from "@/components/layout/container";

type Crumb = {
  label: string;
  href?: string;
};

/** Dutch breadcrumb trail for deeper pages. The final item is the current page (no link). */
function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="border-b border-border/70 bg-background">
      <Container size="default" className="py-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={item.label} className="flex items-center gap-1.5">
                {index > 0 ? (
                  <ChevronRightIcon
                    className="size-3.5 shrink-0 text-muted-foreground/60"
                    aria-hidden="true"
                  />
                ) : null}
                {item.href && !isLast ? (
                  <Link href={item.href} className="transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={isLast ? "text-foreground" : undefined}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}

export { Breadcrumbs };
