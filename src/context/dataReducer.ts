
import { ActionType } from '@/context/type';
import { GlobalValue } from '@/interfaces/interfaces';
import { en } from '@/translations/en';
import { es } from '@/translations/es';

export const dataReducer = (state: GlobalValue , action: ActionType) => {

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
    case 'CATEGORIES':
    case 'FRONTEND':
    case 'BACKEND':
    case 'LIBRARY':
      return {
        ...state,
        value: payload,
      }
    case 'en':
      return {
        ...state,
        language: payload,
        data: en,
      }
    case 'es':
      return {
        ...state,
        language: payload,
        data: es,
      }
    default:
      return state;
  }
}
