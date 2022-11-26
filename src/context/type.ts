export type ActionType =
| { type: 'CATEGORIES', payload: string }
| { type: 'FRONTEND', payload: string }
| { type: 'BACKEND', payload: string }
| { type: 'LIBRARY', payload: string }
| { type: 'en', payload: string }
| { type: 'es', payload: string }

export type Props = {
  p?: string;
  a?: string;
  span?: string;
  title?: string;
  label?: string;
  option?: string;
}
