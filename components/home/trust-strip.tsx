import { HeartHandshake, House, MessageCircle, Users } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";

const items = [
  {
    icon: Users,
    title: "Vaste, vertrouwde gezichten",
    description:
      "Een klein team dat u leert kennen — in plaats van steeds wisselende zorgverleners.",
  },
  {
    icon: House,
    title: "Zorg in uw eigen huis",
    description:
      "Zoveel mogelijk uw eigen ritme en gewoontes, met ondersteuning waar dat nodig is.",
  },
  {
    icon: MessageCircle,
    title: "Eerst luisteren, dan zorgen",
    description:
      "Zorg die begint bij uw situatie — niet bij een standaardpakket.",
  },
  {
    icon: HeartHandshake,
    title: "Ook aandacht voor uw naasten",
    description:
      "Familie en mantelzorgers worden gezien, en waar mogelijk betrokken.",
  },
];

/** Calm credibility strip — positioning themes, not fabricated badges/stats. */
function TrustStrip() {
  return (
    <Section className="border-y border-border py-8 md:py-10">
      <h2 className="sr-only">Waarom LotusCare24</h2>
      <Reveal>
        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 lg:pl-6 lg:first:pl-0"
            >
              <item.icon
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
                strokeWidth={1.75}
              />
              <div>
                <h3 className="text-sm font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-sm leading-snug text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

export { TrustStrip };
