import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import DebitCardItem, { PropTypes as CardPropType } from 'components/Basic/DebitCardItem';
import useFetcher from 'enhancers/hooks/useFetcher';

import type { InputPropTypes } from '../type';

const DebitCardSelector = ({
	input,
	field: { onChange },
	fieldState: { error },
}: InputPropTypes) => {
	const { data } = useFetcher('cards_list');

	return (
		<FormControl sx={{ width: '100%' }}>
			<InputLabel color={error ? 'error' : 'primary'}>{input.label}</InputLabel>
			<Select
				fullWidth
				onChange={onChange}
				error={!!error}
				label={input.label}
				defaultValue=""
				renderValue={(value: CardPropType | '') => value && <DebitCardItem {...value} />}
			>
				{data?.rows?.map((card: CardPropType) => (
					<MenuItem key={card.id} value={card} sx={{ py: 2 }}>
						<DebitCardItem {...card} />
					</MenuItem>
				))}
			</Select>

			{error ? <FormHelperText error>{error.message}</FormHelperText> : null}
		</FormControl>
	);
};

export default DebitCardSelector;
