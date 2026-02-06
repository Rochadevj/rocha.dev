import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import CustomCursor from "./components/ui/CustomCursor";
import ClientLayout from "./components/layout/ClientLayout";
import { AnimatedBackground, SmoothScroll } from "./components/layout";
import { LanguageProvider } from "./components/i18n/LanguageProvider";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://rocha.dev"),
  title: {
    default: "Rocha | Full-Stack Developer Portfolio",
    template: "%s | Rocha's Portfolio",
  },
  description:
    "Explore Rocha's full-stack developer portfolio: Next.js, TypeScript and Python projects. View featured work, open-source repos, and get in touch.",
  keywords: [
    "full-stack developer",
    "Next.js portfolio",
    "TypeScript projects",
    "Python developer",
    "open-source",
    "web development",
    "react",
    "software engineer",
  ],
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
    title: "Rocha | Full-Stack Developer Portfolio",
    description:
      "Explore Rocha's full-stack developer portfolio featuring Next.js, TypeScript and Python projects.",
    url: "https://rocha.dev",
    siteName: "Rocha Portfolio",
    locale: "en_US",
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
    title: "Henrique Rocha | Full-Stack Developer Portfolio",
    description: "Building fast, reliable software.",
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
  jobTitle: "Full-Stack Developer",
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Tailwind CSS",
    "Web Development",
  ],
  description:
    "Full-stack developer focused on building fast and reliable web applications with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" style={{ filter: "invert(0)" }} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lustDidone.variable} antialiased cursor-none bg-transparent text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <ClientLayout>
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
