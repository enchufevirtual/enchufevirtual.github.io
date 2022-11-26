declare module "@/translations/es";
declare module "@/translations/en";
declare module "@/context/GlobalContext";
declare module "@/interfaces/interfaces" {

  export interface GlobalValue {
    value: string;
    language: string;
    data: Translations;
  }
  export interface PropsProvider {
    children: JSX.Element | JSX.Element[];
  }
  export interface Translations {
    hero: Props;
    main: Props;
    radio: Props
  }
}

declare module "@/context/dataReducer" {

  export const initialState = {
    value: 'CATEGORIES',
    language: 'en',
    data: {
      hero: {
        p: `Space created to share open source projects,
        taking knowledge to another level.`,
        span: 'Contact'
      },
      main: {
        p: "Open Source",
        span: "Projects",
        label: "Categories"
      },
      radio: {
        p: `May life not end without leaving traces,
          every moment you toast is a story to remember.`
      }
    }
  }

  export const dataReducer = (state: typeof initialState, action: ActionType) => {

    const { type, payload } = action;

    switch(type) {
      case 'CATEGORIES':
        return {
          ...state,
          value: payload
        }
      case 'FRONTEND':
        return {
          ...state,
          value: payload
        }
      case 'BACKEND':
        return {
          ...state,
          value: payload
        }
      case 'LIBRARY':
        return {
          ...state,
          value: payload
        }
      case 'en':
        return {
          ...state,
          language: payload,
          data: state.data = en
        }
      case 'es':
        return {
          ...state,
          language: payload,
          data: state.data = es
        }
      default:
        return state;
    }
  }

};

declare module '@/context/type' {

  export type ActionType =
  | { type: 'CATEGORIES', payload: string }
  | { type: 'FRONTEND', payload: string }
  | { type: 'BACKEND', payload: string }
  | { type: 'LIBRARY', payload: string }
  | { type: 'en', payload: string}
  | { type: 'es', payload: string}

  export type Props = {
    p?: string;
    a?: string;
    span?: string;
    title?: string;
    label?: string;
    option?: string;
  }

};
declare module '@/database/database.model' {

    interface DataBase {
      title: string;
      image: string;
      source: string;
      type: string;
      demo: string;
      description_en: string;
      description_es: string;
  }

};
