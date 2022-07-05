import React, {
	useState, useCallback, useMemo, useEffect, useImperativeHandle, useRef, forwardRef,
} from 'react';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';


// Components
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import InputController from './InputController';
import type { FormControllerProps } from './type';
import { Root, Footer } from './style';

const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), { ssr: false });

// Types

const FormController = ({
	inputs,
	submitLabel,
	onSubmit,
	onChange,
	onSuccess,
	onError,
	recaptchaEnabled = false,
	buttonFullwidth = true,
}: FormControllerProps, ref: any) => {
	const { t } = useTranslation();
	const {
		handleSubmit, control, getValues, watch, setValue, trigger,

	} = useForm();
	const recaptchaRef = useRef();
	// if (!ref) ref = useRef();
	const [loading, setLoading] = useState(false);

	const submitForm = useCallback(async (data: any) => {
		let recaptcha = null;
		if (recaptchaEnabled) {
			// recaptcha = await recaptchaRef?.current?.executeAsync();
		}

		setLoading(true);

		try {
			if (onSubmit) {
				await onSubmit(data);
				setLoading(false);
			}
			else {
				setTimeout(() => {
					if (onSuccess) {
						onSuccess();
					}

					setLoading(false);
				}, 3000);
			}
		}
		catch (err) {
			if (onError) {
				onError();
			}

			setLoading(false);
			return err;
		}
	}, [ref, onSubmit, onSuccess, onError]);

	// console.log(loading);

	useEffect(() => {
		if (onChange) {
			const subscription = watch(value => {
				onChange(value);
			});
			return () => subscription.unsubscribe();
		}
	}, [watch, onChange]);

	const rules = useMemo(() => ({
		password: {
			pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/g, message: t('form.error.password_is_not_valid') },
		},
		mobile: {
			pattern: { value: /^[0]*[9][0-9][0-9][0-9]{7}$/g, message: t('form.error.field_is_not_valid', { field: t('form.mobile') }) },
		},
		nationalCode: {
			pattern: { value: /^[0-9]{10}$/g, message: t('form.error.field_is_not_valid', { field: t('form.national_code') }) },
		},
		email: {
			pattern: { value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g, message: t('form.error.email_is_not_valid', { field: t('form.email') }) },
		},
		confirmPassword: {
			validate: v => {
				const { password } = getValues();
				return password === v || t('form.error.passwords_mismatch');
			},
		},
		confirmEmail: {
			validate: v => {
				const { email } = getValues();
				return email === v || t('Your email address is incorrect')
			}
		}
	}), [getValues, t]);

	useImperativeHandle(ref, () => ({
		submit: handleSubmit(submitForm),
		triggerValidation: trigger,
		getValues,
		setValue,
	}), [handleSubmit, submitForm, getValues, setValue, trigger]);

	return (
		<Root onSubmit={handleSubmit(submitForm)}>
			{inputs.map(input => {
				// Render custom component
				const Component = input.render;
				if (Component) {
					return (
						<div key={input.name} className="form-section">
							<Component />
						</div>
					);
				}

				if (input.visible) {
					inputs.forEach(element => {
						if (input.visible[element.name] !== getValues()[element.name]) {
							return false;
						}
					});
				}

				return (

					<InputController
						key={input.name}
						control={control}
						columns={input.columns}
						input={{
							onComplete: input.type === 'code' ? handleSubmit(submitForm) : undefined, // for code input
							...input,
							label: input.optional && input.label ? `${input.label} (${t('form.optional')})` : input.label,
							title: typeof input.title === 'string' && input.optional ? `${input.title} (${t('form.optional')})` : input.title,
							rules: {
								...input.rules,
								...rules[input.name],
								required: input.rules?.required
									? { value: true, message: t('form.error.field_is_required', { field: input.label || input.placeholder || input.title }) }
									: null,
							},
						}}
					/>



				);


			})}


			{submitLabel ? (
				<Footer fullWidth={buttonFullwidth}>
					<Button
						className="submitButton"
						type="submit"
						fullWidth={buttonFullwidth}
						variant="contained"
						color="primary"
						size="large"
						isLoading={loading}
					>
						{submitLabel}
					</Button>
				</Footer>
			) : null}
		</Root>
	);
};

export default forwardRef(FormController);