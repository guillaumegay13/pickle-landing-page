import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en.json';
import translationFR from './locales/fr.json';

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    fallbackLng: 'en',
    debug: false, // set to true for development
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      // Order matters! Navigator is the browser's language setting
      order: ['navigator', 'querystring', 'cookie', 'localStorage', 'htmlTag', 'path'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage', 'cookie'],
    },
    supportedLngs: ['en', 'fr'],
    lowerCaseLng: true
  });

export default i18n;
