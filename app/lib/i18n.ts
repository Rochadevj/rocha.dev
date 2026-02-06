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
      ],
      quote:
        "Eu construo aplicações web e mobile full stack, com foco em performance, escalabilidade e experiência do usuário.",
      ctaPrimary: "Iniciar um projeto",
      ctaSecondary: "Ver projetos",
      ctaResume: "Download CV",
      ctaResumeSoon: "Curriculo em breve",
    },
    about: {
      srOnly: "Sobre mim",
      location: "Porto Alegre, RS",
      whoTitle: "Quem eu sou",
      whoParagraph1: {
        prefix:
          "Sou o Rocha, um desenvolvedor apaixonado por mergulhar em problemas complexos e resolvê-los com software. Minha missão é ",
        linkBuildTools: "construir ferramentas",
        middle:
          " que capacitam pessoas e negócios a alcançar seus objetivos. Encaro cada projeto com foco em ",
        linkEmpathy: "empatia com o usuário",
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
          ". Adoro criar interfaces que parecem instantâneas e vivas.",
      },
      tags: [
        "TypeScript",
        "Next.js",
        "Python",
        "Tailwind",
        "código aberto",
        "Async-first",
      ],
      philosophyLabel: "FILOSOFIA DE DESIGN",
      philosophyTitleLink: "Interfaces",
      philosophyTitleEmphasis: "que você sente.",
      philosophyDescription:
        "Acredito em software que se comunica por movimento. Cada interação deve fornecer feedback imediato e significativo.",
      philosophyList: [
        "Estados de hover que informam",
        "Feedback de carregamento que tranquiliza",
        "Confirmação de intenção",
      ],
    globalLabel: "DISPONÍVEL GLOBALMENTE",
    globalTitle: "Adaptável a diferentes",
    globalTitleEmphasis: "fusos horários",
    globalParagraph: {
      prefix: "Trabalho de forma ",
      linkAsync: "async-first",
      middle:
        " e tenho facilidade para colaborar com equipes nos fusos dos EUA e Europa. Retorno em 24–48h nas ",
      linkCommunication: "comunicações",
      suffix: ".",
    },
    globalBadge: "Compatível com EST / PST / GMT",

    },
    projects: {
      label: "CONSTRUINDO EXPERIÊNCIAS DIGITAIS",
      titlePrimary: "Vitrine",
      titleAccent: "de Projetos",
      marquee: "PROJETOS SELECIONADOS",
      source: "Código",
      liveDemo: "Demo",
      fallbackRole: "Desenvolvimento Full Stack",
      footer: "E outros projetos em andamento.",
      items: [
        {
          description:
            "O MovieTV é um aplicativo mobile desenvolvido em React Native (Expo) que permite explorar filmes, buscar recomendações via IA e salvar favoritos. Integra a TMDB API para dados de filmes, Appwrite para backend e OpenRouter AI para buscas inteligentes.",
          outcome: "Exploração inteligente de filmes no dia a dia.",
          role: "Desenvolvedor Mobile",
        },
        {
          description:
            "O ClickCV é uma aplicação web interativa que permite criar currículos de forma visual e intuitiva, apenas clicando e ajustando os elementos diretamente na tela. Após a personalização, o usuário pode exportar o currículo em PDF pronto para uso.",
          outcome: "Criação de currículos interativos de forma simples e eficiente.",
          role: "Desenvolvedor Front-end",
        },
        {
          description:
            "Solução full stack para análise e registro automatizado de atendimentos via WhatsApp Business, desenvolvida e validada por cliente real. Integra WAHA, n8n, Docker e IA para processamento em tempo real, com dashboard em React e TypeScript para visualização de métricas e fluxos.",
          outcome: "Automação para gerar dados estratégicos.",
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
          outcome: "",
          role: "",
        },
      ],
    },
    github: {
      label: "MINHA JORNADA NO CÓDIGO",
      title: "Atividade no GitHub",
      titleAccent: "e Open Source",
    },
    skills: {
      label: "Processo e Ferramentas",
      title: "A mágica",
      titleAccent: "por trás",
      steps: [
        {
          icon: "01",
          title: "Entender",
          desc: "Mergulhar no problema e nas necessidades do usuário.",
        },
        {
          icon: "02",
          title: "Design",
          desc: "Criar fluxos e interações intuitivas que parecem naturais.",
        },
        {
          icon: "03",
          title: "Construir",
          desc: "Escrever código limpo e escalável com padrões modernos.",
        },
        {
          icon: "04",
          title: "Ajustes finais",
          desc: "Refinar com feedback até chegar ao ideal.",
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
        "Atualmente estou disponível para contratação em empresa e oportunidades profissionais.",
      list: [
        {
          title: "Me contrate",
          desc: "para atuar no seu time e entregar funcionalidades críticas.",
        },
        {
          title: "Freelancer",
          desc: "para trabalhos freelance e demandas pontuais.",
        },
        {
          title: "Converse",
          desc: "sobre implementação técnica ou arquitetura.",
        },
      ],
      responseTimeLabel: "Tempo de resposta",
      responseTimeValue: "Em até 24-48 horas",
      formTitle: "Inicie um projeto",
      successTitle: "Mensagem enviada!",
      successMessage:
        "Obrigado por entrar em contato. Vou responder em até 48 horas.",
      successButton: "Enviar outra mensagem",
      labels: {
        name: "Nome",
        email: "Email",
        projectType: "Tipo de projeto",
        timeline: "Prazo",
        details: "Conte sobre o projeto",
        detailsGeneral: "Conte sobre sua mensagem",
      },
      placeholders: {
        name: "João Silva",
        email: "joao@exemplo.com",
        details: "O que vamos construir?",
        detailsGeneral: "Como posso te ajudar?",
      },
      options: {
        projectTypes: [
          "Desenvolvimento de aplicação web",
          "Landing page / Site de marketing",
          "Contratação em empresa",
          "Contato geral",
        ],
        timeline: ["Menos de 1 mes", "1 - 3 meses", "3 - 6 meses", "Flexivel"],
      },
      submit: "Enviar mensagem",
      sending: "Enviando...",
      errorGeneric: "Algo deu errado. Tente novamente.",
      errorNetwork:
        "Falha ao enviar mensagem. Tente novamente ou envie um email direto.",
      footer: "Vou responder em até 48 horas.",
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
      ctaResume: "Download CV",
      ctaResumeSoon: "Resume file coming soon",
    },
    about: {
      srOnly: "About Me",
      location: "Porto Alegre, Brazil",
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
      marquee: " PROJECTS",
      source: "Source",
      liveDemo: "Live Demo",
      fallbackRole: "Full Stack Development",
      footer: "And other projects in progress.",
      items: [
        {
          description:
            "MovieTV is a mobile app built with React Native (Expo) that lets users explore movies, get AI-powered recommendations, and save favorites. It integrates TMDB API for movie data, Appwrite for backend services, and OpenRouter AI for intelligent search.",
          outcome: "Smart movie discovery for everyday use.",
          role: "Mobile Developer",
        },
        {
          description:
            "ClickCV is an interactive web app that allows users to build resumes visually by clicking and adjusting elements directly on screen. After customization, users can export the resume as a ready-to-use PDF.",
          outcome: "Simple and effective interactive resume building.",
          role: "Front-End Developer",
        },
        {
          description:
            "Full-stack solution for analysis and automated logging of WhatsApp Business support interactions, developed and validated with a real client. It integrates WAHA, n8n, Docker, and AI for real-time processing, with a React + TypeScript dashboard for metrics and workflow visibility.",
          outcome: "Automation that turns operations into strategic data.",
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
          outcome: "",
          role: "",
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
        "I am currently available for full-time hiring and professional opportunities.",
      list: [
        {
          title: "Hire me",
          desc: "to join your team and ship critical product features.",
        },
        {
          title: "Freelance",
          desc: "for freelance work and scoped product demands.",
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
        detailsGeneral: "Tell me about your message",
      },
      placeholders: {
        name: "John Doe",
        email: "john@example.com",
        details: "What are we building?",
        detailsGeneral: "How can I help?",
      },
      options: {
        projectTypes: [
          "Web Application Development",
          "Landing Page / Marketing Site",
          "Hiring Opportunity (Company Role)",
          "General Contact",
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
