import { BadgeCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function AnnouncementBar() {
  const { t } = useLanguage();
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex min-h-[70px] flex-col items-center gap-2 rounded-[22px] bg-soft px-5 py-5 text-center sm:flex-row sm:justify-center sm:gap-4 sm:text-start">
        <BadgeCheck className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
        <div className="min-w-0">
          <p className="text-base font-bold text-foreground sm:text-lg">{t.announcement.main}</p>
          <p className="mt-1 text-sm text-muted-foreground sm:text-base">{t.announcement.sub}</p>
        </div>
      </div>
    </div>
  );
}
