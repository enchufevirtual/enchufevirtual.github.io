
import { ActionType } from '@/context/type';
import { Category } from '@/interfaces/interfaces';

export const dataReducer = (state: Category , action: ActionType) => {

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
