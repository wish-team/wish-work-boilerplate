import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import type { InputPropTypes } from '../type';

const RadioInput = (
	{ input, field: { onChange } }
	: InputPropTypes,
) => (
	<RadioGroup row onChange={onChange} defaultValue={input.defaultValue}>
		{input.options?.map((opt: any) => (
			<FormControlLabel key={opt.value} value={opt.value} control={<Radio disabled={opt.disabled} color="warning" />} label={opt.label} />
		))}
	</RadioGroup>
);

export default RadioInput;
