import { useTranslation } from 'next-i18next';

import MaterialTextField from '@mui/material/TextField';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type { InputPropTypes } from '../type';

const TextInput = (
	{ input, field: { onChange, value }, fieldState: { error } }
		: InputPropTypes,
) => {
	const { t } = useTranslation();
	const { label, ...restInputProps } = input;

	// console.log(error);
	// console.log(input)

	return (
		<Box sx={{
			width: '100%',
			border: 1,
			borderColor: 'border.input',
			borderStyle: 'dashed',
			cursor: 'pointer',
			display: 'flex',
			alignItems: 'center',
		}}
		>
			<Typography sx={{ position: 'absolute', left: 16 }}>
				{value ? value.split(/(\\|\/)/g).pop() : label}
			</Typography>
			<Button sx={{ position: 'absolute', right: 12, backgroundColor: 'info.main' }} startIcon={<AttachFileIcon />}>
				{t('action.choose_file')}
			</Button>



			<MaterialTextField
				fullWidth
				sx={{ opacity: 0 }}
				size="small"
				onChange={onChange}
				helperText={error ? error.message : null}
				error={!!error}
				{...restInputProps}
			/>
		</Box>
	);
};

export default TextInput;
