import React, { useCallback, useMemo } from 'react';
import { Controller } from 'react-hook-form';

// Components
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import PasswordInput from './Inputs/PasswordInput';
import CodeInput from './Inputs/CodeInput';
import RadioInput from './Inputs/RadioInput';
import CheckboxInput from './Inputs/CheckboxInput';
import TextInput from './Inputs/TextInput';
import NumberFormatInput from './Inputs/NumberFormatInput';
import MaskInput from './Inputs/MaskInput';
import SelectInput from './Inputs/SelectInput';
import SliderInput from './Inputs/SliderInput';
import FileInput from './Inputs/FileInput';
import EmailInput from './Inputs/EmailInput';
// import DebitCardSelector from './Selectors/DebitCardSelector';
// import CurrencySelector from './Selectors/CurrencySelector';

import type { InputControllerPropTypes } from './type';

// Types
const InputController = ({ input, control }: InputControllerPropTypes) => {
	const {
		mask,
		type,
		name,
		title,
		defaultValue,
		rules,
		columns,
	} = input;

	const Component = useMemo(() => {
		if (mask) return MaskInput;
		if (type === 'password') return PasswordInput;
		if (type === 'code') return CodeInput;
		if (type === 'select') return SelectInput;
		if (type === 'radio') return RadioInput;
		if (type === 'checkbox') return CheckboxInput;
		// if (type) of number
		if (type === 'email') return EmailInput;
		// if (type === 'currencySelector') return CurrencySelector;
		if (type === 'slider') return SliderInput;
		if (type === 'file') return FileInput;

		return TextInput;
	}, [type, mask]);

	// const HelperComponent = useCallback(() => {
	// 	if (helperText) {
	// 		if (typeof helperText === 'string') {
	// 			return <FormHelperText>{helperText}</FormHelperText>;
	// 		}

	// 		const Component = helperText;
	// 		return (
	// 			<Box sx={{ mt: 1 }}>
	// 				<Component />
	// 			</Box>
	// 		);
	// 	}

	// 	return null;
	// }, [helperText]);

	return (

		<FormControl key={name} className={`form-section-${columns}`}>
			{typeof title === 'string' ? <Typography variant="subtitle1" sx={{ fontWeight: '700', mb: 1.5 }}>{title}</Typography>
				: typeof title === 'object' ? title : null}

			<Controller
				key={name}
				name={name}
				control={control}
				defaultValue={defaultValue}
				render={props => <Component {...props} input={input} />}
				rules={rules}
			/>

			{/* <HelperComponent /> */}
		</FormControl>




	);
};

export default InputController;