import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import {
  defaultLanguage,
  getLanguageFromAcceptLanguage,
  isLanguage,
} from "../lib/i18n";

async function resolveRequestLanguage() {
  const cookieStore = await cookies();
  const storedLanguage = cookieStore.get("portfolio-language")?.value;

  if (isLanguage(storedLanguage)) {
    return storedLanguage;
  }

  const headerStore = await headers();
  const acceptLanguage = headerStore.get("accept-language");
  return getLanguageFromAcceptLanguage(acceptLanguage) ?? defaultLanguage;
}

export async function generateMetadata(): Promise<Metadata> {
  const language = await resolveRequestLanguage();
  const isPortuguese = language === "pt-BR";

  return {
    title: isPortuguese
      ? "CV | Henrique Rocha"
      : "Resume | Henrique Rocha",
    description: isPortuguese
      ? "Curriculo e resumo profissional de Henrique Rocha, desenvolvedor full stack com foco em web, mobile e automacao."
      : "Resume and professional overview of Henrique Rocha, a full-stack developer focused on web, mobile, and automation.",
    alternates: {
      canonical: "https://henriquerocha.me/cv",
    },
    openGraph: {
      title: isPortuguese
        ? "CV | Henrique Rocha"
        : "Resume | Henrique Rocha",
      description: isPortuguese
        ? "Curriculo e resumo profissional de Henrique Rocha, desenvolvedor full stack com foco em web, mobile e automacao."
        : "Resume and professional overview of Henrique Rocha, a full-stack developer focused on web, mobile, and automation.",
      url: "https://henriquerocha.me/cv",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Henrique Rocha CV",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isPortuguese
        ? "CV | Henrique Rocha"
        : "Resume | Henrique Rocha",
      description: isPortuguese
        ? "Curriculo e resumo profissional de Henrique Rocha, desenvolvedor full stack com foco em web, mobile e automacao."
        : "Resume and professional overview of Henrique Rocha, a full-stack developer focused on web, mobile, and automation.",
      images: ["/og-image.png"],
    },
  };
}

export default function CvLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
