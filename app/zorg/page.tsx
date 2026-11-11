import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { CTAImage } from "@/components/layout/cta-image";
import { Button } from "@/components/ui/button";
import { EditorialStatement } from "@/components/shared/editorial-statement";
import { ZorgHero } from "@/components/zorg/zorg-hero";
import { ServiceIndex } from "@/components/zorg/service-index";
import { images } from "@/lib/images";
import { serviceContent } from "@/lib/service-content";

export const metadata: Metadata = {
  title: "Zorg",
  description:
    "Het volledige zorgaanbod van Lotus Vitaal: thuiszorg, persoonlijke verzorging, verpleging, begeleiding, 24-uurszorg en palliatieve zorg.",
};

export default function ZorgPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Zorg" }]} />
      <ZorgHero />

      <Section surface="muted">
        <EditorialStatement
          eyebrow="Onze aanpak"
          statement="Zorg is nooit één ding. Hieronder vindt u de zes vormen van zorg die wij bieden — kies wat op dit moment relevant lijkt, of bespreek samen met ons wat het beste past."
          align="center"
        />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Overzicht"
          title="Zes vormen van zorg, één aanpak"
          intro="Beweeg over — of navigeer met het toetsenbord naar — een vorm van zorg om te zien wat die inhoudt."
        />
        <div className="mt-12">
          <ServiceIndex services={serviceContent} />
        </div>
      </Section>

      <Section surface="muted">
        <SectionHeading
          eyebrow="Niet zeker welke zorg u zoekt?"
          title="Dat hoeft u ook niet te weten"
          intro="U hoeft vooraf niet te bepalen welke zorg u nodig heeft. In een kennismakingsgesprek bespreken we uw situatie en denken we mee over wat passend is."
          actions={
            <Button size="lg" variant="outline" render={<Link href="/hoe-wij-helpen/hoe-werkt-het" />}>
              Hoe het werkt
            </Button>
          }
        />
      </Section>

      <CTAImage
        title="Plan een vrijblijvende kennismaking"
        intro="Geen verplichtingen — gewoon een rustig gesprek over uw situatie."
        image={images.team}
        actions={
          <Button size="lg" render={<Link href="/kennismaken" />}>
            Plan een kennismaking
          </Button>
        }
      />
    </>
  );
}
