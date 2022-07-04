import React from 'react';
import ReactNumberFormat from 'react-number-format';
// import Num2persian from 'num2persian';
import OutlinedInput from '@mui/material/OutlinedInput';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import type { InputPropTypes } from '../type';

// eslint-disable-next-line react/display-name
const NumberFormat = React.forwardRef((props: any, ref) => {
	const { onChange, ...other } = props;

	return (
		<ReactNumberFormat
			{...other}
			getInputRef={ref}
			onValueChange={values => {
				onChange({ target: { name: props.name, value: values.value } });
			}}
			thousandSeparator
			isNumericString
		// prefix="$"
		/>
	);
});

const NumberFormatInput = ({
	input,
	field: { onChange, value },
	fieldState: { error },
}: InputPropTypes) => {
	const {
		currency, endAdornment, startAdornment, ...rest
	} = input;

	return (
		<TextField
			onChange={onChange}
			error={!!error}
			helperText={error ? error.message : null}
			InputProps={{
				startAdornment: startAdornment || null,
				endAdornment: endAdornment || (currency ? (
					<Typography color="primary" width={250} sx={{ textAlign: 'right' }}>
						{currency}
					</Typography>
				) : null),
				inputComponent: typeof parseFloat(value) === 'string' ? OutlinedInput : NumberFormat,
				value,
			}}
			{...rest}
		/>
	);
};

export default NumberFormatInput;
