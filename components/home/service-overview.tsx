import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { zorgNavLinks, type NavLink } from "@/lib/nav-items";

const dailyCare = zorgNavLinks.slice(0, 4);
const specializedCare = zorgNavLinks.slice(4);

function ServiceRow({ item, index }: { item: NavLink; index: number }) {
  return (
    <li className="border-b border-border">
      <Link
        href={item.href}
        className="group flex items-start justify-between gap-6 py-5"
      >
        <span className="flex items-start gap-4">
          <span
            className="pt-0.5 font-heading text-sm text-muted-foreground"
            aria-hidden="true"
          >
            {String(index).padStart(2, "0")}
          </span>
          <span className="flex flex-col gap-1">
            <span className="text-base font-medium text-foreground transition-colors group-hover:text-primary">
              {item.label}
            </span>
            <span className="text-sm text-muted-foreground">
              {item.description}
            </span>
          </span>
        </span>
        <ArrowRightIcon
          className="mt-1.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
          aria-hidden="true"
        />
      </Link>
    </li>
  );
}

/** Zorgaanbod as an editorial index, not a wall of identical cards — grouped by daily vs. specialised care. */
function ServiceOverview() {
  return (
    <Section surface="muted">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <span className="text-sm font-medium tracking-wide text-primary uppercase">
            Zorgaanbod
          </span>
          <h2 className="mt-4 text-balance text-2xl leading-tight font-medium sm:text-3xl">
            Zorg die aansluit bij uw situatie
          </h2>
          <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Van hulp bij dagelijkse verzorging tot intensieve 24-uurszorg —
            met één vast team dat de zorg rond u organiseert.
          </p>
          <Button
            variant="outline"
            className="mt-6"
            render={<Link href="/zorg" />}
          >
            Volledig zorgaanbod
          </Button>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <ul className="border-t border-border">
            {dailyCare.map((item, i) => (
              <ServiceRow key={item.href} item={item} index={i + 1} />
            ))}
          </ul>
          <p className="pt-6 pb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Intensieve en specialistische zorg
          </p>
          <ul>
            {specializedCare.map((item, i) => (
              <ServiceRow
                key={item.href}
                item={item}
                index={i + 1 + dailyCare.length}
              />
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

export { ServiceOverview };
