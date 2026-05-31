"use client"

import { Translations } from "@/interfaces/interfaces";
import { createContext } from "react";

interface ContextProps {
  active: boolean;
  load: boolean;
  language: string;
  data: Translations;
  handleMenu: () => void;
  changeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  changeLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  globalValue: string,
}

const GlobalContext = createContext<ContextProps>({} as ContextProps);

export { GlobalContext }
