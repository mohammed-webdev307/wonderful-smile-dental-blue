import { Link } from "@tanstack/react-router";
import { CalendarCheck, Heart, HeartHandshake, Phone, Sparkles, Stethoscope } from "lucide-react";
import { PHONE, useLanguage } from "@/lib/i18n";

const heroImage = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&auto=format&fit=crop&q=85";
const trustIcons = [HeartHandshake, Stethoscope, Sparkles];

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="home-hero relative overflow-hidden px-4 pb-24 pt-10 sm:px-6 sm:pb-28 sm:pt-16 lg:min-h-[680px] lg:px-8 lg:pt-16">
      <div className="home-hero__wave" aria-hidden="true" />
      <div className="home-hero__glow" aria-hidden="true" />
      <div className="home-hero__circle home-hero__circle--one" aria-hidden="true" />
      <div className="home-hero__circle home-hero__circle--two" aria-hidden="true" />
      <div className="home-hero__curve" aria-hidden="true" />
      <Heart className="home-hero__heart" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-[1450px] items-center gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div className="relative z-10 order-1 min-w-0">
          <p className="mb-4 text-sm font-bold text-[#B4DCFF] sm:text-base">{t.hero.eyebrow}</p>
          <h1 className="max-w-2xl text-[38px] font-extrabold leading-[1.2] text-white sm:text-6xl lg:text-[64px]">{t.hero.titleA}<span className="block text-[#B4DCFF]">{t.hero.titleB}</span></h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#F8E8EB] sm:text-lg">{t.hero.desc}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/booking" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#DCEEFF] px-7 py-4 text-sm font-bold text-[#064F9E] shadow-[0_14px_30px_-16px_#4d2630] hover:-translate-y-0.5"><CalendarCheck className="h-4 w-4" />{t.hero.book}</Link>
            <a href={`tel:${PHONE}`} className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#B4DCFF]/70 bg-transparent px-7 py-4 text-sm font-bold text-white hover:bg-white/10"><Phone className="h-4 w-4 text-[#B4DCFF]" />{t.hero.call}</a>
          </div>
          <ul className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">{t.hero.trust.map((item, index) => { const Icon = trustIcons[index] ?? Sparkles; return <li key={item} className="flex min-w-0 min-h-[74px] items-center gap-2 rounded-2xl border border-white/25 bg-white/[0.07] px-2 py-3 text-[11px] font-bold text-white backdrop-blur-[8px] sm:px-3.5 sm:text-sm"><Icon className="h-4 w-4 shrink-0 text-[#064F9E]" /><span>{item}</span></li>; })}</ul>
        </div>
        <div className="relative z-10 order-2 min-w-0">
          <div className="home-hero__image overflow-hidden rounded-[46px] border-4 border-[#7CC4F8] bg-[#064F9E]/20"><img src={heroImage} alt={t.hero.imageAlt} width={1600} height={1067} loading="eager" className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]" /></div>
        </div>
      </div>
      <div className="home-hero__bottom-wave" aria-hidden="true" />
    </section>
  );
}
