export type Language = "pt-BR" | "en";

export const defaultLanguage: Language = "pt-BR";

export const translations = {
  "pt-BR": {
    nav: {
      about: "sobre",
      projects: "projetos",
      skills: "habilidades",
      contact: "contato",
      languageToggle: "Alternar idioma",
    },
    hero: {
      badge: "Disponivel para trabalhos",
      roles: [
        { first: "Engenheiro", second: "de Software." },
        { first: "Desenvolvedor", second: "Full Stack." },
        { first: "Desenvolvedor", second: "Front-End." },
        { first: "Desenvolvedor", second: "Mobile." },
      ],
      quote:
        "Eu construo aplicacoes web e mobile full-stack com foco em performance, escalabilidade e experiencia do usuario.",
      ctaPrimary: "Iniciar um projeto",
      ctaSecondary: "Ver projetos",
    },
    about: {
      srOnly: "Sobre mim",
      location: "DACA, BD",
      whoTitle: "Quem eu sou",
      whoParagraph1: {
        prefix:
          "Sou Shafi, um desenvolvedor apaixonado por mergulhar em problemas complexos e resolve-los com software. Minha missao e ",
        linkBuildTools: "construir ferramentas",
        middle:
          " que capacitam pessoas e negocios a alcancar seus objetivos. Encaro cada projeto com foco em ",
        linkEmpathy: "empatia com o usuario",
        linkScalability: "escalabilidade",
        linkPerformance: "performance",
        suffix: ".",
      },
      whoParagraph2: {
        prefix:
          "Sou especialista em desenvolvimento full-stack com forte foco no ecossistema de front-end — especialmente ",
        linkNext: "Next.js",
        middle1: ", ",
        linkTypescript: "TypeScript",
        middle2: " e ",
        linkTailwind: "Tailwind",
        suffix:
          ". Adoro criar interfaces que parecem instantaneas e vivas.",
      },
      tags: [
        "TypeScript",
        "Next.js",
        "Python",
        "Tailwind",
        "Codigo aberto",
        "Async-first",
      ],
      philosophyLabel: "FILOSOFIA DE DESIGN",
      philosophyTitleLink: "Interfaces",
      philosophyTitleEmphasis: "que voce sente.",
      philosophyDescription:
        "Acredito em software que se comunica por movimento. Cada interacao deve fornecer feedback imediato e significativo.",
      philosophyList: [
        "Estados de hover que informam",
        "Feedback de carregamento que tranquiliza",
        "Confirmacao de intencao",
      ],
      globalLabel: "DISPONIVEL GLOBALMENTE",
      globalTitle: "Adaptavel a diferentes",
      globalTitleEmphasis: "fusos horarios",
      globalParagraph: {
        prefix: "Trabalho de forma ",
        linkAsync: "async-first",
        middle:
          " e tenho facilidade para colaborar com equipes nos fusos dos EUA, Reino Unido e Europa. Retorno em 24-48h nas ",
        linkCommunication: "comunicacoes",
        suffix: ".",
      },
      globalBadge: "Compativel com EST / PST / GMT",
    },
    projects: {
      label: "CONSTRUINDO EXPERIENCIAS DIGITAIS",
      titlePrimary: "Vitrine",
      titleAccent: "de Projetos",
      source: "Codigo",
      liveDemo: "Demo",
      fallbackRole: "Desenvolvimento Full Stack",
      footer: "E muitos outros experimentos internos...",
      items: [
        {
          description:
            "Finenzo e um rastreador inteligente de gastos feito em Flutter que ajuda voce a gerenciar suas financas pessoais com facilidade. Controle despesas, varias carteiras, analise padroes de gastos e exporte seus dados financeiros.",
          outcome: "Gestao financeira pessoal completa no dia a dia.",
          role: "Desenvolvedor Mobile",
        },
        {
          description:
            "Ferramenta de estudos com IA para ajudar em provas e no dominio de materias.",
          outcome: "Apoio pratico para estudantes com exames virtuais.",
          role: "Desenvolvedor Full Stack",
        },
        {
          description:
            "Aplicativo de chat para colaboracao em tempo real com times remotos e tarefas visuais.",
          outcome: "Chat em tempo real com backend serverless.",
          role: "Desenvolvedor Full Stack",
        },
        {
          description:
            "Site moderno para um clube de tecnologia com recursos envolventes.",
          outcome: "Hub central para eventos e recursos da comunidade.",
          role: "Desenvolvedor Lider",
        },
        {
          description:
            "Portfolio responsivo e visualmente atraente para mostrar projetos e habilidades.",
        },
      ],
    },
    github: {
      label: "MINHA JORNADA NO CODIGO",
      title: "Atividade no GitHub",
      titleAccent: "e Open Source",
    },
    skills: {
      label: "Processo e Ferramentas",
      title: "A Magica",
      titleAccent: "por tras",
      steps: [
        {
          icon: "01",
          title: "Entender",
          desc: "Mergulhar no problema e nas necessidades do usuario.",
        },
        {
          icon: "02",
          title: "Design",
          desc: "Criar fluxos e interacoes intuitivas que parecem naturais.",
        },
        {
          icon: "03",
          title: "Construir",
          desc: "Escrever codigo limpo e escalavel com padroes modernos.",
        },
        {
          icon: "04",
          title: "Ajustes finais",
          desc: "Refinar com feedback ate chegar ao ideal.",
        },
      ],
      toolboxTitle: "Minha Caixa de Ferramentas",
      toolboxCategories: {
        frontend: "FRONTEND",
        backend: "BACKEND",
        infrastructure: "INFRAESTRUTURA",
        testing: "TESTES",
      },
    },
    contact: {
      badge: "Contato",
      title: "Vamos construir algo",
      titleEmphasis: "significativo.",
      intro:
        "Atualmente estou disponivel para trabalhos freelance e colaboracoes open source.",
      list: [
        {
          title: "Me contrate",
          desc: "para criar seu MVP ou entregar uma funcionalidade critica.",
        },
        {
          title: "Colabore",
          desc: "em ferramentas open source ou infraestrutura para desenvolvedores.",
        },
        {
          title: "Converse",
          desc: "sobre implementacao tecnica ou arquitetura.",
        },
      ],
      responseTimeLabel: "Tempo de resposta",
      responseTimeValue: "Em ate 24-48 horas",
      formTitle: "Inicie um projeto",
      successTitle: "Mensagem enviada!",
      successMessage:
        "Obrigado por entrar em contato. Vou responder em ate 48 horas.",
      successButton: "Enviar outra mensagem",
      labels: {
        name: "Nome",
        email: "Email",
        projectType: "Tipo de projeto",
        timeline: "Prazo",
        details: "Conte sobre o projeto",
      },
      placeholders: {
        name: "Joao Silva",
        email: "joao@exemplo.com",
        details: "O que vamos construir?",
      },
      options: {
        projectTypes: [
          "Desenvolvimento de aplicacao web",
          "Landing page / Site de marketing",
          "Desenvolvimento de MVP",
          "API / Backend",
          "Consultoria",
        ],
        timeline: ["Menos de 1 mes", "1 - 3 meses", "3 - 6 meses", "Flexivel"],
      },
      submit: "Enviar mensagem",
      sending: "Enviando...",
      errorGeneric: "Algo deu errado. Tente novamente.",
      errorNetwork:
        "Falha ao enviar mensagem. Tente novamente ou envie um email direto.",
      footer: "Vou responder em ate 48 horas.",
    },
    cta: {
      line1: "Vamos criar",
      line2: "algo real.",
    },
    footer: {
      builtWith: "Construido com",
      madeWith: "Feito com",
    },
  },
  en: {
    nav: {
      about: "about",
      projects: "projects",
      skills: "skills",
      contact: "contact",
      languageToggle: "Switch language",
    },
    hero: {
      badge: "Available for work",
      roles: [
        { first: "Software", second: "Engineer." },
        { first: "Software", second: "Developer." },
        { first: "Front-End", second: "Developer." },
        { first: "Mobile", second: "Developer." },
      ],
      quote:
        "I build full-stack web and mobile applications with a focus on performance, scalability, and user experience.",
      ctaPrimary: "Start a project",
      ctaSecondary: "View projects",
    },
    about: {
      srOnly: "About Me",
      location: "DHAKA, BD",
      whoTitle: "Who I am",
      whoParagraph1: {
        prefix:
          "I am Shafi, a passionate developer digging deep into complex problems and solving them with software. My mission is to ",
        linkBuildTools: "build tools",
        middle:
          " that empower people and businesses to achieve their goals. I approach every project with a focus on ",
        linkEmpathy: "user empathy",
        linkScalability: "scalability",
        linkPerformance: "performance",
        suffix: ".",
      },
      whoParagraph2: {
        prefix:
          "I specialize in full-stack development with a heavy focus on the frontend ecosystem—specifically ",
        linkNext: "Next.js",
        middle1: ", ",
        linkTypescript: "TypeScript",
        middle2: " and ",
        linkTailwind: "Tailwind",
        suffix: ". I love crafting interfaces that feel instant and alive.",
      },
      tags: [
        "TypeScript",
        "Next.js",
        "Python",
        "Tailwind",
        "Open Source",
        "Async-first",
      ],
      philosophyLabel: "DESIGN PHILOSOPHY",
      philosophyTitleLink: "Interfaces",
      philosophyTitleEmphasis: "you can feel.",
      philosophyDescription:
        "I believe in software that communicates through movement. Every interaction should provide immediate, meaningful feedback.",
      philosophyList: [
        "Hover states that inform",
        "Loading feedback that reassures",
        "Intent confirmation",
      ],
      globalLabel: "AVAILABLE GLOBALLY",
      globalTitle: "Adaptable across",
      globalTitleEmphasis: "time zones",
      globalParagraph: {
        prefix: "I work ",
        linkAsync: "async-first",
        middle:
          " and am comfortable collaborating with teams in US, UK, and European time zones. 24-48h turnaround on ",
        linkCommunication: "communications",
        suffix: ".",
      },
      globalBadge: "EST / PST / GMT Friendly",
    },
    projects: {
      label: "CRAFTING DIGITAL EXPERIENCES",
      titlePrimary: "Venture",
      titleAccent: "Showcase",
      source: "Source",
      liveDemo: "Live Demo",
      fallbackRole: "Full Stack Development",
      footer: "And many more internal experiments...",
      items: [
        {
          description:
            "Finenzo is a smart expense tracker built with Flutter that helps you manage your personal finances with ease. Track expenses, manage multiple wallets, analyze spending patterns, and export your financial data - all in one app.",
          outcome: "Comprehensive personal finance management on the go.",
          role: "Mobile App Developer",
        },
        {
          description:
            "AI-powered study enhancement tool for acing exams and mastering subjects.",
          outcome: "Practical study aid for students with virtual exams.",
          role: "Full Stack Developer",
        },
        {
          description:
            "A chat app enabling real-time collaboration for remote teams to manage tasks visually.",
          outcome: "Real-time chat app with serverless backend.",
          role: "Full Stack Developer",
        },
        {
          description:
            "A modern website built for an IT club community with engaging features.",
          outcome: "Central hub for club events and member resources.",
          role: "Lead Developer",
        },
        {
          description:
            "A fully responsive and visually appealing portfolio website to showcase projects and skills.",
        },
      ],
    },
    github: {
      label: "MY CODE JOURNEY",
      title: "GitHub Activity",
      titleAccent: "&& Open Source",
    },
    skills: {
      label: "Process & Tools",
      title: "The Magic",
      titleAccent: "Behind",
      steps: [
        {
          icon: "01",
          title: "Understand",
          desc: "Digging deep into the problem space and user needs.",
        },
        {
          icon: "02",
          title: "Design",
          desc: "Crafting intuitive flows and interactions that feel natural.",
        },
        {
          icon: "03",
          title: "Build",
          desc: "Writing clean, scalable code with modern standards.",
        },
        {
          icon: "04",
          title: "Final Touches",
          desc: "Updating based on feedback to reach perfection.",
        },
      ],
      toolboxTitle: "My Toolbox",
      toolboxCategories: {
        frontend: "FRONTEND",
        backend: "BACKEND",
        infrastructure: "INFRASTRUCTURE",
        testing: "TESTING",
      },
    },
    contact: {
      badge: "Contact",
      title: "Let's build something",
      titleEmphasis: "meaningful.",
      intro:
        "I am currently available for freelance work and open source collaborations.",
      list: [
        {
          title: "Hire me",
          desc: "to build your MVP or ship a critical feature.",
        },
        {
          title: "Collaborate",
          desc: "on open source tools or developer infrastructure.",
        },
        {
          title: "Discuss",
          desc: "technical implementation or architecture.",
        },
      ],
      responseTimeLabel: "Response Time",
      responseTimeValue: "Within 24-48 Hours",
      formTitle: "Start a project",
      successTitle: "Message Sent!",
      successMessage:
        "Thanks for reaching out. I'll get back to you within 48 hours.",
      successButton: "Send another message",
      labels: {
        name: "Name",
        email: "Email",
        projectType: "Project Type",
        timeline: "Timeline",
        details: "Tell me about the project",
      },
      placeholders: {
        name: "John Doe",
        email: "john@example.com",
        details: "What are we building?",
      },
      options: {
        projectTypes: [
          "Web Application Development",
          "Landing Page / Marketing Site",
          "MVP Development",
          "API / Backend System",
          "Consultation",
        ],
        timeline: [
          "Less than 1 month",
          "1 - 3 months",
          "3 - 6 months",
          "Flexible",
        ],
      },
      submit: "Send Message",
      sending: "Sending...",
      errorGeneric: "Something went wrong. Please try again.",
      errorNetwork:
        "Failed to send message. Please try again or email directly.",
      footer: "I'll get back to you within 48 hours.",
    },
    cta: {
      line1: "Let's create",
      line2: "something real.",
    },
    footer: {
      builtWith: "Built with",
      madeWith: "Made with",
    },
  },
} as const;

export type Translation = (typeof translations)[Language];
