// context/language/provider.tsx

import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { LanguageContext, type Language } from "./context";

interface Props {
  children: ReactNode;
}

export function LanguageProvider({ children }: Props) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language") as Language | null;
    return saved ?? "es";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}