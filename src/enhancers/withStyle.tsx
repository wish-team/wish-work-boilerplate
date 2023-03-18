import type { EmotionCache } from '@emotion/react'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import createEmotionCache from '@/enhancers/createEmotionCache'
import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import { useMemo } from 'react'
import configTheme from '../theme/configure'
import type { AvailableLocales } from './configs/availableLocales'
import { availableLocales } from './configs/availableLocales'
import useThemeDetector from './hooks/useThemeDetector'

interface WithThemeProps {
  children: ReactNode
  serverEmotionCache: EmotionCache
}

const WithTheme = ({ children, serverEmotionCache }: WithThemeProps) => {
  const { locale } = useRouter()
  const theme = useThemeDetector()

  const themeObject = useMemo(() => {
    const { direction, fontFamily } = availableLocales[(locale as AvailableLocales) ?? 'en']

    if (typeof window !== 'undefined') {
      const body = document.getElementsByTagName('body')[0]
      body.setAttribute('dir', direction)
    }
    return configTheme({ direction, mode: theme ?? 'light', fontFamily })
  }, [locale, theme])

  const emotionCache = useMemo(
    () => serverEmotionCache || createEmotionCache(themeObject.direction),
    [themeObject.direction, serverEmotionCache]
  )

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={themeObject}>
        <CssBaseline />
        <div dir={themeObject.direction}>{children}</div>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default WithTheme
