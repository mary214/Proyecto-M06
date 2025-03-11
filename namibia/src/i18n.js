import { createI18n } from 'vue-i18n';

import ca from './locales/ca.json';
import es from './locales/es.json';
import en from './locales/en.json';
//import fr from './locales/fr.json';
// Creem la instància d'i18n
const i18n = createI18n({
legacy: false, // Necessari per a Vue 3
locale: localStorage.getItem('lang') || 'es', // Idioma per defecte (recuperat de localStorage si existeix)
fallbackLocale: 'en', // Si un text no està traduït, usa català
messages: { ca, es, en },
});

export default i18n;