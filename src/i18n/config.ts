import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//translation files
import translation from './locales/en/common.json';

export const resources = {
  en: {
    translation,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ['translation'],
  interpolation: {
    escapeValue: false,
  },
  keySeparator: '.',
  resources,
});
