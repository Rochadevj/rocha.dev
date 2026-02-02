export interface Project {
  name: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  outcome?: string; 
  role?: string;
  tech?: string[];
  metric?: string;
  image?: string;
  weburl?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    name: "Movie TV",
    description: "Finenzo is a smart expense tracker built with Flutter that helps you manage your personal finances with ease. Track expenses, manage multiple wallets, analyze spending patterns, and export your financial data - all in one app.",
    language: "Dart",
    stars: 5,
    url: "https://github.com/Rochadevj/MovieTV",
    outcome: "Comprehensive personal finance management on the go.",
    role: "Mobile App Developer",
    tech: ["React Native", "TypeScript", "Appwrite", "TMDB API", "OpenRouter AI"],
    metric: "Multi-wallet Support",
    image: "/finenzo-mockup/finenzo-hero.png",
    images: [
      "/finenzo-mockup/finenzo-screen-1.png",
      "/finenzo-mockup/finenzo-hero.png",
      "/finenzo-mockup/finenzo-screen-2.png",
    ],
  },
  {
    name: "ClickCV",
    description: "AI-powered study enhancement tool for acing exams and mastering subjects.",
    language: "TypeScript",
    stars: 10,
    url: "https://github.com/Rochadevj/ClickCV",
    weburl: "https://click-cv.vercel.app/",
    outcome: "Practical study aid for students with Virtual exams.",
    role: "Full Stack Developer",
    tech: ["Javascript", "CSS", "html2pdf"],
    metric: "2 GitHub Stars",
    image: "/Captura de tela 2026-02-01 214351.png",
  },
  {
    name: "AnáliseAI",
    description: "A chat app enabling real-time collaboration for remote teams to manage tasks visually.",
    language: "TypeScript",
    stars: 9,
    url: "https://github.com/shafisma/nexus",
    weburl: "https://marketsharedigital.com.br/",
    outcome: "Real-time chat app with serverless backend.",
    role: "Full Stack Developer",
    tech: ["TypeScript", "N8N", "Docker", "PostgreSQL", "WAHA API"],
    metric: "Real-time Sync",
    image: "/analiseIA.png",
  },
  {
    name: "IT Club Website",
    description: "A modern website built for an IT club community with engaging features.",
    language: "TypeScript",
    stars: 9,
    url: "https://github.com/shafisma/it-club-website",
    weburl: "https://mmitc.tech/",
    outcome: "Central hub for club events and member resources.",
    role: "Lead Developer",
    tech: ["Next.js", "Framer Motion"],
    metric: "Real-time Sync",
    image: "/mmitc.png",
  },
  {
    name: "Portfolio Website",
    description:
      "A fully responsive and visually appealing portfolio website to showcase projects and skills.",
    language: "TypeScript",
    stars: 16,
    url: "https://github.com/shafisma/portfolio",
  },
];
