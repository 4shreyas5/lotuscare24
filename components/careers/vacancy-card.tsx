import Link from "next/link";
import { ArrowRightIcon, Clock, MapPin } from "lucide-react";

import type { Vacancy } from "@/lib/vacancies";

/** Editorial index row — dividers and typography, not a bordered card. */
function VacancyCard({ vacancy }: { vacancy: Vacancy }) {
  return (
    <Link
      href={`/werken-bij/solliciteren?functie=${vacancy.slug}`}
      className="group flex flex-col gap-3 border-b border-border py-7 first:border-t sm:flex-row sm:items-center sm:justify-between sm:gap-6"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-medium text-foreground transition-colors group-hover:text-primary sm:text-2xl">
          {vacancy.title}
        </h3>
        {vacancy.description && (
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            {vacancy.description}
          </p>
        )}
        {(vacancy.hours || vacancy.region) && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
            {vacancy.hours && (
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3.5" aria-hidden="true" />
                {vacancy.hours}
              </span>
            )}
            {vacancy.region && (
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3.5" aria-hidden="true" />
                {vacancy.region}
              </span>
            )}
          </div>
        )}
      </div>
      <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary">
        Solliciteer
        <ArrowRightIcon
          className="size-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

export { VacancyCard };
