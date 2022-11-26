import { Props } from "@/context/type";

export interface GlobalValue {
  value: string;
  language: string;
}

export interface PropsProvider {
  children: JSX.Element | JSX.Element[];
}

export interface Translations {
  hero: Props;
  main: Props;
  radio: Props
}
