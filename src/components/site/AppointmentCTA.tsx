import { Phone, Instagram, MessageSquare } from "lucide-react";
import { useLanguage, scrollToSection, PHONE } from "@/lib/i18n";
import { Reveal } from "./Reveal";

export function AppointmentCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-6 md:py-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex min-h-[176px] flex-col justify-center rounded-[2rem] bg-[linear-gradient(110deg,#258CD3,#72B9EA)] px-5 py-7 text-center sm:min-h-[220px] sm:px-12 sm:py-14">
            <h2 className="mx-auto max-w-3xl text-2xl font-extrabold leading-relaxed text-primary-foreground sm:text-4xl">
              {t.cta.heading}
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-primary-foreground/90 sm:mt-4 sm:text-lg">
              {t.cta.text}
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-7 sm:gap-3">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-card px-7 py-3.5 text-base font-bold text-foreground transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                {t.cta.call}
              </a>
              <span className="inline-flex min-h-12 items-center gap-2 rounded-full border border-primary-foreground/60 px-7 py-3.5 text-base font-bold text-primary-foreground">
                <Instagram className="h-4 w-4" aria-hidden="true" />
                {t.cta.instagram}
              </span>
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-primary-foreground/60 px-7 py-3.5 text-base font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                {t.cta.contact}
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
