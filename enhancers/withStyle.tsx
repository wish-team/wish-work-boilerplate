import React, { useMemo, useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import createCache from '@emotion/cache';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import UseThemeDetector from 'enhancers/hooks/UseThemeDetector';
import { useAppDispatch } from 'redux/store';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from 'enhancers/createEmotionCache';
import CssBaseline from '@mui/material/CssBaseline';
import { i18n } from '../i18n';
import Head from 'next/head';

// Actions

// import rtlPlugin from 'stylis-plugin-rtl';
import configTheme from '../theme/configure';

// import useThemeDetector from '../enhancers/useThemeDetector';

// Constants
// import APP_CONSTANTS from 'constants/app';

/* WithTheme Component =================== */
const WithTheme = ({ children, serverEmotionCache }) => {
	const { locale } = useRouter();

	const theme = useSelector(state => state.app.theme);
	const [isDark, setIsDark] = useState(UseThemeDetector());

	// if (typeof window !== 'undefined') {
	// 	useEffect(() => {
	// 		console.log('isDark: ', isDark)
	// 	}, [window.matchMedia.media])
	// }

	const themeObject = useMemo(() => {
		const { direction, fontFamily } = i18n.availableLocales[locale];
		// console.log('direction: ', direction)
		if (process.browser) {
			const body = document.getElementsByTagName('body')[0];
			body.setAttribute('dir', direction);
		}
		console.log("theme: ", theme)
		return configTheme({ direction, mode: theme, fontFamily });
	}, [theme, locale]);

	const emotionCache = useMemo(
		() => serverEmotionCache || createEmotionCache(themeObject.direction),
		[themeObject.direction, serverEmotionCache],
	);

	// console.log('theme object:', themeObject)

	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={themeObject}>
				<Head>
					{themeObject.typography.fontFamily.map((font, i) => (
						<link href={`/fonts/${font}/style.css`} rel="stylesheet" />
					))
					}
				</Head>
				<CssBaseline />
				<div dir={themeObject.direction}>
					{children}
				</div>
			</ThemeProvider>
		</CacheProvider>
	);
};

// Export default
export default WithTheme;

// function useSelector(arg0: (state: any) => any) {
// 	throw new Error('Function not implemented.');
// }