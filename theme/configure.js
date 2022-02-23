import { createTheme } from '@mui/material/styles';

// import components from './components';
import shape from './shape';
import palette from './palette';
import typography from './typography';
// import background from './background';

const configTheme = ({ direction, mode, fontFamily }) => {
	console.log('b', mode);
	console.log(palette[mode])
	const theme = createTheme({
		direction,
		// components,
		mode,
		// shape,
		palette: {
			...palette.common,
			...palette[mode],
		},
		typography: {
			...typography,
			fontFamily,
		},
	});

	return theme;
};

export default configTheme;