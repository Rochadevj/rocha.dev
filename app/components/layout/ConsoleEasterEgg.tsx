"use client";

import { useEffect } from "react";
import { useTranslations } from "@/app/components/i18n/LanguageProvider";

const SESSION_KEY = "rocha-console-easter-egg";
const REPO_URL = "https://github.com/Rochadevj/portfolio";

const consoleCopy = {
  "pt-BR": {
    title: "Bem-vindo ao Rocha.dev",
    subtitle: "Curtiu explorar o código?",
    body: `O portfólio foi construído com Next.js, TypeScript e Tailwind CSS.\nSe quiser ver o repositório ou deixar uma estrela: ${REPO_URL}`,
  },
  en: {
    title: "Welcome to Rocha.dev",
    subtitle: "Enjoying the code?",
    body: `This portfolio was built with Next.js, TypeScript, and Tailwind CSS.\nIf you want to check the repository or leave a star: ${REPO_URL}`,
  },
} as const;

export default function ConsoleEasterEgg() {
  const { language } = useTranslations();

  useEffect(() => {
    const copy = consoleCopy[language];
    const sessionValue = `${language}:v1`;

    try {
      if (window.sessionStorage.getItem(SESSION_KEY) === sessionValue) {
        return;
      }
      window.sessionStorage.setItem(SESSION_KEY, sessionValue);
    } catch {
      // Ignore sessionStorage issues and still print the message.
    }

    console.log(
      "%c</Rocha>%c " + copy.title,
      [
        "color: #67e8f9",
        "font-size: 28px",
        "font-weight: 800",
        "font-family: var(--font-geist-mono), monospace",
        "letter-spacing: -0.04em",
      ].join(";"),
      [
        "color: #f8fafc",
        "font-size: 24px",
        "font-weight: 700",
        "font-family: var(--font-geist-sans), sans-serif",
      ].join(";")
    );

    console.log(
      "%c" + copy.subtitle,
      [
        "color: #c084fc",
        "font-size: 13px",
        "font-weight: 700",
        "letter-spacing: 0.22em",
        "text-transform: uppercase",
        "font-family: var(--font-geist-mono), monospace",
      ].join(";")
    );

    console.log(
      "%c" + copy.body,
      [
        "color: #cbd5e1",
        "font-size: 14px",
        "line-height: 1.7",
        "font-family: var(--font-geist-sans), sans-serif",
      ].join(";")
    );
  }, [language]);

  return null;
}
