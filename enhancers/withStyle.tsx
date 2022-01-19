import React, { useMemo, useEffect } from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import createCache from '@emotion/cache';

// Actions

// import rtlPlugin from 'stylis-plugin-rtl';
import configTheme from '../theme/configure';

// import useThemeDetector from '../enhancers/useThemeDetector';

// Constants
// import APP_CONSTANTS from 'constants/app';

/* WithTheme Component =================== */
const WithTheme = ({ children }) => {
	// const isDark = useThemeDetector();
	// const dispatch = useDispatch();

	const { themeObject } = useMemo(() => {
		// const { direction, fontFamily } = APP_CONSTANTS.LANG[app.lang];
		const theme = configTheme('ltr', 'light', 'Mukta');
		const stylisPlugin = [];

		// if (direction === 'rtl') {
		// 	stylisPlugin.push(rtlPlugin);
		// }

		// const style = createCache({
		// 	key: 'css',
		// 	stylisPlugins: [rtlPlugin],
		// });

		return { themeObject: theme, };
	}, []);

	return (
		// <CacheProvider>
			<ThemeProvider theme={themeObject}>
				{children}
			</ThemeProvider>
		// </CacheProvider>
	);
};

// Export default
export default WithTheme;

// function useSelector(arg0: (state: any) => any) {
// 	throw new Error('Function not implemented.');
// }
