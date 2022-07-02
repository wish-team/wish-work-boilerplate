import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import type { InputPropTypes, OptionType } from '../type';

const SelectInput = (
	{ input, field: { onChange }, fieldState: { error } }
	: InputPropTypes,
) => (
	<FormControl sx={{ width: '100%' }}>
		<InputLabel color={error ? 'error' : 'primary'}>{input.label}</InputLabel>
		<Select
			fullWidth
			onChange={onChange}
			error={!!error}
			label={input.label}
			defaultValue={typeof input.defaultValue !== undefined ? input.defaultValue : input.options ? input.options[0].value : undefined}
		>
			{input?.options?.map((option: OptionType) => (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			))}
		</Select>

		{error ? <FormHelperText error>{error.message}</FormHelperText> : null}
	</FormControl>

);

export default SelectInput;
