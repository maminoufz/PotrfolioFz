export interface Project {
  id: number;
  title: {
    en: string;
    fr: string;
    es: string;
  };
  description: {
    en: string;
    fr: string;
    es: string;
  };
  longDescription: {
    en: string;
    fr: string;
    es: string;
  };
  image: string;
  github: string;
  live: string;
  technologies: string[];
}

export type Language = 'en' | 'fr' | 'ar';

export interface Translations {
  [key: string]: {
    en: string;
    fr: string;
    ar: string;
  };
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}