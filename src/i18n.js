import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import pt from './translations/pt.json'

const resources = {
   en: {
      translation: {
         'teste': 'hello world',
         'here': 'here',
         "teste": "The person is here",
         "teste_plural": "The people are here"
      }
   },
   pt: { translation: pt }
}

i18n
   .use(initReactI18next)
   .init({
      ns: ['en', 'pt'],
      lng: 'pt',
      debug: true,
      resources,
      fallbackLng: 'en',
      keySeparator: false,
      interpolation: {
         escapeValue: false,
      }
   })
export default i18n