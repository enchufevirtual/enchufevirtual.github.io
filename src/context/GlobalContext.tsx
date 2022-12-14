import { Translations } from "@/interfaces/interfaces";
import { createContext } from "react";

type ContextProps = {
  audioRef: HTMLMediaElement | null;
  active: boolean;
  volume: (e: React.ChangeEvent<HTMLInputElement>) => void;
  play: boolean;
  load: boolean;
  language: string;
  data: Translations;
  handleMenu: () => void;
  toggleAudio: () => void;
  changeCategory: () => Promise<void>;
  changeLanguage: () => void;
  globalValue: string,
}

const GlobalContext = createContext<ContextProps>({} as ContextProps);

export { GlobalContext }
