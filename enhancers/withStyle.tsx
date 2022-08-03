import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import createEmotionCache from 'enhancers/createEmotionCache'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { i18n } from '../next-i18next.config'
import configTheme from '../theme/configure'
import ConditionalWrapper from './ConditionalWrapper'
import useThemeDetector from './hooks/useThemeDetector'

const WithTheme = ({ children, serverEmotionCache }) => {
  const { locale } = useRouter()
  const theme = useThemeDetector()

  const themeObject = useMemo(() => {
    const { direction, fontFamily } = i18n.availableLocales[locale]

    if (process.browser) {
      const body = document.getElementsByTagName('body')[0]
      body.setAttribute('dir', direction)
    }
    return configTheme({ direction, mode: theme, fontFamily })
  }, [locale, theme])

  const emotionCache = useMemo(
    () => serverEmotionCache || createEmotionCache(themeObject.direction),
    [themeObject.direction, serverEmotionCache]
  )

  return (
    <CacheProvider value={emotionCache}>
      <ConditionalWrapper themeObject={themeObject}>
        <>
          <CssBaseline />
          <Head>
            {(themeObject.typography.fontFamily as unknown as string[]).map(
              (font: string, i: number) => {
                if (font === 'Rotunda') return ''

                return <link key={i} href={`/fonts/${font}/style.css`} rel="stylesheet" />
              }
            )}
          </Head>
          <div dir={themeObject.direction}>{children}</div>
        </>
      </ConditionalWrapper>
    </CacheProvider>
  )
}

export default WithTheme
