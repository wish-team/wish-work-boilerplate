import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';

// Libs
// import Translation from 'libs/Translation';

// Components
import PageWrapper from '../components/layout/PageWrapper';
import Head from 'next/head';
// import WithRedux from 'enhancers/withRedux';
import WithStyle from '../enhancers/withStyle';
// import WithAuth from 'enhancers/withAuth';

// Translation.loadTranslations('fa');

// Component
const App = ({ Component, pageProps }) => (
		<WithStyle>
				<Head>
					{/* <title>{Translation.t('title.main')}</title> */}
					<meta name="viewport" content="initial-scale=1, width=device-width" />
					<title>Figure it Right Book | Available on Amazon and Google Play</title>
					<meta name='og:title' content='Figure it Right Book | Available on Amazon and Google Play'/>
					<meta name='keywords' content='book, startup, tech company, technology, smart, cogent, foundation'/>
					<meta name='description' content='Cogent Conventions to Create a Compelling Foundation as a Small Tech Company. Written by Amirhosein Shirani, Founder of Wish Work Company'/>
					<meta name='og:description' content='Cogent Conventions to Create a Compelling Foundation as a Small Tech Company. Written by Amirhosein Shirani, Founder of Wish Work Company'/>
					<meta name='subject' content='Book Introduction'/>
					<meta name='copyright' content='Amirhosein Shirani'/>
					<meta name='language' content='EN'/>
					<meta name='robots' content='index,follow'/>
					<meta name='author' content='amirhosein shirani'/>

					<meta name='og:image' content='/images/favicon/figure-it-right-web.png'/>
					<link rel='shortcut icon' type='image/ico' href='/favicon/favicon.ico'/>
					<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
					<link rel="manifest" href="/images/favicon/site.webmanifest"/>
					<meta name='coverage' content='Worldwide'/>
					<meta name='distribution' content='Global'/>
				</Head>
				<CssBaseline />
				<PageWrapper>
					<Component {...pageProps} />
				</PageWrapper>
		</WithStyle>
);

// Props
App.propTypes = {
	Component: PropTypes.elementType.isRequired,
	// pageProps: PropTypes.shape().isRequired,
};

App.defaultProps = {
};

// Export
export default App;