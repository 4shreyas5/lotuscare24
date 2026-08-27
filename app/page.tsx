import Link from "next/link";

import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { ServiceOverview } from "@/components/home/service-overview";
import { HowItWorks } from "@/components/home/how-it-works";
import { MantelzorgCallout } from "@/components/home/mantelzorg-callout";
import { SpecializedCare } from "@/components/home/specialized-care";
import { QualitySection } from "@/components/home/quality-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { FAQSection } from "@/components/home/faq-section";
import { Section } from "@/components/layout/section";
import { SplitSection } from "@/components/layout/split-section";
import { CTAEditorial } from "@/components/layout/cta-editorial";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />

      <Section>
        <SplitSection
          eyebrow="Wie wij zijn"
          title="Zorg die begint bij luisteren"
          image={images.keukenWarmte}
          balance="asymmetric"
          imageVariant="editorial"
        >
          <p>
            LotusCare24 is er voor mensen die zorg nodig hebben in hun eigen
            huis — en voor de mensen om hen heen. Goede zorg begint met
            luisteren: naar wat iemand nodig heeft, wat belangrijk is, en hoe
            familie daarbij betrokken wil zijn.
          </p>
          <p>
            Vanuit dat gesprek stellen we een klein, vast team samen dat de
            zorg uitvoert — in nauwe afstemming met u en uw naasten.
          </p>
        </SplitSection>
      </Section>

      <ServiceOverview />
      <HowItWorks />

      <Section>
        <SplitSection
          eyebrow="Persoonlijke zorg"
          title="Zorg die aansluit bij wie u bent"
          image={images.persoonlijkeVerzorging}
          imagePosition="left"
          balance="asymmetric"
          imageVariant="portrait"
        >
          <p>
            Geen vaste protocollen, maar aandacht voor uw gewoontes, uw tempo
            en uw wensen. Ons team neemt de tijd om te luisteren — zodat zorg
            nooit aanvoelt als iets dat u overkomt, maar als iets dat bij u
            past.
          </p>
          <p>
            Waardigheid en eigen regie staan daarbij voorop: u blijft
            zoveel mogelijk de baas over uw eigen dag.
          </p>
        </SplitSection>
      </Section>

      <MantelzorgCallout />
      <SpecializedCare />
      <QualitySection />
      <TestimonialsSection />
      <FAQSection />

      <CTAEditorial
        eyebrow="Klaar om kennis te maken?"
        title="Laten we rustig kennismaken"
        intro="In een rustig, vrijblijvend gesprek bespreken we uw situatie — zonder verplichtingen."
        image={images.heroThuiszorg}
        actions={
          <Button size="lg" render={<Link href="/kennismaken" />}>
            Plan een kennismaking
          </Button>
        }
      />
    </>
  );
}
