import Link from "next/link";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { CTAEditorial } from "@/components/layout/cta-editorial";
import { Button } from "@/components/ui/button";
import { InfoList } from "@/components/service/info-list";
import { NextSteps } from "@/components/service/next-steps";
import { RelatedServices } from "@/components/service/related-services";
import { EditorialStatement } from "@/components/shared/editorial-statement";
import { images } from "@/lib/images";
import { getRelatedServices, type ServiceContent } from "@/lib/service-content";

function ServicePageTemplate({ service }: { service: ServiceContent }) {
  const image = images[service.image];
  const related = getRelatedServices(service.slug);

  return (
    <>
      <Breadcrumbs items={[{ label: "Zorg", href: "/zorg" }, { label: service.label }]} />
      <PageHero
        size="large"
        eyebrow={service.eyebrow}
        title={service.heroTitle}
        intro={service.heroIntro}
        image={image}
        imagePosition={service.heroImagePosition}
        imageVariant={service.heroImageVariant}
        spacious={service.heroSpacious}
        actions={
          <>
            <Button size="lg" render={<Link href="/kennismaken" />}>
              Plan een kennismaking
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/zorg" />}>
              Bekijk alle zorg
            </Button>
          </>
        }
      />

      <Section>
        <InfoList title="Voor wie is dit?" items={service.voorWie} />
      </Section>

      <Section surface="muted">
        <EditorialStatement
          eyebrow="Wat betekent deze zorg?"
          statement={service.watBetekentDezeZorg}
        />
      </Section>

      <Section>
        <InfoList title="Wat kunt u verwachten?" items={service.watKuntUVerwachten} />
      </Section>

      <NextSteps />
      <RelatedServices services={related} />

      <CTAEditorial
        title="Benieuwd of dit bij uw situatie past?"
        intro="In een vrijblijvend gesprek bespreken we uw vraag en denken we mee over passende zorg."
        image={image}
        actions={
          <Button size="lg" render={<Link href="/kennismaken" />}>
            Plan een kennismaking
          </Button>
        }
      />
    </>
  );
}

export { ServicePageTemplate };
