import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { resources } from './resources'

i18n
  .use(LanguageDetector)
  .init({
    // backend: {
    //   loadPath:
    //     `/locales/{{lng}}/{{ns}}.json`
    // },
    resources,
    fallbackLng: 'en',
    load: 'languageOnly',
    debug: true,
  })

export default i18n
