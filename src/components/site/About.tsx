import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import aboutImage from "@/assets/about-care.jpg";

const icons = [HeartHandshake, ShieldCheck, Sparkles];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-20 py-8 md:py-[60px] lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-4 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="order-2 min-w-0 lg:order-1">
          <p className="text-sm font-semibold text-primary sm:text-base">{t.brand.doctor}</p>
          <h2 className="text-2xl font-extrabold text-foreground sm:text-4xl lg:text-[42px]">
            {t.about.heading}
          </h2>
          <p className="mt-3 text-[15px] leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-9">
            {t.about.text}
          </p>

          <ul className="mt-5 grid gap-2 sm:mt-8 sm:gap-3 sm:grid-cols-3">
            {t.about.cards.map((card, i) => {
              const Icon = icons[i] ?? Sparkles;
              return (
                <li
                  key={card}
                  className="min-w-0 rounded-2xl border border-border bg-card p-3.5 transition-shadow hover:shadow-[0_18px_40px_-30px_rgba(39,50,58,0.5)] sm:p-5"
                >
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <p className="mt-2 text-sm font-semibold text-foreground sm:mt-3">{card}</p>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={100} className="order-1 min-w-0 lg:order-2">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card">
            <img
              src={aboutImage}
              alt={t.about.imageAlt}
              width={1104}
              height={1104}
              loading="lazy"
              className="aspect-[3/2] w-full object-cover sm:aspect-[4/3] lg:aspect-square"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
