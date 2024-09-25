// locales/client.ts
'use client'

import { zhCN } from 'date-fns/locale'
import { useCurrentLocale } from './client'

export function useLocale() {
  const locale = useCurrentLocale()
  return locale === 'zh' ? zhCN : undefined
}
