import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Phone, MessageCircle } from "lucide-react";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  useLanguage,
} from "@/lib/i18n";

import logo from "@/assets/wonderful-smile-logo.png.png";

const PHONE = "0598880173";
const WHATSAPP_URL = "https://wa.me/970598880173";
const FACEBOOK_URL = "https://www.facebook.com/share/1EkdebMcce/";

export function Footer() {
  const { t } = useLanguage();

  const links = [
    ["/", t.nav.home],
    ["/about", t.nav.about],
    ["/services", t.nav.services],
    ["/booking", t.nav.book],
    ["/faq", t.nav.faq],
  ] as const;

  return (
    <footer className="site-footer border-t border-white/15 pb-8 pt-12 text-white md:pt-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.8fr] lg:px-8">

        {/* Logo */}
        <div>
          <Link to="/" className="inline-flex items-center">
            <img
              src={logo}
              alt="عيادة البسمة الرائعة لطب الأسنان"
              className="h-auto w-[180px] object-contain sm:w-[200px] lg:w-[220px]"
            />
          </Link>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
            {t.footer.disclaimer}
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-sm font-bold">{t.footer.links}</h2>

          <nav className="mt-4 flex flex-col items-start gap-2">
            {links.map(([to, label]) => (
              <Link
                key={to}
                to={to}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-sm font-bold">{t.footer.contact}</h2>

          {/* Phone */}
          <a
            href={`tel:${PHONE}`}
            className="mt-4 flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4 text-[#39A9FF]" />
            <span dir="ltr">{PHONE}</span>
          </a>

          {/* Social Media */}
          <div className="mt-5 flex items-center gap-3">

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:-translate-y-1 hover:bg-[#25D366]"
            >
              <MessageCircle className="h-5 w-5" />
            </a>

            {/* Facebook */}
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:-translate-y-1 hover:bg-[#1877F2]"
            >
              <Facebook className="h-5 w-5" />
            </a>

            {/* Instagram */}
            {INSTAGRAM_URL ? (
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={INSTAGRAM_HANDLE}
                title="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:-translate-y-1 hover:bg-[#E4405F]"
              >
                <Instagram className="h-5 w-5" />
              </a>
            ) : null}

          </div>

          <p className="mt-4 text-xs text-white/50">
            تابعنا وتواصل معنا
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/15 px-4 pt-6 text-center text-xs text-white/55 sm:px-6 lg:px-8">
        {t.footer.rights}
      </div>
    </footer>
  );
}