// context/language/context.ts

import { createContext } from "react";

export type Language = "es" | "en";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext =
  createContext<LanguageContextType | undefined>(undefined);