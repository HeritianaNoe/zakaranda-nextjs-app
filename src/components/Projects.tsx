"use client";

import { useLanguage } from "./LanguageProvider";

const projects = [
  {
    id: 1,
    title: {
      en: "Baiboly – Bible Reader",
      fr: "Baiboly – Lecteur de Bible",
    },
    description: {
      en: "Daily Bible reading companion with colored verse highlighting, personal notes, fast full-text search, and the ability to copy or share entire chapters.",
      fr: "Application de lecture de la Bible conçue pour le quotidien : surlignage coloré des versets, notes personnelles, recherche rapide dans tous les versets, et partage ou copie de chapitres entiers.",
    },
    tech: ["Flutter", "Android", "Windows", "Local Storage", "SQlite"],
    color: "from-sky-500 to-cyan-400",
    link: "https://lakabe.vercel.app/#soratramasina",
  },
  {
    id: 2,
    title: {
      en: "Fanorona – Traditional Game",
      fr: "Fanorona – Jeu traditionnel",
    },
    description: {
      en: "Digital version of the classic Malagasy board game Fanorona. Play against a friend on the same device, with traditional capture rules (approach & withdrawal) and rules reminders. Available on Android and Windows.",
      fr: "Version numérique du célèbre jeu de plateau malgache Fanorona. Jouez à deux sur le même appareil, avec les règles traditionnelles de capture (approche et retrait) et un rappel des règles. Disponible sur Android et Windows.",
    },
    tech: ["Flutter / Java", "Android", "Windows", "AI MCTS"],
    color: "from-emerald-500 to-teal-400",
    link: "https://lakabe.vercel.app/#lakabefanorona",
  },
  {
    id: 3,
    title: {
      en: "Alimanaka – Liturgical Calendar",
      fr: "Alimanaka – Calendrier liturgique",
    },
    description: {
      en: "Catholic liturgical calendar following the liturgical year (Advent, Lent, Easter…) with matching colors. Includes a saints database with biographies and feast days, plus search.",
      fr: "Calendrier liturgique catholique suivant le cycle de l’année (Avent, Carême, Pâques…) et les couleurs associées. Contient un répertoire des saints avec biographies et fêtes, ainsi qu’une recherche.",
    },
    tech: ["Flutter", "Json", "Android", "Windows"],
    color: "from-violet-500 to-purple-400",
    link: "https://lakabe.vercel.app/#alimanaka",
  },
  {
    id: 4,
    title: {
      en: "Imerina – History Quiz",
      fr: "Imerina – Quiz historique",
    },
    description: {
      en: "Short quiz that revisits key facts of Imerina history: kings, important dates and events. Three levels with a time limit to test your knowledge.",
      fr: "Quiz court qui rappelle les faits importants de l’histoire de l’Imerina : rois, dates et événements. Trois niveaux avec limite de temps pour tester vos connaissances.",
    },
    tech: ["Flutter", "Json", "Android", "Windows"],
    color: "from-amber-500 to-orange-400",
    link: "https://lakabe.vercel.app/#imerina",
  },
  {
    id: 5,
    title: {
      en: "Fihirana – Catholic Hymns",
      fr: "Fihirana – Cantiques catholiques",
    },
    description: {
      en: "Collection of more than 1000 sacred songs used in the Catholic Church (Mass and other celebrations). Organized by categories (Hasina, Dera, Vaovao…) with search and share features.",
      fr: "Recueil de plus de 1000 chants sacrés utilisés dans l’Église catholique (messe et autres célébrations). Classés par catégories (Hasina, Dera, Vaovao…) avec recherche et partage.",
    },
    tech: ["Flutter", "SQlite", "Android", "Windows"],
    color: "from-pink-500 to-rose-400",
    link: "https://lakabe.vercel.app/#fihirana",
  },
  {
    id: 6,
    title: {
      en: "LakaBe Platform",
      fr: "Plateforme LakaBe",
    },
    description: {
      en: "Central hub that gathers all Malagasy tech apps (Bible, Fanorona, Alimanaka, quizzes, hymns and more). Free downloads, available in Malagasy, French and English.",
      fr: "Plateforme centrale qui regroupe toutes les applications technologiques malgaches (Bible, Fanorona, Alimanaka, quiz, cantiques…). Téléchargements gratuits, disponible en malgache, français et anglais.",
    },
    tech: ["Web", "HTML", "Javascript", "CSS"],
    color: "from-indigo-500 to-blue-400",
    link: "https://lakabe.vercel.app/",
  },
];

export default function Projects() {
  const { lang, t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-white">{t.projects.title}</span>
        </h2>
        <p className="text-center text-slate-400 mb-4">{t.projects.subtitle}</p>
        <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-violet-500 mx-auto mb-14 rounded-full" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden card-hover flex flex-col"
            >
              <div
                className={`h-28 bg-gradient-to-br ${project.color} relative`}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="text-lg font-bold text-white drop-shadow leading-tight">
                    {project.title[lang]}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description[lang]}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-700/60 text-slate-300 border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
                >
                  {lang === "fr" ? "Voir le projet" : "View project"}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://lakabe.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-600 hover:border-sky-400 text-slate-300 hover:text-sky-400 transition-all text-sm font-medium"
          >
            {lang === "fr"
              ? "Visiter LakaBe – toutes les applications"
              : "Visit LakaBe – all applications"}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="https://fanorona-nine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-600 hover:border-sky-400 text-slate-300 hover:text-sky-400 transition-all text-sm font-medium"
          >
            {lang === "fr"
              ? "Jouer à Fanorona – application"
              : "Play Fanorona – application"}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
