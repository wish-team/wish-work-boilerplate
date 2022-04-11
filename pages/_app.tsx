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

// Component
const App = (props: AppPropsWithLayout) => {
	const { Component, serverEmotionCache, pageProps } = props;
	const { locale } = useRouter();
	const { t } = useTranslation('common');

	return (
		<WithRedux>
			<WithStyle serverEmotionCache={serverEmotionCache}>
				<Head>
					<meta name="viewport" content="initial-scale=1, width=device-width" />
					<title>{t('meta.title')}</title>
					<meta name='og:title' content={t('head.title')} />
				</Head>
				<PageWrapper>
					<Component {...pageProps} />
				</PageWrapper>
			</WithStyle>
		</WithRedux>
	)
}

/*
	Not needed here, App component is everypage so as long as there's
	serverSideTranslation on every page-level component, there's no problem.
	as you can see, it's still showing the title when this is commented out.
*/
// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     locale,
//     ...(await serverSideTranslations(locale, ['common'], i18nConfig))
//   }
// })

// Export
export default appWithTranslation(App, i18nConfig);
