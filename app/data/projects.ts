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
  imageBackground?: string;
  imageZoom?: number;
  imageAspectRatio?: number;
  weburl?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    name: "Movie TV",
    description: "MovieTV is a mobile app built with React Native (Expo) that lets users explore movies, get AI-powered recommendations, and save favorites. It integrates TMDB API for movie data, Appwrite for backend services, and OpenRouter AI for intelligent search.",
    language: "TypeScript",
    stars: 5,
    url: "https://github.com/Rochadevj/MovieTV",
    outcome: "Smart movie discovery for everyday use.",
    role: "Mobile Developer",
    tech: ["React Native", "TypeScript", "Appwrite", "TMDB API", "OpenRouter AI"],
    metric: "AI-powered Recommendations",
    image: "/finenzo-mockup/finenzo-hero.png",
    images: [
      "/finenzo-mockup/finenzo-screen-1.png",
      "/finenzo-mockup/finenzo-hero.png",
      "/finenzo-mockup/finenzo-screen-2.png",
    ],
  },
  {
    name: "ClickCV",
    description: "ClickCV is an interactive web app that allows users to build resumes visually by clicking and adjusting elements directly on screen. After customization, users can export the resume as a ready-to-use PDF.",
    language: "TypeScript",
    stars: 10,
    url: "https://github.com/Rochadevj/ClickCV",
    weburl: "https://click-cv.vercel.app/",
    outcome: "Simple and effective interactive resume building.",
    role: "Full Stack Developer",
    tech: ["Javascript", "CSS", "html2pdf"],
    metric: "2 GitHub Stars",
    image: "/clickCV.png",
    imageBackground: "#d8d8d8",
    imageZoom: 1.02,
    imageAspectRatio: 1867 / 963,
  },
  {
    name: "AnáliseAI",
    description: "Full-stack solution for analysis and automated logging of WhatsApp Business support interactions, developed and validated with a real client. It integrates WAHA, n8n, Docker, and AI for real-time processing, with a React + TypeScript dashboard for metrics and workflow visibility.",
    language: "TypeScript",
    stars: 9,
    url: "https://github.com/Rochadevj/AnaliseAI",
    weburl: "https://analise-ai.vercel.app/",
    outcome: "Automation that turns operations into strategic data.",
    role: "Full Stack Developer",
    tech: ["TypeScript", "N8N", "Docker", "PostgreSQL", "WAHA API"],
    metric: "Real-time Sync",
    image: "/analiseIA.png",
    imageBackground: "#11172e",
    imageZoom: 1.015,
    imageAspectRatio: 1892 / 1079,
  },
  {
    name: "Imobiflow",
    description: "A multi-tenant real estate management platform with a public property showcase, administrative dashboard, and company-aware operations.",
    language: "TypeScript",
    stars: 9,
    url: "https://github.com/Rochadevj/Imobiflow",
    weburl: "https://imobiflow.vercel.app/",
    outcome: "Centralized real estate operations for multi-company teams.",
    role: "Full-stack Architecture & Development",
    tech: ["ReactJS", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    metric: "Real-time Sync",
    image: "/imobiflow.png",
    imageBackground: "#1b2f49",
    imageZoom: 1.015,
    imageAspectRatio: 1898 / 1079,
  },
  {
    name: "Portfolio Website",
    description:
      "A fully responsive and visually appealing portfolio website to showcase projects and skills.",
    language: "TypeScript",
    stars: 16,
    url: "https://github.com/Rochadevj/portfolio",
  },
];
