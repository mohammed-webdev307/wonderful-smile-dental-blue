import { MapPin, Navigation, Building2 } from "lucide-react";
import { MAPS_EMBED_URL, MAPS_URL, useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function Location() {
  const { t } = useLanguage();

  return (
    <section className="page-location py-12 md:py-[60px] lg:py-20" aria-labelledby="location-heading">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-4 sm:p-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -end-16 -top-16 h-56 w-56 rounded-full bg-medical/20 blur-3xl"
            />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-soft">
                  <Building2 className="h-6 w-6 text-primary" aria-hidden="true" />
                </span>
                <div>
                  <h2
                    id="location-heading"
                    className="text-2xl font-extrabold text-foreground sm:text-4xl"
                  >
                    {t.location.heading}
                  </h2>
                  <p className="mt-1 flex items-center gap-2 text-sm leading-7 text-muted-foreground sm:text-base">
                    <MapPin className="h-4 w-4 shrink-0 text-medical" aria-hidden="true" />
                    <span>{t.location.text}</span>
                  </p>
                </div>
              </div>

              <iframe
                title={t.location.heading}
                src={MAPS_EMBED_URL}
                loading="lazy"
                className="mt-5 h-[300px] w-full rounded-[20px] border-0 sm:h-[380px]"
              />

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                {t.location.button}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
