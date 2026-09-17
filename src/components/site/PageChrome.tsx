import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarCheck, Home, MessageCircle, MoreHorizontal, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { useLanguage } from "@/lib/i18n";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type PageTheme = "home" | "services" | "about" | "faq" | "contact";

export function PageChrome({ children, homePage = false, theme }: { children: ReactNode; homePage?: boolean; theme?: PageTheme }) {
  const pageTheme = theme ?? (homePage ? "home" : undefined);
  return (
    <div className={`site-page min-h-screen pb-24 md:pb-0 ${pageTheme ? `site-page--${pageTheme}` : ""}`}>
      <Navbar homePage={homePage} />
      {children}
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="page-header px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {eyebrow && <p className="mb-3 text-sm font-bold text-primary">{eyebrow}</p>}
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{description}</p>}
      </div>
    </section>
  );
}

export function ActionCta({ title, text, to = "/booking" }: { title: string; text?: string; to?: "/booking" | "/about" }) {
  const { lang } = useLanguage();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="premium-cta mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-[28px] px-6 py-9 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center">
        <div>
          <h2 className="text-2xl font-extrabold sm:text-3xl">{title}</h2>
          {text && <p className="mt-2 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">{text}</p>}
        </div>
        <Link to={to} className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">
          <span>{lang === "ar" ? "احجز موعدك الآن" : "Book an appointment"}</span>
          <Arrow className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

function MobileBottomNav() {
  const { t } = useLanguage();
  return (
    <nav className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-5 rounded-2xl border border-border bg-white/90 p-1 shadow-[0_16px_35px_-18px_rgba(37,140,211,0.3)] backdrop-blur md:hidden" aria-label="Mobile navigation">
      <Link to="/" className="flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-[10px] font-semibold text-card-foreground"><Home className="h-4 w-4 text-primary" /><span className="truncate">{t.nav.home}</span></Link>
      <Link to="/services" className="flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-[10px] font-semibold text-card-foreground"><Sparkles className="h-4 w-4 text-primary" /><span className="truncate">{t.nav.services}</span></Link>
      <Link to="/booking" className="-mt-5 flex min-w-0 flex-col items-center justify-center gap-1 rounded-2xl bg-primary px-1 py-3 text-[10px] font-bold text-primary-foreground shadow-[0_10px_20px_-10px_#258CD3]"><CalendarCheck className="h-5 w-5" /><span className="truncate">{t.nav.book}</span></Link>
      <a href="https://wa.me/970598880173" target="_blank" rel="noopener noreferrer" className="flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-[10px] font-semibold text-card-foreground"><MessageCircle className="h-4 w-4 text-primary" /><span className="truncate">{t.nav.contact}</span></a>
      <Link to="/faq" className="flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-[10px] font-semibold text-card-foreground"><MoreHorizontal className="h-4 w-4 text-primary" /><span className="truncate">{t.nav.faq}</span></Link>
    </nav>
  );
}
