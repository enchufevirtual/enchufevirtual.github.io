declare module "@/translations/es.json";
declare module "@/translations/en.json";
declare module "@/context/GlobalContext";
declare module "@/interfaces/interfaces" {

  export interface GlobalValue {
    value: string;
    language: string;
  }

  export interface PropsProvider {
    children: JSX.Element | JSX.Element[];
  }

}

declare module "@/context/dataReducer" {

  export const initialState = {
    value: 'CATEGORIES',
    language: 'en',
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
          language: payload
        }
      case 'es':
        return {
          ...state,
          language: payload
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
