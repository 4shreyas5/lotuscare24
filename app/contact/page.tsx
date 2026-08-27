import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Section } from "@/components/layout/section";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met LotusCare24 voor vragen over onze zorg.",
};

const contactDetails = [
  { icon: Phone, label: "[CONTENT NODIG: telefoonnummer]" },
  { icon: Mail, label: "[CONTENT NODIG: e-mailadres]" },
  { icon: MapPin, label: "[CONTENT NODIG: adresgegevens]" },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <Section className="pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-sm font-medium tracking-wide text-primary uppercase">
              Contact
            </span>
            <h1 className="text-display-md mt-4 text-balance leading-[1.05] font-medium">
              We horen graag van u
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Heeft u een vraag over onze zorg, of wilt u iets anders weten?
              Vul het formulier in of neem rechtstreeks contact op. Zoekt u
              een kennismakingsgesprek over zorg voor uzelf of een naaste?
              Ga dan naar onze{" "}
              <a href="/kennismaken" className="text-primary underline underline-offset-2">
                kennismakenpagina
              </a>
              .
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {contactDetails.map((detail) => (
                <li
                  key={detail.label}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <detail.icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  {detail.label}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex h-40 items-center justify-center rounded-xl border border-dashed border-border text-center text-xs text-muted-foreground">
              [CONTENT NODIG: kaart/route naar locatie, zodra een
              bezoekadres bekend is]
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
