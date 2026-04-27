# Portfólio do Henrique Rocha

Meu portfólio moderno e responsivo, criado para apresentar meus projetos, habilidades e experiência. Construído com **Next.js 16**, possui animações avançadas com GSAP, suporte a múltiplos idiomas (PT-BR / EN), design limpo e uma interface intuitiva.

---

## 🌟 Funcionalidades

- **Design Responsivo**: Layout totalmente adaptável para dispositivos móveis, tablets e desktops
- **UI/UX Moderna**: Visual limpo e profissional, com animações via GSAP e transições fluidas
- **Internacionalização (i18n)**: Suporte bilíngue (PT-BR e EN) com detecção automática pelo `Accept-Language` do navegador e persistência via cookie
- **Seções Interativas**:
  - Seção inicial (Hero) com apresentação animada
  - Seção "Sobre" com informações pessoais
  - Seção de Automação
  - Exibição de projetos com links para repositórios no GitHub
  - Seção de habilidades com indicadores visuais
  - Seção GitHub Calendar com contribuições em tempo real
  - Seção CTA e Marquee animado
  - Seção de contato
- **Globo 3D Interativo**: Visualização geográfica com `cobe`
- **Splash Screen**: Tela de carregamento animada na entrada
- **Smooth Scroll**: Rolagem suave com Lenis
- **Animated Background**: Fundo animado dinâmico
- **Easter Egg no Console**: Mensagem oculta para curiosos no DevTools
- **SEO Avançado**: Open Graph, Twitter Cards, JSON-LD Schema, `sitemap.ts` e `robots.ts`
- **Performance Otimizada**: Desenvolvido com Next.js visando alta performance e SEO
- **Integração com Analytics**: Integrado ao Vercel Analytics para monitoramento de visitantes

---

## 🛠️ Tecnologias Utilizadas

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Linguagem**: [TypeScript 5](https://www.typescriptlang.org/)
- **Biblioteca UI**: [React 19](https://react.dev/)
- **Estilização**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animações**: [GSAP](https://gsap.com/) + [@gsap/react](https://gsap.com/docs/v3/Packages/@gsap/react/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Globo 3D**: [cobe](https://github.com/shuding/cobe)
- **Mapa Pontilhado**: [svg-dotted-map](https://github.com/nicholasgasior/svg-dotted-map)
- **GitHub Calendar**: [react-github-calendar](https://github.com/grubersjoe/react-github-calendar)
- **Ícones**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/), [@radix-ui/react-icons](https://www.radix-ui.com/icons)
- **Utilitários de Classes**: [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge), [class-variance-authority](https://cva.style/)
- **Fontes**: Geist Sans, Geist Mono (via `next/font`) e Lust Didone (fonte local)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Linting**: ESLint (configuração Next.js)

---

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado:

- [Node.js](https://nodejs.org/) (versão 20 ou superior)
- npm, yarn, pnpm ou bun

---

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Rochadevj/rocha.dev.git
cd rocha.dev
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

---

## 💻 Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Para rodar com Turbopack (mais rápido):

```bash
npm run dev:turbo
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

A aplicação será recarregada automaticamente conforme você editar os arquivos do diretório `app`.

---

## 🏗️ Build para Produção

Gere a build otimizada:

```bash
npm run build
# ou
yarn build
# ou
pnpm build
# ou
bun build
```

Depois, inicie o servidor de produção:

```bash
npm run start
# ou
yarn start
# ou
pnpm start
# ou
bun start
```

---

## 🧹 Linting

Para verificar a qualidade do código:

```bash
npm run lint
# ou
yarn lint
# ou
pnpm lint
# ou
bun lint
```

---

## 🚢 Deploy

Este projeto está otimizado para deploy na Vercel, plataforma criada pelos desenvolvedores do Next.js.

### Deploy na Vercel

1. Envie o projeto para um repositório Git
2. Importe o repositório na [Vercel](https://vercel.com/)
3. A Vercel detectará automaticamente o Next.js
4. Clique em **Deploy** e o site estará no ar

Mais detalhes na [documentação oficial do Next.js](https://nextjs.org/docs/deployment).

---

## 📂 Estrutura do Projeto

```
rocha.dev/
├── app/
│   ├── components/
│   │   ├── i18n/               # Provider de internacionalização
│   │   ├── icons/
│   │   ├── layout/             # Navbar, Footer, Splash, Background, etc.
│   │   ├── sections/           # Seções da página (Hero, About, Projects, etc.)
│   │   ├── ui/                 # Componentes reutilizáveis de UI
│   │   └── MarqueeSection.tsx
│   ├── cv/                     # Currículo para download
│   ├── data/
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── fonts/                  # Fontes locais (LustDidone.otf)
│   ├── lib/
│   │   ├── i18n.ts             # Lógica de internacionalização
│   │   └── utils.ts
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── public/
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🎨 Personalização

Para adaptar o portfólio:

1. Atualize os metadados em `app/layout.tsx`
2. Edite os projetos em `app/data/projects.ts`
3. Atualize as habilidades em `app/data/skills.ts`
4. Ajuste os estilos em `app/globals.css`
5. Modifique as seções em `app/components/sections/`
6. Adicione/edite traduções no `app/lib/i18n.ts`

---

## 📫 Contato

- **GitHub**: [@Rochadevj](https://github.com/Rochadevj)
- **LinkedIn**: [Henrique Rocha](https://www.linkedin.com/in/henrique-rocha-389609287/)
- **Instagram**: [@hee_rocha](https://www.instagram.com/hee_rocha/)

---

## 📄 Licença

Este projeto é open source e distribuído sob a licença MIT.

---

## 📋 Fontes

- Desenvolvido com [Next.js](https://nextjs.org/)
- Estilizado com [Tailwind CSS](https://tailwindcss.com/)
- Animações por [GSAP](https://gsap.com/)
- Fontes por [Vercel](https://vercel.com/font)
- Hospedado na [Vercel](https://vercel.com/)
