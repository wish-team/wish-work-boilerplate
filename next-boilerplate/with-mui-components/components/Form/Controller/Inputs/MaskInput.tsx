import * as React from 'react';

import { IMaskInput } from 'react-imask';

import TextField from '@mui/material/TextField';
import type { InputPropTypes } from '../type';

// eslint-disable-next-line react/display-name
const Mask = React.forwardRef((props: any, ref) => {
	const { onChange, input, ...other } = props;

	return (
		<IMaskInput
			{...other}
			mask={input.mask}
			definitions={input.maskDefinitions}
			inputRef={ref}
			onAccept={(value: any) => {
				onChange({ target: { name: props.name, value } });
			}}
			overwrite
		/>
	);
});

const MaskInput = ({
	input,
	field: { onChange, value },
	fieldState: { error },
}: InputPropTypes) => (
	<TextField
		name={input.name}
		label={input.label}
		disabled={input.disabled}
		onChange={onChange}
		style={{ direction: 'ltr' }}
		error={!!error}
		helperText={error ? error.message : null}
		value={value}
		InputProps={{
			inputComponent: Mask,
			inputProps: {
				input,
			},
		}}
	/>
);

export default MaskInput;
