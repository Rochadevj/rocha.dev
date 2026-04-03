import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import CustomCursor from "./components/ui/CustomCursor";
import ClientLayout from "./components/layout/ClientLayout";
import ConsoleEasterEgg from "./components/layout/ConsoleEasterEgg";
import { AnimatedBackground, SmoothScroll } from "./components/layout";
import { LanguageProvider } from "./components/i18n/LanguageProvider";
import {
  defaultLanguage,
  getLanguageFromAcceptLanguage,
  isLanguage,
  LANGUAGE_COOKIE_KEY,
  type Language,
} from "./lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lustDidone = localFont({
  src: "./fonts/LustDidone.otf",
  variable: "--font-lust",
  weight: "100 900",
});

const metadataByLanguage: Record<
  Language,
  {
    titleDefault: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    openGraphLocale: string;
    siteName: string;
    twitterTitle: string;
    jsonLdDescription: string;
  }
> = {
  "pt-BR": {
    titleDefault: "Rocha | Desenvolvedor Full Stack",
    titleTemplate: "%s | Portfolio do Rocha",
    description:
      "Explore o portfolio full stack do Rocha: projetos com Next.js, TypeScript e automacao. Veja trabalhos em destaque, repositorios e entre em contato.",
    keywords: [
      "desenvolvedor full stack",
      "portfolio next.js",
      "projetos typescript",
      "automacao",
      "desenvolvimento web",
      "react",
      "engenheiro de software",
    ],
    openGraphLocale: "pt_BR",
    siteName: "Portfolio Rocha",
    twitterTitle: "Henrique Rocha | Desenvolvedor Full Stack",
    jsonLdDescription:
      "Desenvolvedor full stack focado em criar aplicacoes web rapidas, confiaveis e bem projetadas com Next.js e TypeScript.",
  },
  en: {
    titleDefault: "Rocha | Full-Stack Developer",
    titleTemplate: "%s | Rocha's Portfolio",
    description:
      "Explore Rocha's full-stack developer portfolio: Next.js, TypeScript, and automation projects. View featured work, repositories, and get in touch.",
    keywords: [
      "full-stack developer",
      "next.js portfolio",
      "typescript projects",
      "automation",
      "web development",
      "react",
      "software engineer",
    ],
    openGraphLocale: "en_US",
    siteName: "Rocha Portfolio",
    twitterTitle: "Henrique Rocha | Full-Stack Developer",
    jsonLdDescription:
      "Full-stack developer focused on building fast, reliable, and well-crafted web applications with Next.js and TypeScript.",
  },
};

async function resolveRequestLanguage(): Promise<Language> {
  const cookieStore = await cookies();
  const storedLanguage = cookieStore.get(LANGUAGE_COOKIE_KEY)?.value;

  if (isLanguage(storedLanguage)) {
    return storedLanguage;
  }

  const headerStore = await headers();
  const acceptLanguage = headerStore.get("accept-language");
  return getLanguageFromAcceptLanguage(acceptLanguage) ?? defaultLanguage;
}

export async function generateMetadata(): Promise<Metadata> {
  const language = await resolveRequestLanguage();
  const metadataCopy = metadataByLanguage[language];

  return {
    metadataBase: new URL("https://rocha.dev"),
    title: {
      default: metadataCopy.titleDefault,
      template: metadataCopy.titleTemplate,
    },
    description: metadataCopy.description,
    keywords: metadataCopy.keywords,
    alternates: {
      canonical: "/",
    },
    authors: [{ name: "Rocha", url: "https://rocha.dev" }],
    creator: "Rocha",
    icons: {
      icon: [{ url: "/tech-favicon.svg", type: "image/svg+xml" }],
      shortcut: ["/tech-favicon.svg"],
      apple: ["/tech-favicon.svg"],
    },
    openGraph: {
      title: metadataCopy.titleDefault,
      description: metadataCopy.description,
      url: "https://rocha.dev",
      siteName: metadataCopy.siteName,
      locale: metadataCopy.openGraphLocale,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Rocha - Full Stack Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataCopy.twitterTitle,
      description: metadataCopy.description,
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const language = await resolveRequestLanguage();
  const metadataCopy = metadataByLanguage[language];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Henrique Rocha",
    url: "https://rocha.dev",
    sameAs: [
      "https://github.com/Rochadevj",
      "https://www.instagram.com/hee_rocha/",
      "https://www.linkedin.com/in/henrique-rocha-389609287/",
    ],
    jobTitle:
      language === "pt-BR" ? "Desenvolvedor Full Stack" : "Full-Stack Developer",
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "Tailwind CSS",
      "Web Development",
    ],
    description: metadataCopy.jsonLdDescription,
  };

  return (
    <html lang={language} style={{ filter: "invert(0)" }} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lustDidone.variable} antialiased cursor-none bg-transparent text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider initialLanguage={language}>
          <ClientLayout>
            <ConsoleEasterEgg />
            <SmoothScroll />
            <AnimatedBackground />
            <CustomCursor />
            {children}
            <Analytics />
          </ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
