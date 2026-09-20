"use client";

import { useLanguage } from "./LanguageProvider";

const skillsData = {
  mobile: [
    { name: "Flutter / Dart", level: 95 },
    { name: "Java (Android)", level: 90 },
    { name: "Javascript", level: 75 },
    { name: "Swift / iOS basics", level: 60 },
    { name: "Firebase", level: 85 },
    { name: "State Management (Bloc, Provider, Riverpod)", level: 88 },
  ],
  backend: [
    { name: "REST APIs", level: 90 },
    { name: "SQLite / Hive / Room", level: 85 },
    { name: "Git & GitHub", level: 92 },
    { name: "CI/CD (Codemagic, GitHub Actions)", level: 70 },
    { name: "Material Design & Cupertino", level: 90 },
  ],
  soft: [
    { name: "Problem Solving", level: 95 },
    { name: "Clean Architecture", level: 88 },
    { name: "UI/UX sensibility", level: 85 },
    { name: "Team collaboration", level: 90 },
    { name: "French & English", level: 95 },
  ],
};

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-slate-200 font-medium">{name}</span>
        <span className="text-slate-400">{level}%</span>
      </div>
      <div className="h-2 bg-slate-700/60 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-500 to-violet-500 skill-bar"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-white">{t.skills.title}</span>
        </h2>
        <p className="text-center text-slate-400 mb-4">{t.skills.subtitle}</p>
        <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-violet-500 mx-auto mb-14 rounded-full" />

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mobile */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-sky-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                {t.skills.categories.mobile}
              </h3>
            </div>
            {skillsData.mobile.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>

          {/* Backend */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-violet-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                {t.skills.categories.backend}
              </h3>
            </div>
            {skillsData.backend.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>

          {/* Soft */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">
                {t.skills.categories.soft}
              </h3>
            </div>
            {skillsData.soft.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
