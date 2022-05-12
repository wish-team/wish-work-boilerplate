import React from 'react'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import PropTypes from 'prop-types'
import CssBaseline from '@mui/material/CssBaseline'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

// Components
import PageWrapper from '../components/Layout/PageWrapper'
import Head from 'next/head'
import WithRedux from 'enhancers/withRedux'
import WithStyle from '../enhancers/withStyle'
import i18nConfig from '../i18n'
import { EmotionCache } from '@emotion/react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  serverEmotionCache?: EmotionCache
  Component: NextPageWithLayout
}

const App = (props: AppPropsWithLayout) => {
  const { Component, serverEmotionCache, pageProps } = props
  const { locale } = useRouter()
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
