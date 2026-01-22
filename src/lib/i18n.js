import { createI18n } from 'vue-i18n';

import it from '../locales/it.json';
import en from '../locales/en.json';
import de from '../locales/de.json';

// Get saved language from localStorage or use browser language
const getSavedLanguage = () => {
  const saved = localStorage.getItem('user-language');
  if (saved) return saved;

  // Detect browser language
  const browserLang = navigator.language.split('-')[0];
  return ['it', 'en', 'de'].includes(browserLang) ? browserLang : 'it';
};

const i18n = createI18n({
  legacy: false, // Use Composition API mode
  locale: getSavedLanguage(),
  fallbackLocale: 'it',
  messages: {
    it,
    en,
    de,
  },
});

export default i18n;
