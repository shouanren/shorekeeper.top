// locales/server.ts
'use server'

import { zhCN } from 'date-fns/locale'
import { getCurrentLocale } from './server'

export const getLocale = async function () {
  const locale = getCurrentLocale()
  return locale === 'zh' ? zhCN : undefined
}
