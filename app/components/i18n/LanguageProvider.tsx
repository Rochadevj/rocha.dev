"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLanguage,
  translations,
  type Language,
  type Translation,
} from "@/app/lib/i18n";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  copy: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "portfolio-language";

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "pt-BR" || stored === "en") {
      const timeoutId = window.setTimeout(() => {
        setLanguageState(stored);
      }, 0);
      return () => window.clearTimeout(timeoutId);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
  }, []);

  const copy = translations[language];

  const value = useMemo(
    () => ({ language, setLanguage, copy }),
    [language, setLanguage, copy]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslations must be used within LanguageProvider.");
  }
  return context;
}
