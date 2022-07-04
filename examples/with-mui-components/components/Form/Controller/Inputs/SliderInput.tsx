import MaterialSlider from '@mui/material/Slider';
import type { InputPropTypes } from '../type';

const SliderInput = (
	{ input, field: { onChange }, fieldState: { error } }
	: InputPropTypes,
) => (
	<div dir="ltr">
		<MaterialSlider
			onChange={onChange}
			helperText={error ? error.message : null}
			error={!!error}
			{...input}
		/>
	</div>
);

export default SliderInput;
