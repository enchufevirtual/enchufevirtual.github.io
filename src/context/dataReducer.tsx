
import { ActionType } from '@context/type';

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
