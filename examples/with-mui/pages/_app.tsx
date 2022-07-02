import React, { useState } from 'react'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { appWithTranslation } from 'next-i18next';
import WithStyle from '../enhancers/withStyle'
import { AppWrapper } from '../context/state';
import { useAppContext } from '../context/state';


// Components
import Head from 'next/head'
import i18nConfig from '../i18n'
import { EmotionCache } from '@emotion/react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  emotionCache?: EmotionCache
  Component: NextPageWithLayout
}

const App = (props: AppPropsWithLayout) => {
  const { Component, emotionCache, pageProps } = props
  // const { locale } = useRouter()
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AppWrapper>
        <WithStyle serverEmotionCache={emotionCache}>
          <div>{getLayout(<Component {...pageProps} />)} </div>
        </WithStyle>
      </AppWrapper>
    </div>
  )
}

export default appWithTranslation(App, i18nConfig)
