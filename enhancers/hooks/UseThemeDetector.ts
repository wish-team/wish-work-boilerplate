import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'redux/store';
import appSlice from 'redux/slices/app/slice';
// import useSWR from 'swr'

/*
	based on this article we can check user default theme
	https://medium.com/hypersphere-codes/detecting-system-theme-in-javascript-css-react-f6b961916d48
*/

/*
	if a system is in dark mode, there's no way that user can set it to lightmode
	because this custom hook keeps setting it back to darkmode every chance it gets
*/

const UseThemeDetector = () => {
	const getCurrentTheme = () => 
		typeof window !== 'undefined'
			? window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
			: false;
	if(typeof window !== 'undefined'){
		// console.log(window.matchMedia('(prefers-color-scheme: dark)'))
	}	
	const dispatch = useAppDispatch();
	const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
	
	useEffect(() => {
		if (isDarkTheme) {
			setIsDarkTheme(true)
			dispatch(appSlice.actions.setTheme("dark"))
		}
	
		else {
			setIsDarkTheme(false)
			dispatch(appSlice.actions.setTheme("light"))
		}
	}, [isDarkTheme])
	return isDarkTheme;
};

export default UseThemeDetector;
