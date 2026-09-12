"use client";

import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="gradient-text">{t.about.title}</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-violet-500 mx-auto mb-12 rounded-full" />

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 sm:p-10 card-hover">
          <div className="space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
            <p>
              {lang === "fr"
                ? "Créateur de la plateforme LakaBe, qui regroupe des applications malgaches (Baiboly, Fanorona, Alimanaka, Fihirana, quiz…), disponibles gratuitement."
                : "Creator of the LakaBe platform, which gathers Malagasy apps (Baiboly, Fanorona, Alimanaka, Fihirana, quizzes…), freely available."}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-700/50 flex flex-col sm:flex-row sm:items-center gap-3 text-slate-400">
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-sky-400 shrink-0"
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
              <span>{t.about.location}</span>
            </div>
            <a
              href="https://lakabe.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 text-sm font-medium ml-0 sm:ml-4"
            >
              lakabe.vercel.app →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
