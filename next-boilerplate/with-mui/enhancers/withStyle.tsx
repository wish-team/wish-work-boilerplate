import React, { useMemo, useEffect, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
// import createCache from '@emotion/cache'
import { useRouter } from 'next/router'
import useThemeDetector from 'context/useLocalStorage'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from 'enhancers/createEmotionCache'
import CssBaseline from '@mui/material/CssBaseline'
import { i18n } from '../i18n'
import Head from 'next/head'

// Actions

// import rtlPlugin from 'stylis-plugin-rtl';
import configTheme from '../theme/configure'
import { useAppContext } from '../context/state';

// Constants
// import APP_CONSTANTS from 'constants/app';

type Theme = {
	mode: "dark" | "light"
}

/* WithTheme Component =================== */
const WithStyle = ({ children, serverEmotionCache }) => {
	const [loaded, setLoaded] = React.useState(false);
	const { locale } = useRouter()
	const theme: Theme = useAppContext();
	const mode = theme.mode
	// useThemeDetector()
	// const [isDark, setIsDark] = useState(useThemeDetector())

	React.useEffect(() => {
		setLoaded(true);
	}, []);


	const themeObject = useMemo(() => {
		const { direction, fontFamily } = i18n.availableLocales[locale]
		if (process.browser) {
			const body = document.getElementsByTagName('body')[0]
			body.setAttribute('dir', direction)
		}
		return configTheme({ direction, mode: mode, fontFamily })
	}, [locale, mode])

	const emotionCache = useMemo(
		() => serverEmotionCache || createEmotionCache(themeObject.direction),
		[themeObject.direction, serverEmotionCache]
	)



	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={themeObject}>
				<CssBaseline />
				<Head>
					{/* Rotunda's style.css file is missing, because of this line, it produces an error in console */}
					{(themeObject.typography.fontFamily as unknown as string[]).map(
						(font: string, i: number) => (
							<link key={i} href={`/fonts/${font}/style.css`} rel="stylesheet" />
						)
					)}
				</Head>
				{loaded && <div dir={themeObject.direction}>{children}</div>}
			</ThemeProvider>
		</CacheProvider>
	)
}


// Export default
export default WithStyle
