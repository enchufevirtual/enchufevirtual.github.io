import { createContext } from "react";

type ContextProps = {
  audioRef: HTMLMediaElement | null;
  active: boolean;
  volume: (e: React.ChangeEvent<HTMLInputElement>) => void;
  play: boolean;
  load: boolean;
  data: [];
  handleMenu: () => void;
  toggleAudio: () => void;
  changeCategory: () => Promise<void>;
  changeLanguage: () => void;
  defaultLanguage: () => void,
  category: string,
}

const GlobalContext = createContext<ContextProps>({} as ContextProps);

export { GlobalContext }
