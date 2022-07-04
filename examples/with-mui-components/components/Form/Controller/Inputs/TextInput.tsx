import MaterialTextField from '@mui/material/TextField';

import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import type { InputPropTypes } from '../type';

const TextInput = (
	{ input: { button, ...restInputProps }, field: { onChange, value }, fieldState: { error } }
		: InputPropTypes,
) => (
	<Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
		<MaterialTextField
			onChange={onChange}
			size="small"
			helperText={error ? error.message : null}
			error={!!error}
			{...restInputProps}
			sx={{ flex: 1 }}
			value={value}
		/>
		{button ? (
			<Button className="input-end-button" sx={{ ml: 1, height: 56 }} {...button}>
				{button.label}
			</Button>
		) : null}
	</Box>
);

export default TextInput;
