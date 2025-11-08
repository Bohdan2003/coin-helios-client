'use client';
import { create } from 'zustand';
//types
import { TLocale } from '@/shared/i18n/dictionaries';

type TLocaleStore = {
  locale: TLocale;
  setLocale: (locale: TLocale) => void;
}

export const useLocaleStore = create<TLocaleStore>((set) => ({
  locale: 'en',
  setLocale: (locale) => set({ locale }),
}));
