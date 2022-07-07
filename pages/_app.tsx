import type { NextPage } from 'next'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

// Components
import { EmotionCache } from '@emotion/react'
import WithRedux from 'enhancers/withRedux'
import Head from 'next/head'
import PageWrapper from '../components/Layout/PageWrapper'
import WithStyle from '../enhancers/withStyle'
import i18nConfig from '../i18n'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  serverEmotionCache?: EmotionCache
  Component: NextPageWithLayout
}

const App = (props: AppPropsWithLayout) => {
  const { Component, serverEmotionCache, pageProps } = props
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <WithRedux>
      <WithStyle serverEmotionCache={serverEmotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <PageWrapper>{getLayout(<Component {...pageProps} />)}</PageWrapper>
      </WithStyle>
    </WithRedux>
  )
}

export default appWithTranslation(App, i18nConfig)
