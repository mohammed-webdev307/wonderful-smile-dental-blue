import { Link } from "@tanstack/react-router";
import {
  Globe,
  Menu,
  X,
  MessageCircle,
  Facebook,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import logoImage from "@/assets/wonderful-smile-logo.png.png";

const links = [
  ["/", "home"],
  ["/about", "about"],
  ["/services", "services"],
  ["/booking", "book"],
  ["/faq", "faq"],
] as const;

// معلومات التواصل
const WHATSAPP_URL = "https://wa.me/970598880173";
const FACEBOOK_URL = "https://www.facebook.com/share/1EkdebMcce/";
const PHONE_URL = "tel:0598880173";

export function Navbar({ homePage = false }: { homePage?: boolean }) {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
        homePage
          ? "border-[#B4DCFF]/35 bg-transparent"
          : "border-border/70 bg-background/90"
      }`}
    >
      <div className="mx-auto flex min-h-[78px] w-full max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        
        {/* الشعار */}
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <img
            src={logoImage}
            alt={t.brand.name}
            className="h-[56px] w-[200px] max-w-[calc(100vw-150px)] object-contain sm:h-[62px] sm:w-[300px]"
          />
        </Link>

        {/* قائمة الكمبيوتر */}
        <nav
          aria-label={t.nav.home}
          className="mx-auto hidden items-center gap-1 lg:flex"
        >
          {links.map(([to, key]) => (
            <Link
              key={to}
              to={to}
              className={`rounded-full px-3 py-2.5 text-sm font-semibold transition-colors ${
                homePage
                  ? "text-[#064F9E] hover:bg-[#DCEEFF]/70 hover:text-[#064F9E]"
                  : "text-muted-foreground hover:bg-soft hover:text-foreground"
              }`}
            >
              {t.nav[key]}
            </Link>
          ))}

          <Link
            to="/booking"
            hash="contact"
            className={`rounded-full px-3 py-2.5 text-sm font-semibold transition-colors ${
              homePage
                ? "text-[#064F9E] hover:bg-[#DCEEFF]/70 hover:text-[#064F9E]"
                : "text-muted-foreground hover:bg-soft hover:text-foreground"
            }`}
          >
            {t.nav.contact}
          </Link>
        </nav>

        {/* الأزرار */}
        <div className="ms-auto flex items-center gap-2">
          
          {/* فيسبوك */}
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#B4DCFF] bg-[#EAF5FF] text-[#0866FF] transition-all hover:-translate-y-0.5 hover:bg-[#DCEEFF] sm:inline-flex"
            aria-label="Facebook"
            title="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>

          {/* واتساب */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#BDEBD0] bg-[#E9FFF1] text-[#16A34A] transition-all hover:-translate-y-0.5 hover:bg-[#D8FBE5] sm:inline-flex"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>

          {/* اتصال */}
          <a
            href={PHONE_URL}
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#B4DCFF] bg-[#EAF5FF] text-[#064F9E] transition-all hover:-translate-y-0.5 hover:bg-[#DCEEFF] md:inline-flex"
            aria-label="اتصل بنا"
            title="اتصل بنا"
          >
            <Phone className="h-4 w-4" />
          </a>

          {/* اللغة */}
          <button
            type="button"
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-semibold ${
              homePage
                ? "border-[#B4DCFF]/60 bg-[#B4DCFF] text-[#064F9E] hover:bg-[#C7E6FF]"
                : "border-border text-foreground hover:bg-soft"
            }`}
            aria-label={
              lang === "ar" ? "Switch to English" : "التبديل إلى العربية"
            }
          >
            <Globe
              className={`h-4 w-4 ${
                homePage ? "text-[#064F9E]" : "text-primary"
              }`}
              aria-hidden="true"
            />

            <span className="font-latin">
              {lang === "ar" ? "EN" : "AR"}
            </span>
          </button>

          {/* حجز الموعد */}
          <Link
            to="/booking"
            className={`hidden rounded-full px-5 py-3 text-sm font-bold shadow-[0_12px_24px_-16px_#258CD3] transition-transform hover:-translate-y-0.5 sm:inline-flex ${
              homePage
                ? "bg-[#DCEEFF] text-[#064F9E] hover:bg-[#C7E6FF]"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {t.nav.book}
          </Link>

          {/* زر قائمة الهاتف */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex rounded-full border border-[#B4DCFF] bg-white/80 p-2 text-[#064F9E] shadow-[0_3px_10px_rgba(6,79,158,0.10)] transition-colors hover:bg-[#DCEEFF] active:bg-[#DCEEFF] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.close : t.nav.menu}
          >
            {open ? (
              <X className="h-5 w-5 stroke-[2.4]" />
            ) : (
              <Menu className="h-5 w-5 stroke-[2.4]" />
            )}
          </button>
        </div>
      </div>

      {/* قائمة الهاتف */}
      <div
        id="mobile-nav"
        hidden={!open}
        className={`border-t lg:hidden ${
          homePage
            ? "border-[#B4DCFF]/35 bg-[#064F9E]"
            : "border-border bg-background"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
          {links.map(([to, key]) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-3 py-3 text-start text-sm font-semibold ${
                homePage
                  ? "text-white hover:bg-white/10"
                  : "text-foreground hover:bg-soft"
              }`}
            >
              {t.nav[key]}
            </Link>
          ))}

          {/* تواصل الهاتف */}
          <div className="mt-3 grid grid-cols-3 gap-2">
            
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-2 text-sm font-bold text-white"
            >
              <MessageCircle className="h-5 w-5" />
              واتساب
            </a>

            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0866FF] px-2 text-sm font-bold text-white"
            >
              <Facebook className="h-5 w-5" />
              فيسبوك
            </a>

            <a
              href={PHONE_URL}
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#1684D4] px-2 text-sm font-bold text-white"
            >
              <Phone className="h-5 w-5" />
              اتصال
            </a>
          </div>

          <Link
            to="/booking"
            onClick={() => setOpen(false)}
            className={`mt-2 rounded-full px-4 py-3 text-center text-sm font-bold ${
              homePage
                ? "bg-[#DCEEFF] text-[#064F9E]"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {t.nav.book}
          </Link>
        </nav>
      </div>
    </header>
  );
}