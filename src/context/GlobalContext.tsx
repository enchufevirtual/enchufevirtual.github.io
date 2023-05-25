import { Translations } from "@/interfaces/interfaces";
import { createContext } from "react";

type ContextProps = {
  active: boolean;
  language: string;
  data: Translations;
  handleMenu: () => void;
  changeCategory: () => Promise<void>;
  changeLanguage: () => void;
  globalValue: string,
}

const GlobalContext = createContext<ContextProps>({} as ContextProps);

export { GlobalContext }
