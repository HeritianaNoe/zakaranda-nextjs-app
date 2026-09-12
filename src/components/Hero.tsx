"use client";

import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-sky-500/5 to-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center animate-fade-in">
        <p className="text-sky-400 font-medium tracking-wide mb-4 text-sm sm:text-base">
          {t.hero.greeting}
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
          <span className="gradient-text">RASOLOMANANA</span>
          <br />
          <span className="text-white">Heritiana Noe</span>
        </h1>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-slate-300">
            {t.hero.title} · {t.hero.subtitle}
          </span>
        </div>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-semibold shadow-lg shadow-sky-500/25 transition-all hover:scale-105"
          >
            {t.hero.cta}
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-600 hover:border-sky-400 text-slate-200 hover:text-sky-400 font-semibold transition-all hover:bg-slate-800/50"
          >
            {t.hero.contact}
          </a>
        </div>

        {/* Tech badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          {["Flutter", "Dart", "Java", "Android", "Firebase", "REST API"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800/60 border border-slate-700 text-slate-400"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
