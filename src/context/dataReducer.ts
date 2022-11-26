
import { ActionType } from '@/context/type';
import { GlobalValue } from '@/interfaces/interfaces';

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
