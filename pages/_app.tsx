import type { EmotionCache } from '@emotion/react'
import InstallPWA from 'components/PWA/InstallPWA'
import ErrorBoundary from 'enhancers/ErrorBoundary'
import type { NextPage } from 'next'
import type { SSRConfig } from 'next-i18next'
import { appWithTranslation } from 'next-i18next'
import nextI18nextConfig from 'next-i18next.config'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import type { ReactElement, ReactNode } from 'react'
import type { PersistedState } from 'store/store'
import { initializeStore, Provider } from 'store/store'
import PageWrapper from '../components/Layout/PageWrapper'
import WithStyle from '../enhancers/withStyle'

type NextPageWithLayout<P> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout<P> = AppProps<P> & {
  serverEmotionCache?: EmotionCache
  Component: NextPageWithLayout<P>
}

const App = ({
  Component,
  pageProps,
  serverEmotionCache,
}: AppPropsWithLayout<{ initialState: Partial<PersistedState> }>) => {
  const createStore = () => initializeStore(pageProps.initialState)

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ErrorBoundary>
      <Provider createStore={createStore}>
        <WithStyle serverEmotionCache={serverEmotionCache}>
          <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <PageWrapper>{getLayout(<Component {...pageProps} />)}</PageWrapper>
          <InstallPWA />
        </WithStyle>
      </Provider>
    </ErrorBoundary>
  )
}

export default appWithTranslation<AppProps<{ initialState: Partial<PersistedState> } & SSRConfig>>(
  App,
  nextI18nextConfig
)
