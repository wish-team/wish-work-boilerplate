import { createTheme } from '@mui/material/styles';

// import components from './components';
import shape from './shape';
import palette from './palette';
import typography from './typography';

const configTheme = ({ direction, mode, fontFamily }) => {
	const theme = createTheme({
		direction,
		// components,
		mode,
		// shape,
		palette: {
			...palette.common,
			...palette[mode],
			mode,
		},
		typography: {
			...typography,
			fontFamily,
		},
	});

	return theme;
};

export default configTheme;