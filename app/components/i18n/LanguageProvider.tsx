"use client";

import {
  createContext,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  LANGUAGE_COOKIE_KEY,
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
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage: Language;
}) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(LANGUAGE_COOKIE_KEY, language);
    document.cookie = `${LANGUAGE_COOKIE_KEY}=${language}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
  }, [language]);

  useEffect(() => {
    setLanguageState(initialLanguage);
  }, [initialLanguage]);

  const setLanguage = useCallback(
    (next: Language) => {
      if (next === language) return;

      document.documentElement.lang = next;
      window.localStorage.setItem(LANGUAGE_COOKIE_KEY, next);
      document.cookie = `${LANGUAGE_COOKIE_KEY}=${next}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
      startTransition(() => {
        setLanguageState(next);
      });
    },
    [language]
  );

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
