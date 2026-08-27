import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { PlaceholderImage } from "@/components/media/placeholder-image";
import { images } from "@/lib/images";
import type { ServiceContent } from "@/lib/service-content";

/**
 * Editorial "further reading" list — small thumbnail + strong typographic
 * link, not another card grid. See docs/DESIGN-SYSTEM.md.
 */
function RelatedServices({ services }: { services: ServiceContent[] }) {
  return (
    <Section>
      <SectionHeading eyebrow="Ook interessant" title="Misschien past dit ook bij u" />
      <Reveal delay={0.1} className="mt-10">
        <ul className="flex flex-col divide-y divide-border border-t border-border sm:grid sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:border-t-0">
          {services.map((service) => {
            const image = images[service.image];
            return (
              <li key={service.slug}>
                <Link
                  href={service.href}
                  className="group flex items-center gap-4 py-6 sm:h-full sm:flex-col sm:items-start sm:gap-4 sm:px-6 sm:py-2 sm:first:pl-0 sm:last:pr-0"
                >
                  <PlaceholderImage
                    src={image.src}
                    alt={image.alt}
                    variant="inset"
                    radius="sm"
                    className="size-16 shrink-0 sm:aspect-4/3 sm:size-full"
                    sizes="(min-width: 640px) 20vw, 64px"
                  />
                  <span className="flex flex-col gap-1.5">
                    <span className="text-lg font-medium text-foreground transition-colors group-hover:text-primary sm:text-xl">
                      {service.label}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Meer informatie
                      <ArrowRightIcon
                        className="size-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}

export { RelatedServices };
