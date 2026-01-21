# Portfólio do Henrique Rocha

Um site de portfólio moderno e responsivo para desenvolvedor, criado para apresentar meus projetos, habilidades e experiência. Construído com **Next.js 16**, possui animações suaves, design limpo e uma interface intuitiva.

---

## 🌟 Funcionalidades

- **Design Responsivo**: Layout totalmente adaptável para dispositivos móveis, tablets e desktops  
- **UI/UX Moderna**: Visual limpo e profissional, com animações suaves e transições fluidas  
- **Seções Interativas**:
  - Seção inicial (Hero) com apresentação
  - Seção “Sobre” com informações pessoais
  - Exibição de projetos com links para repositórios no GitHub
  - Seção de habilidades com indicadores visuais
  - Seção de contato
- **Performance Otimizada**: Desenvolvido com Next.js visando alta performance e SEO
- **Integração com Analytics**: Integrado ao Vercel Analytics para monitoramento de visitantes

---

## 🛠️ Tecnologias Utilizadas

- **Framework**: [Next.js 16.1.1](https://nextjs.org/) (App Router)
- **Linguagem**: [TypeScript 5](https://www.typescriptlang.org/)
- **Biblioteca UI**: [React 19](https://react.dev/)
- **Estilização**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Fontes**: Geist Sans e Geist Mono (via `next/font`)
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
git clone https://github.com/Rochadevj/portfolio.git
cd portfolio
Instale as dependências:

npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
💻 Desenvolvimento
Inicie o servidor de desenvolvimento:

npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
Abra http://localhost:3000 no navegador.

A aplicação será recarregada automaticamente conforme você editar os arquivos do diretório app.

🏗️ Build para Produção
Gere a build otimizada:

npm run build
# ou
yarn build
# ou
pnpm build
# ou
bun build
Depois, inicie o servidor de produção:

npm run start
# ou
yarn start
# ou
pnpm start
# ou
bun start
🧹 Linting
Para verificar a qualidade do código:

npm run lint
# ou
yarn lint
# ou
pnpm lint
# ou
bun lint
🚢 Deploy
Este projeto está otimizado para deploy na Vercel, plataforma criada pelos desenvolvedores do Next.js.

Deploy na Vercel
Envie o projeto para um repositório Git

Importe o repositório na Vercel

A Vercel detectará automaticamente o Next.js

Clique em Deploy e o site estará no ar

Mais detalhes na documentação oficial do Next.js.

📂 Estrutura do Projeto
portfolio/
├── app/
│   ├── components/
│   │   ├── icons/
│   │   ├── layout/
│   │   └── sections/
│   ├── data/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
🎨 Personalização
Para adaptar o portfólio:

Atualize os metadados em app/layout.tsx

Edite os projetos em app/data/projects.ts

Atualize as habilidades em app/data/skills.ts

Ajuste os estilos em app/globals.css

Modifique as seções em app/components/sections/

📫 Contato
GitHub: @Rochadevj

📄 Licença
Este projeto é open source e distribuído sob a licença MIT.

🙏 Agradecimentos
Desenvolvido com Next.js

Estilizado com Tailwind CSS

Fontes por Vercel

Hospedado na Vercel