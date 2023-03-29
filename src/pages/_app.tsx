import PageWrapper from '@/components/Layout/PageWrapper'
import InstallPWA from '@/components/PWA/InstallPWA'
import ErrorBoundary from '@/enhancers/ErrorBoundary'
import { fbpPageview } from '@/enhancers/fpixel'
import { gaPageview } from '@/enhancers/gtag'
import ReactQueryProvider from '@/enhancers/reactQueryProvider'
import WithStyle from '@/enhancers/withStyle'
import type { PersistedState } from '@/store/store'
import StoreProvider from '@/store/StoreProvider'
import type { EmotionCache } from '@emotion/react'
import type { NextPage } from 'next'
import type { SSRConfig } from 'next-i18next'
import { appWithTranslation } from 'next-i18next'
import nextI18nextConfig from 'next-i18next.config'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import type { ReactElement, ReactNode } from 'react'
import { useEffect } from 'react'

type InitialState = { initialState: PersistedState }

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout<P> = AppProps<P> & {
  serverEmotionCache: EmotionCache
  Component: NextPageWithLayout
}

const App = ({
  Component,
  pageProps: { initialState, dehydratedState, ...pageProps },
  serverEmotionCache,
}: AppPropsWithLayout<InitialState & { dehydratedState: unknown }>) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  const router = useRouter()

  useEffect(() => {
    fbpPageview()

    const handleRouteChange = (url: string) => {
      gaPageview(url)
      fbpPageview()
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Script
        id="fb-pixel"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', ${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID});
        `,
        }}
      />
      <ErrorBoundary>
        <ReactQueryProvider dehydratedState={dehydratedState}>
          <StoreProvider {...initialState}>
            <WithStyle serverEmotionCache={serverEmotionCache}>
              <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
              </Head>
              <PageWrapper>{getLayout(<Component {...pageProps} />)}</PageWrapper>
              <InstallPWA />
            </WithStyle>
          </StoreProvider>
        </ReactQueryProvider>
      </ErrorBoundary>
    </>
  )
}

export default appWithTranslation<
  AppPropsWithLayout<InitialState & SSRConfig & { dehydratedState: unknown }>
>(App, nextI18nextConfig)
