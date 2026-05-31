export type ProjectCategory = 'OPEN_SOURCE' | 'CLIENTS' | 'PERSONAL';
export type ProjectType = 'FRONTEND' | 'BACKEND'  | 'LIBRARY' | 'FULLSTACK';

export interface DataBase {
  title: string;
  slug: string;
  image: string;
  category: ProjectCategory;
  source: string;
  type: ProjectType;
  demo: string;
  author: string;
  authorUrl: string;
  authorSocials: { label: string; url: string }[];
  description_en: string;
  description_es: string;
}
