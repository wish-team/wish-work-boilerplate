import { createTheme } from '@mui/material/styles';

// import components from './components';
import shape from './shape';
import palette from './palette';
import typography from './typography';
import background from './background';

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
		overrides: {
			MuiCssBaseline: {
				...background.common,
				...background[mode],
				mode
			}
		}
	});

	return theme;
};

export default configTheme;