import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEn from './locales/en/translation.json';
import translationRu from './locales/ru/translation.json';
import translationUz from './locales/uz/translation.json';

const resources = {
  en: { translation: translationEn },
  ru: { translation: translationRu },
  uz: { translation: translationUz }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: 'en', // Default til
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
