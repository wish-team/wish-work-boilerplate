import Document, {
	Html, Head, Main, NextScript,
} from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from 'enhancers/createEmotionCache';
import { i18n } from '../i18n';

// import APP_CONSTANTS from 'constants/app';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content="default" />
					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="theme-color" content="#000" />

					<link sizes="180x180" href="/icons/apple-touch-icon.png" />
					<link rel="manifest" href="/manifest.json" />
					<link rel="icon" href="/icons/favicon.ico" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}

}



MyDocument.getInitialProps = async ctx => {
	const originalRenderPage = ctx.renderPage;
	const initialProps = await Document.getInitialProps(ctx);

	// Create Emotion cache
	const direction = i18n?.availableLocales?.[ctx.locale]?.direction;
	const cache = createEmotionCache(direction);

	// Extract styles from html
	const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);
	const chunks = extractCriticalToChunks(initialProps.html);
	const styles = constructStyleTagsFromChunks(chunks);

	// Make style tags
	// const emotionStyleTags = chunks.styles.map((style: any) => {
	// 	return (
	// 		<style
	// 			data-emotion={`${style.key} ${style.ids.join(' ')}`}
	// 			key={style.key}
	// 			// eslint-disable-next-line react/no-danger
	// 			dangerouslySetInnerHTML={{ __html: style.css }}
	// 		/>
	// 	);
	// });

	ctx.renderPage = () => originalRenderPage({
		enhanceApp: App => function EnhanceApp(props) {
			return <App serverEmotionCache={cache} {...props} />;
		},
	});

	return {
		...initialProps,
		emotionStyleTags: styles,
	};
};


export default MyDocument;