import Link from "next/link";
import { ArrowRightIcon, Clock, Feather } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { PlaceholderImage } from "@/components/media/placeholder-image";
import { images } from "@/lib/images";

const items = [
  {
    icon: Clock,
    title: "24-uurszorg",
    description:
      "Soms is er de hele dag en nacht iemand nodig. Dan organiseren we zorg die dichtbij blijft — afgestemd op wat nodig is, op elk moment van de dag.",
    href: "/zorg/24-uurszorg",
  },
  {
    icon: Feather,
    title: "Palliatieve zorg",
    description:
      "In de laatste levensfase draait alles om rust, comfort en aandacht — voor de cliënt, en voor de mensen eromheen. Wij bieden zorg die daarbij aansluit.",
    href: "/zorg/palliatieve-zorg",
  },
];

/**
 * The sensitive end of the service range gets one calm, dignified atmospheric
 * image rather than a wall of text — restrained (no dark overlay, no gimmick),
 * chosen deliberately to avoid anything clinical or literal.
 */
function SpecializedCare() {
  return (
    <Section surface="muted">
      <SectionHeading
        eyebrow="Intensieve en specialistische zorg"
        title="Wanneer er meer nodig is"
      />
      <Reveal delay={0.1} className="mt-10">
        <PlaceholderImage
          src={images.handenVertrouwen.src}
          alt={images.handenVertrouwen.alt}
          variant="atmospheric"
          radius="sm"
          sizes="(min-width: 1024px) 80vw, 100vw"
          className="max-h-105"
        />
      </Reveal>
      <Reveal delay={0.15} className="mt-12">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col gap-4">
              <item.icon
                className="size-5 text-primary"
                aria-hidden="true"
                strokeWidth={1.75}
              />
              <h3 className="text-xl font-medium text-foreground">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                Meer informatie
                <ArrowRightIcon className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

export { SpecializedCare };
