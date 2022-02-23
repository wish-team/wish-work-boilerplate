import React from 'react';
import type { AppProps } from 'next/app';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

// Libs
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// import Translation from 'libs/Translation';

// Components
import PageWrapper from '../components/Layout/PageWrapper';
import Head from 'next/head';
import WithRedux from 'enhancers/withRedux';
import WithStyle from '../enhancers/withStyle';
import i18nConfig from '../i18n';
import { EmotionCache } from '@emotion/react';

// Translation.loadTranslations('fa');
type AppPropsWithLayout = AppProps & {
	serverEmotionCache?: EmotionCache;
}

type PropTypes = {
	locale: string,
}

// Component
const App = (props: AppPropsWithLayout) => {
	const { Component, serverEmotionCache, pageProps } = props;
	const { locale } = useRouter();
	const { t } = useTranslation('common');

	return (
		<WithRedux>
			<WithStyle serverEmotionCache={serverEmotionCache}>
				<Head>
					{/* <title>{Translation.t('title.main')}</title> */}
					<meta name="viewport" content="initial-scale=1, width=device-width" />
					<title>{t('meta.title')}</title>
					<meta name='og:title' content={t('meta.wish_work')} />
					{/* <meta name='keywords' content='Wish Work, wishwork, software solutions , community of software engineers, software partner , solution , Scope defining , Shaping , discover , product , Maintaining , programming, cloud development' /> */}
					<meta name='description' content={t('meta.description')} />
					<meta name='og:description' content={t('meta.description')} />
					<meta name='subject' content={t('meta.subject')} />
					<meta name='copyright' content={t('meta.wish_work')} />
					<meta name='language' content={locale} />
					<meta name='robots' content='index,follow' />
					<meta name='author' content={t('meta.wish_work')} />

					<meta name='og:image' content='/images/favicon/figure-it-right-web.png' />
					<link rel='shortcut icon' type='image/ico' href='/favicon/favicon.ico' />
					<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
					<link rel="manifest" href="/images/favicon/site.webmanifest" />
				</Head>
				<PageWrapper>
					<Component {...pageProps} />
				</PageWrapper>
			</WithStyle>
		</WithRedux>
	)
}

export const getStaticProps = async ({ locale }: PropTypes) => ({
	props: {
		locale,
		...(await serverSideTranslations(locale, ['common'], i18nConfig)),
	},
})
// Export
export default appWithTranslation(App, i18nConfig);
