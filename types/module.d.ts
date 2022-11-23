declare module "@context/dataReducer" {

  export const initialState = {
    value: ''
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
      default:
        return state;
    }
  }

};
declare module "@translations/es.json";
declare module "@translations/en.json";

declare module '@context/type' {

  export type ActionType =
  | { type: 'CATEGORIES', payload: string }
  | { type: 'FRONTEND', payload: string }
  | { type: 'BACKEND', payload: string }
  | { type: 'LIBRARY', payload: string }

};
declare module '@database/database.model' {

    interface DataBase {
    title: string;
    image: string;
    source: string;
    type: string;
    demo: string
  }

};
