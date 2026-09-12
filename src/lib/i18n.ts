export type Lang = "en" | "fr";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      title: "Mobile Developer",
      subtitle: "Flutter & Java Specialist",
      description:
        "I craft beautiful, high-performance mobile applications for Android and iOS using Flutter and native Java.",
      cta: "View my work",
      contact: "Get in touch",
    },
    about: {
      title: "About Me",
      p1: "I'm RASOLOMANANA Heritiana Noe, a passionate mobile developer based in Antananarivo, Madagascar.",
      p2: "With strong expertise in Flutter and Java, I design and build scalable, user-friendly mobile applications that deliver real value to users and businesses.",
      p3: "I love turning ideas into polished products — from clean architecture and state management to pixel-perfect UI and smooth animations.",
      location: "Based in Antananarivo, Madagascar",
    },
    skills: {
      title: "Skills & Technologies",
      subtitle: "Technologies I work with every day",
      categories: {
        mobile: "Mobile Development",
        backend: "Backend & Tools",
        soft: "Soft Skills",
      },
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Some of the applications I've built",
      view: "View details",
      tech: "Tech stack",
    },
    contact: {
      title: "Let's work together",
      subtitle: "Open to freelance opportunities and collaborations",
      email: "Email me",
      location: "Location",
      message: "Feel free to reach out for projects, partnerships or just to say hello!",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with Next.js & Tailwind CSS",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      greeting: "Bonjour, je suis",
      title: "Développeur Mobile",
      subtitle: "Spécialiste Flutter & Java",
      description:
        "Je conçois et développe des applications mobiles performantes et élégantes pour Android et iOS avec Flutter et Java natif.",
      cta: "Voir mes projets",
      contact: "Me contacter",
    },
    about: {
      title: "À propos de moi",
      p1: "Je suis RASOLOMANANA Heritiana Noe, développeur mobile passionné basé à Antananarivo, Madagascar.",
      p2: "Fort d'une solide expertise en Flutter et Java, je conçois et développe des applications mobiles évolutives et centrées sur l'utilisateur qui apportent une réelle valeur.",
      p3: "J'aime transformer des idées en produits aboutis — de l'architecture propre et la gestion d'état jusqu'à l'interface pixel-perfect et les animations fluides.",
      location: "Basé à Antananarivo, Madagascar",
    },
    skills: {
      title: "Compétences & Technologies",
      subtitle: "Les technologies que j'utilise au quotidien",
      categories: {
        mobile: "Développement Mobile",
        backend: "Backend & Outils",
        soft: "Soft Skills",
      },
    },
    projects: {
      title: "Projets phares",
      subtitle: "Quelques applications que j'ai réalisées",
      view: "Voir les détails",
      tech: "Stack technique",
    },
    contact: {
      title: "Travaillons ensemble",
      subtitle: "Ouvert aux missions freelance et collaborations",
      email: "M'écrire",
      location: "Localisation",
      message:
        "N'hésitez pas à me contacter pour des projets, des partenariats ou simplement pour dire bonjour !",
    },
    footer: {
      rights: "Tous droits réservés.",
      built: "Réalisé avec Next.js & Tailwind CSS",
    },
  },
} as const;

export type TranslationKey = typeof translations.en;
