export const projectCategories = ['OPEN_SOURCE', 'CLIENTS', 'PERSONAL'] as const;
export type ProjectCategory = typeof projectCategories[number];

export const projectTypes = ['FRONTEND', 'BACKEND', 'LIBRARY', 'FULLSTACK'] as const;
export type ProjectType = typeof projectTypes[number];

export interface SocialLink {
  label: string;
  url: string;
}

export interface DataBase {
  title: string;
  slug: string;
  image: string;
  category: ProjectCategory;
  type: ProjectType;
  source?: string;
  demo?: string;
  author: string;
  authorUrl: string;
  authorSocials: SocialLink[];
  technologies?: string[];
  description_card: string;
  description_en: string;
  description_es: string;
}
