import { EmotionCache } from '@emotion/react'
import InstallPWA from 'components/PWA/InstallPWA'
import type { NextPage } from 'next'
import { appWithTranslation } from 'next-i18next'
import nextI18nextConfig from 'next-i18next.config'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import type { ReactElement, ReactNode } from 'react'
import { initializeStore, Provider } from 'store/store'
import PageWrapper from '../components/Layout/PageWrapper'
import WithStyle from '../enhancers/withStyle'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  serverEmotionCache?: EmotionCache
  Component: NextPageWithLayout
}

const App = (props: AppPropsWithLayout) => {
  const { Component, serverEmotionCache, pageProps } = props

  const createStore = () => initializeStore(pageProps.initialState)

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <Provider createStore={createStore}>
      <WithStyle serverEmotionCache={serverEmotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <PageWrapper>{getLayout(<Component {...pageProps} />)}</PageWrapper>
        <InstallPWA />
      </WithStyle>
    </Provider>
  )
}

export default appWithTranslation(App, nextI18nextConfig)
