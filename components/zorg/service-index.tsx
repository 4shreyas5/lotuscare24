"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlaceholderImage } from "@/components/media/placeholder-image";
import { images } from "@/lib/images";
import type { ServiceContent } from "@/lib/service-content";

/**
 * The centerpiece of /zorg: a vertical editorial index (desktop) with a
 * dedicated image panel that crossfades to match the hovered/focused row, and
 * a single-open accordion (mobile) — not a repeat of the desktop interaction,
 * since hover has no mobile equivalent. Both read from the same
 * `serviceContent` data; no copy is duplicated here.
 */
function ServiceIndex({ services }: { services: ServiceContent[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      {/* Desktop: index + revealing visual */}
      <ol className="hidden lg:col-span-7 lg:block lg:border-t lg:border-border">
        {services.map((service, index) => (
          <ServiceRow
            key={service.slug}
            service={service}
            index={index}
            active={index === activeIndex}
            onActivate={() => setActiveIndex(index)}
          />
        ))}
      </ol>
      <div className="hidden lg:col-span-5 lg:block" aria-hidden="true">
        <div className="sticky top-28">
          <ServiceVisual services={services} activeIndex={activeIndex} />
        </div>
      </div>

      {/* Mobile: single-open accordion */}
      <div className="lg:hidden">
        <Accordion defaultValue={[services[0]?.slug]}>
          {services.map((service, index) => {
            const image = images[service.image];
            return (
              <AccordionItem key={service.slug} value={service.slug}>
                <AccordionTrigger className="items-center py-5 text-base">
                  <span className="flex items-center gap-4">
                    <span
                      className="font-heading text-2xl text-accent"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg font-medium text-foreground">
                      {service.label}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-4 pl-11">
                    <PlaceholderImage
                      src={image.src}
                      alt={image.alt}
                      variant="editorial"
                      sizes="90vw"
                    />
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {service.heroIntro}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      Meer informatie
                      <ArrowRightIcon className="size-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}

function ServiceRow({
  service,
  index,
  active,
  onActivate,
}: {
  service: ServiceContent;
  index: number;
  active: boolean;
  onActivate: () => void;
}) {
  return (
    <li className="border-b border-border">
      <Link
        href={service.href}
        onMouseEnter={onActivate}
        onFocus={onActivate}
        aria-current={active ? "true" : undefined}
        className="group flex items-start gap-6 rounded-lg py-7 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        <span
          className={cn(
            "font-heading text-4xl transition-colors duration-300",
            active ? "text-accent" : "text-foreground/15"
          )}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex flex-1 flex-col gap-1.5 pt-1.5">
          <span
            className={cn(
              "font-medium transition-all duration-300",
              active ? "text-2xl text-foreground" : "text-xl text-muted-foreground"
            )}
          >
            {service.label}
          </span>
          <span
            className={cn(
              "text-sm leading-relaxed transition-colors duration-300 sm:text-base",
              active ? "text-muted-foreground" : "text-muted-foreground/70"
            )}
          >
            {service.heroIntro}
          </span>
        </span>
        <ArrowRightIcon
          className={cn(
            "mt-2.5 size-5 shrink-0 transition-all duration-300",
            active
              ? "translate-x-0 text-accent opacity-100"
              : "-translate-x-1 text-muted-foreground opacity-0"
          )}
          aria-hidden="true"
        />
      </Link>
    </li>
  );
}

function ServiceVisual({
  services,
  activeIndex,
}: {
  services: ServiceContent[];
  activeIndex: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative aspect-4/5 w-full overflow-hidden rounded-lg bg-muted">
      {services.map((service, index) => {
        const image = images[service.image];
        return (
          <motion.div
            key={service.slug}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: index === activeIndex ? 1 : 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: "easeInOut" }}
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 38vw, 1px"
              className="object-cover photo-warm"
            />
          </motion.div>
        );
      })}
    </div>
  );
}

export { ServiceIndex };
