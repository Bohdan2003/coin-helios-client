import en from './dictionaries/en.json';

export type TDictionary = typeof en;
export type TLocale = 'en' | 'ru';

export const locales: TLocale[] = ['en', 'ru'];
export const defaultLocale = locales[0];

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  ru: () => import('./dictionaries/ru.json').then((module) => module.default),
};

export const getDictionary = async (locale: TLocale): Promise<TDictionary> => {
  if(locales.includes(locale)) return dictionaries[locale]();

  return dictionaries[defaultLocale]();
};