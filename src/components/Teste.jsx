import React from 'react'
import i18n from '../i18n'
import { useTranslation } from 'react-i18next'

function Teste() {
   const { t } = useTranslation()
   const change = (lng) => i18n.changeLanguage(lng)
   return (
      <div>
         <button type="button" onClick={() => change('pt')}>PT</button>
         <button type="button" onClick={() => change('en')}>EN</button>
         <h1>{t('teste', { count: 2 })}</h1>
      </div>
   )
}

export default (Teste)