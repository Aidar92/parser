import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';



i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: `/locales/{{lng}}/{{ns}}.json?nocache=${Date.now()}`,
    },
    debug: true,
    defaultNS: 'common',
    fallbackLng: 'ru-RU',
    fallbackNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    load: 'currentOnly',
    ns: ['common'],
    nsSeparator: ':',
  });

export default i18n;
