"use client";

import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>
          © {year} RASOLOMANANA Heritiana Noe. {t.footer.rights}
        </p>
        <p className="text-slate-600">{t.footer.built}</p>
      </div>
    </footer>
  );
}
