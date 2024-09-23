import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './app/language-pack/en';
import { fr } from './app/language-pack/fr';
import { sp } from './app/language-pack/sp';
import { de } from './app/language-pack/de';
import { gr } from './app/language-pack/gr';

const resources = {
  en,
  fr,
  sp,
  de,
  gr,
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
