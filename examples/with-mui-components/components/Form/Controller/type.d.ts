import React from 'react';
import type { UseControllerReturn, Control } from 'react-hook-form/dist/types';

export type OptionType = {
	value: string,
	label: string,
}
interface InputType {
	name?: string;
	type?: 'text' | 'email' | 'mobile' | 'file' | 'password' | 'code' | 'number' | 'radio' | 'checkbox' | 'select' | 'slider' | 'debitCardSelector' | 'currencySelector',
	defaultValue?: any,
	label?: string | React.ReactNode | Function;
	options?: Record<OptionType>,
	rules?: object;
	title?: string | React.ReactNode;
	optional?: boolean; // explicity tell the component to show optional label
	disabled?: boolean;
	mask?: String;
	maskDefinitions?: object;
	onComplete?: Function,
	onChange?: Function,
	multiline?: boolean,
	rows?: number,
	columns?: 12 | 6 | 3,
	placeholder?: string,
	currency?: string,
	helperText?: string | JSX.Element | (() => JSX.Element),
	render?: Function,
	visible?: object,
	apiEndpoint?: string,
	
	button?: {
		onClick: () => void,
		label: string,
	}
}

export type InputControllerPropTypes = {
	control: Control,
	input: InputType,
	columns?: number,
}

export interface InputPropTypes extends UseControllerReturn {
	input: InputType,
}

export type FormControllerProps = {
	inputs: InputType[],
	submitLabel?: String,
	onSubmit?: Function,
	onSuccess?: Function,
	onError?: Function,
	onChange?: Function,
	recaptchaEnabled?: boolean,
	buttonFullwidth?: boolean,
	columns?: number,
};
