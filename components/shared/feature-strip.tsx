import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";

export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

const colsClass: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

/**
 * Restrained divided strip — icon, title, one-line description, optional link.
 * Replaces the repeated "3-column icon grid" pattern used across several inner
 * pages (over-ons kernwaarden, samenwerken, werken-bij) with one shared,
 * already-proven-out treatment (originally the homepage TrustStrip).
 */
function FeatureStrip({
  items,
  surface = "muted",
  className,
}: {
  items: FeatureItem[];
  surface?: "default" | "muted";
  className?: string;
}) {
  return (
    <Section surface={surface} className={cn("border-y border-border py-10 md:py-12", className)}>
      <Reveal>
        <div
          className={cn(
            "grid gap-x-6 gap-y-10 sm:grid-cols-2",
            colsClass[items.length] ?? "lg:grid-cols-3"
          )}
        >
          {items.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "flex flex-col gap-3 lg:border-l lg:border-border lg:pl-6",
                index === 0 && "lg:border-l-0 lg:pl-0"
              )}
            >
              <item.icon className="size-5 text-primary" aria-hidden="true" strokeWidth={1.75} />
              <div>
                <h3 className="text-base font-medium text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
              {item.href ? (
                <Link
                  href={item.href}
                  className="mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  {item.linkLabel ?? "Meer informatie"}
                  <ArrowRightIcon className="size-3.5" aria-hidden="true" />
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

export { FeatureStrip };
