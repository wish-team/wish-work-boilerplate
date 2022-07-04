import React, { useState } from 'react'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { appWithTranslation } from 'next-i18next';
import WithStyle from '../enhancers/withStyle'
import { AppWrapper } from '../context/state';
import { useAppContext } from '../context/state';


// Components
import Head from 'next/head'
import i18nConfig from '../i18n'
import { EmotionCache } from '@emotion/react'

// i18n
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type PropTypes = {
  locale: string,
}

type AppPropsWithLayout = AppProps & {
  emotionCache?: EmotionCache
  Component: NextPageWithLayout
}

const App = (props: AppPropsWithLayout) => {
  const { Component, emotionCache, pageProps } = props
  // const { locale } = useRouter()
  const { locale } = useRouter();
  const { t } = useTranslation('common');

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='keywords' content='Wish Work, wishwork, software solutions , community of software engineers, software partner , solution , Scope defining , Shaping , discover , product , Maintaining , programming, cloud development' />
        <meta name='language' content={locale} />
        <meta name='robots' content='index,follow' />
        <meta name='author' content={t('meta.wish_work')} />
        {/* <meta name='og:image' content='/images/favicon/figure-it-right-web.png' /> */}
        <link rel='shortcut icon' type='image/ico' href='favicon/favicon.ico' />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        {/* <link rel="manifest" href="/images/favicon/site.webmanifest" /> */}
        <link rel="manifest" href="/manifest.json"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="content-language" content="en" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Wish Work Team" />
        <meta name="robots" content="index follow" />
        <meta name="copyright" content="2021-2022" />
        <meta name="site_name" content="Wish Work" />
        <meta itemProp="site_name" content="Wish Work" />
        <meta property="og:site_name" content="Wish Work" />
        <meta name="url" content="https://wishwork.org/" />
        <meta itemProp="url" content="https://wishwork.org/" />
        <meta property="og:url" content="https://wishwork.org/" />
        <meta name="twitter:url" content="https://wishwork.org/" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:image:src" content="../images/twittercardimg.svg" src={TwitterCard}/>  */}

        <meta name="keywords" content="Wish Work, wishwork, software solutions , software partner, freelancer solution , freelancer , solution , freelancing,
							Scope defining , Shaping , discover , product , Product Manager , Maintaining , pre-vetted freelancers, programming, cloud development"/>
        <meta itemProp="keywords" content="Wish Work, wishwork, software solutions , software partner, freelancer solution , freelancer , solution , freelancing,
							Scope defining , Shaping , discover , product , Product Manager , Maintaining , pre-vetted freelancers, programming, cloud development"/>
        <meta property="og:keywords" content="Wish Work, wishwork, software solutions , software partner, freelancer solution , freelancer , solution , freelancing,
							Scope defining , Shaping , discover , product , Product Manager , Maintaining , pre-vetted freelancers, programming, cloud development"/>
        <meta name="type" content="website" />
        <meta itemProp="type" content="website" />
        <meta property="og:type" content="website" />
        <meta name="apple-mobile-web-app-title" content="Wish Work" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="width" />
        <meta name='og:country-name' content='Iran' />
        <meta content='yes' name='apple-touch-fullscreen' />
        <meta name='subject' content='Software Partner' />
        <meta name='reply-to' content='info@wishwork.org' />
        <meta name='distribution' content='Global' />
        <meta name='og:email' content='info@wishwork.org' />
      </Head>
      <AppWrapper>
        <WithStyle serverEmotionCache={emotionCache}>
          <div>{getLayout(<Component {...pageProps} />)} </div>
        </WithStyle>
      </AppWrapper>
    </div>
  )
}

export const getStaticProps = async ({ locale }: PropTypes) => ({
  props: {
    locale,
    ...(await serverSideTranslations(locale, ['common'], i18nConfig)),
  },
})

export default appWithTranslation(App, i18nConfig)
