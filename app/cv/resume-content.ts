import type { Language } from "../lib/i18n";

type CvMetric = {
  value: string;
  label: string;
  detail: string;
};

type CvExperience = {
  period: string;
  role: string;
  company: string;
  bullets: string[];
};

type CvProject = {
  year: string;
  title: string;
  description: string;
  stack: string[];
};

type CvSkillGroup = {
  title: string;
  items: string[];
};

type CvEducation = {
  period: string;
  title: string;
  school: string;
  detail: string;
};

type CvLanguage = {
  name: string;
  level: string;
};

type CvContent = {
  topbar: {
    home: string;
    projects: string;
    contact: string;
    cv: string;
  };
  eyebrow: string;
  roleLabel: string;
  role: string;
  summary: string;
  actions: {
    download: string;
    contact: string;
    portfolio: string;
  };
  quickFacts: Array<{
    label: string;
    value: string;
  }>;
  metricsTitle: string;
  metrics: CvMetric[];
  experienceTitle: string;
  experience: CvExperience[];
  projectsTitle: string;
  projects: CvProject[];
  skillsTitle: string;
  skillGroups: CvSkillGroup[];
  educationTitle: string;
  education: CvEducation[];
  languagesTitle: string;
  languages: CvLanguage[];
  contactTitle: string;
  contactIntro: string;
  footerNote: string;
};

export const cvContent: Record<Language, CvContent> = {
  "pt-BR": {
    topbar: {
      home: "portfólio",
      projects: "projetos",
      contact: "contato",
      cv: "cv",
    },
    eyebrow: "Currículo digital",
    roleLabel: "FUNÇÃO",
    role: "Desenvolvedor Full Stack",
    summary:
      "Construo aplicações web, mobile e fluxos com automação, com foco em performance, clareza de UX e entrega consistente. Hoje atuo entre front-end, back-end e integrações, com experiência prática em React, TypeScript, PHP, Supabase, Docker e n8n.",
    actions: {
      download: "Baixar PDF",
      contact: "Falar comigo",
      portfolio: "Voltar ao portfólio",
    },
    quickFacts: [
      { label: "Base", value: "Porto Alegre, RS" },
      { label: "Formato", value: "Remoto / Híbrido / Presencial" },
      { label: "Foco", value: "Web, mobile e automação" },
      { label: "Disponibilidade", value: "Empresa + freelance" },
    ],
    metricsTitle: "Panorama",
    metrics: [
      {
        value: "2",
        label: "frentes ativas",
        detail: "atuação em empresa e projetos independentes",
      },
      {
        value: "3",
        label: "cases em destaque",
        detail: "SaaS, mobile e automação em produção",
      },
      {
        value: "1",
        label: "stack de automação",
        detail: "WhatsApp + WAHA + n8n + Docker + IA",
      },
      {
        value: "B2",
        label: "inglês",
        detail: "leitura técnica e colaboração profissional",
      },
    ],
    experienceTitle: "Experiência",
    experience: [
      {
        period: "Jul 2025 · Atual",
        role: "Estagiário de Programação",
        company: "Segur",
        bullets: [
          "Desenvolvimento de soluções completas com React.js no front-end e PHP com CodeIgniter no back-end.",
          "Modelagem, consulta e manutenção de dados em MySQL.",
          "Versionamento e colaboração em equipe com Git.",
        ],
      },
      {
        period: "Jul 2025 · Jan 2026",
        role: "Residente em TI · Desenvolvedor Full Stack",
        company: "Programa de Residência em TI",
        bullets: [
          "Atuação em uma solução automatizada para análise e registro de atendimentos via WhatsApp Business.",
          "Integração de WAHA, n8n, Docker e IA para processamento em tempo real.",
          "Criação de dashboard visual em React para acompanhamento dos dados.",
        ],
      },
      {
        period: "Ago 2024 · Atual",
        role: "Desenvolvedor Web Autônomo",
        company: "Eff Sites",
        bullets: [
          "Desenvolvimento de sites institucionais e landing pages com foco em performance e SEO.",
          "Experiência sólida em interfaces para web com atenção a responsividade e acabamento visual.",
          "Entrega de soluções sob medida para necessidades reais de clientes.",
        ],
      },
    ],
    projectsTitle: "Projetos selecionados",
    projects: [
      {
        year: "2026",
        title: "ImobiFlow",
        description:
          "Plataforma SaaS imobiliária com painel administrativo, autenticação segura, gestão completa de imóveis, vitrine pública responsiva e integração de dados.",
        stack: ["React", "TypeScript", "Supabase", "PostgreSQL"],
      },
      {
        year: "2025",
        title: "AnáliseAI",
        description:
          "Solução full stack para análise e registro automatizado de atendimentos via WhatsApp Business, com IA, automações e dashboard para operação.",
        stack: ["React", "TypeScript", "n8n", "Docker", "WAHA API"],
      },
      {
        year: "2025",
        title: "Movie TV",
        description:
          "Aplicativo mobile em React Native (Expo) para explorar filmes, receber recomendações com IA e salvar favoritos com backend integrado.",
        stack: ["React Native", "TypeScript", "Appwrite", "OpenRouter AI"],
      },
    ],
    skillsTitle: "Competências",
    skillGroups: [
      {
        title: "Front-end",
        items: [
          "HTML",
          "CSS",
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Bootstrap",
          "WordPress",
        ],
      },
      {
        title: "Back-end & dados",
        items: ["PHP", "CodeIgniter", "Supabase", "MySQL", "PostgreSQL"],
      },
      {
        title: "Automação & infraestrutura",
        items: ["n8n", "Docker", "WAHA", "Git/GitHub", "Linux"],
      },
      {
        title: "Mobile & produto",
        items: ["React Native", "Expo", "Appwrite", "TMDB API", "UX orientada a performance"],
      },
    ],
    educationTitle: "Formação",
    education: [
      {
        period: "2025 · 2029",
        title: "Engenharia de Software",
        school: "Universidade La Salle",
        detail: "Bacharelado em andamento.",
      },
      {
        period: "2023 · 2025",
        title: "Desenvolvimento de Sistemas",
        school: "Senac",
        detail: "Formação técnica com base em desenvolvimento web e lógica aplicada.",
      },
    ],
    languagesTitle: "Idiomas",
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "B2 · Intermediário" },
    ],
    contactTitle: "Contato",
    contactIntro:
      "Aberto a oportunidades profissionais, freelas  e conversas sobre produtos, interfaces e automação.",
    footerNote: "Esta versão do CV acompanha o portfólio e pode evoluir junto com os projetos.",
  },
  en: {
    topbar: {
      home: "portfolio",
      projects: "projects",
      contact: "contact",
      cv: "cv",
    },
    eyebrow: "Digital resume",
    roleLabel: "ROLE",
    role: "Full-Stack Developer",
    summary:
      "I build web, mobile, and automation-driven products with a focus on performance, UX clarity, and consistent delivery. My work spans front-end, back-end, and integrations, with hands-on experience in React, TypeScript, PHP, Supabase, Docker, and n8n.",
    actions: {
      download: "Download PDF",
      contact: "Get in touch",
      portfolio: "Back to portfolio",
    },
    quickFacts: [
      { label: "Base", value: "Porto Alegre, Brazil" },
      { label: "Format", value: "Remote / Hybrid" },
      { label: "Focus", value: "Web, mobile, automation" },
      { label: "Availability", value: "Company + freelance" },
    ],
    metricsTitle: "Snapshot",
    metrics: [
      {
        value: "2",
        label: "active tracks",
        detail: "company work plus independent client delivery",
      },
      {
        value: "3",
        label: "featured builds",
        detail: "SaaS, mobile, and automation work",
      },
      {
        value: "1",
        label: "automation stack",
        detail: "WhatsApp + WAHA + n8n + Docker + AI",
      },
      {
        value: "B2",
        label: "English",
        detail: "technical reading and professional collaboration",
      },
    ],
    experienceTitle: "Experience",
    experience: [
      {
        period: "Jul 2025 · Present",
        role: "Programming Intern",
        company: "Segur",
        bullets: [
          "Built full-stack solutions with React.js on the front-end and PHP with CodeIgniter on the back-end.",
          "Handled data modeling, querying, and maintenance with MySQL.",
          "Used Git for collaboration and source control in team environments.",
        ],
      },
      {
        period: "Jul 2025 · Jan 2026",
        role: "IT Resident · Full-Stack Developer",
        company: "IT Residency Program",
        bullets: [
          "Worked on an automated solution for analysing and logging WhatsApp Business customer interactions.",
          "Integrated WAHA, n8n, Docker, and AI for real-time processing.",
          "Built a React dashboard to monitor operational data and workflows.",
        ],
      },
      {
        period: "Aug 2024 · Present",
        role: "Freelance Web Developer",
        company: "Eff Sites",
        bullets: [
          "Delivered institutional websites and landing pages with performance and SEO in mind.",
          "Built responsive web interfaces with strong attention to polish and usability.",
          "Created tailored solutions for real client needs and product goals.",
        ],
      },
    ],
    projectsTitle: "Selected projects",
    projects: [
      {
        year: "2026",
        title: "ImobiFlow",
        description:
          "A real estate SaaS platform with admin dashboard, secure authentication, full property management, responsive public showcase, and connected data flows.",
        stack: ["React", "TypeScript", "Supabase", "PostgreSQL"],
      },
      {
        year: "2025",
        title: "AnaliseAI",
        description:
          "A full-stack solution for automated WhatsApp Business interaction analysis and logging, combining AI, automation workflows, and an operations dashboard.",
        stack: ["React", "TypeScript", "n8n", "Docker", "WAHA API"],
      },
      {
        year: "2025",
        title: "Movie TV",
        description:
          "A React Native (Expo) mobile app for movie discovery, AI-assisted recommendations, and favorites with an integrated backend.",
        stack: ["React Native", "TypeScript", "Appwrite", "OpenRouter AI"],
      },
    ],
    skillsTitle: "Skills",
    skillGroups: [
      {
        title: "Front-end",
        items: [
          "HTML",
          "CSS",
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Bootstrap",
          "WordPress",
        ],
      },
      {
        title: "Back-end & data",
        items: ["PHP", "CodeIgniter", "Supabase", "MySQL", "PostgreSQL"],
      },
      {
        title: "Automation & infrastructure",
        items: ["n8n", "Docker", "WAHA", "Git/GitHub", "Linux"],
      },
      {
        title: "Mobile & product",
        items: ["React Native", "Expo", "Appwrite", "TMDB API", "Performance-led UX"],
      },
    ],
    educationTitle: "Education",
    education: [
      {
        period: "2025 · 2029",
        title: "Software Engineering",
        school: "La Salle University",
        detail: "Bachelor's degree in progress.",
      },
      {
        period: "2023 · 2025",
        title: "Systems Development",
        school: "Senac",
        detail: "Technical degree focused on web development and applied logic.",
      },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "B2 · Intermediate" },
    ],
    contactTitle: "Contact",
    contactIntro:
      "Open to professional opportunities,  freelance work, and conversations about products, interfaces, and automation.",
    footerNote: "This CV version lives alongside the portfolio and can evolve with new projects.",
  },
};
