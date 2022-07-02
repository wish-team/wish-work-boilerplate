import React, { useState } from 'react';
import MaterialTextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import type { InputPropTypes } from '../type';

const PasswordInput = (
	{ input, field: { onChange }, fieldState: { error } }
	: InputPropTypes,
) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event: any) => {
		event.preventDefault();
	};

	return (
		<MaterialTextField
			label={input.label}
			onChange={onChange}
			error={!!error}
			disabled={input.disabled}
			helperText={error ? error.message : null}
			type={showPassword ? 'text' : 'password'}
			variant="outlined"
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge="end"
						>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	);
};

export default PasswordInput;
