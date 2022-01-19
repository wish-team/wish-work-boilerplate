import Document, {
	Html, Head, Main, NextScript,
} from 'next/document';

// import APP_CONSTANTS from 'constants/app';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link href="/fonts/mukta/style.css" rel="stylesheet" />
					{/* <meta name="application-name" content={APP_CONSTANTS.APP_NAME} /> */}
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content="default" />
					{/* <meta name="apple-mobile-web-app-title" content={APP_CONSTANTS.APP_NAME} /> */}
					{/* <meta name="description" content={APP_CONSTANTS.APP_DESCRIPTION} /> */}
					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="theme-color" content="#FF8300" />

					<link sizes="180x180" href="/icons/apple-touch-icon.png" />
					<link rel="manifest" href="/manifest.json" />
					<link rel="icon" href="/icons/favicon.ico" />
				</Head>
				<body dir="ltr">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;