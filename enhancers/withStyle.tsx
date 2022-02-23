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
import appSlice from 'redux/slices/app/slice';

// import rtlPlugin from 'stylis-plugin-rtl';
import configTheme from '../theme/configure';

// import useThemeDetector from '../enhancers/useThemeDetector';

// Constants
// import APP_CONSTANTS from 'constants/app';

/* WithTheme Component =================== */
const WithTheme = ({ children, serverEmotionCache }) => {
	const { locale } = useRouter();
	const [isDark, setIsDark] = useState(UseThemeDetector());
	const theme = useSelector(state => state.app.theme);

	const dispatch = useAppDispatch()

	// if ((isDark && theme == "light") || (!isDark && theme == "dark")) {
	// 	dispatch(appSlice.actions.toggleTheme())
	// }

	const themeObject = useMemo(() => {
		const { direction, fontFamily } = i18n.availableLocales[locale];
		// const background = theme == "dark" ?
		// 	"linear-gradient(to bottom, rgba(0, 255, 255, 1),rgba(0, 244, 244, 1) ,rgba(10, 210, 210, 1))"
		// 	:
		// 	"linear-gradient(to bottom, rgba(0, 255, 255, 1),rgba(0, 244, 244, 1) ,rgba(10, 210, 210, 1))"

		console.log(theme)
		if (process.browser) {
			const body = document.getElementsByTagName('body')[0];
			body.setAttribute('dir', direction);
		}
		return configTheme({ direction, mode: theme, fontFamily });
	}, [locale, theme]);

	const emotionCache = useMemo(
		() => serverEmotionCache || createEmotionCache(themeObject.direction),
		[themeObject.direction, serverEmotionCache],
	);


	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={themeObject}>
				<CssBaseline />
				<Head>
					{themeObject.typography.fontFamily.map((font, i) => (
						<link key={i} href={`/fonts/${font}/style.css`} rel="stylesheet" />
					))
					}
				</Head>
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