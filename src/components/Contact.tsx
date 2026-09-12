"use client";

import { useLanguage } from "./LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="gradient-text">{t.contact.title}</span>
        </h2>
        <p className="text-slate-400 mb-4">{t.contact.subtitle}</p>
        <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-violet-500 mx-auto mb-10 rounded-full" />

        <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
          {t.contact.message}
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {/* Email card */}
          <a
            href="mailto:rasolomananaheritiana@gmail.com"
            className="flex flex-col items-center gap-3 p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl card-hover group"
          >
            <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center group-hover:bg-sky-500/30 transition-colors">
              <svg
                className="w-6 h-6 text-sky-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-sm text-slate-400">{t.contact.email}</span>
            <span className="text-sky-400 font-medium text-sm break-all">
              rasolomananaheritiana@gmail.com
            </span>
          </a>

          {/* Location card */}
          <div className="flex flex-col items-center gap-3 p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl">
            <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-violet-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <span className="text-sm text-slate-400">{t.contact.location}</span>
            <span className="text-violet-400 font-medium">
              Antananarivo, Madagascar
            </span>
          </div>
        </div>

        <a
          href="mailto:rasolomananaheritiana@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-400 hover:to-violet-400 text-white font-semibold shadow-lg shadow-sky-500/20 transition-all hover:scale-105"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          {t.contact.email}
        </a>
      </div>
    </section>
  );
}
