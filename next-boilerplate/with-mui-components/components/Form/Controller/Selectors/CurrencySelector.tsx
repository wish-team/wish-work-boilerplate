import { useCallback } from 'react';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

import CurrencyItem, { PropTypes as CurrencyPropType } from 'components/Basic/CurrencyItem';
import useFetcher from 'enhancers/hooks/useFetcher';

import type { InputPropTypes } from '../type';

const CurrencySelector = (
	{
		input: {
			apiEndpoint, label, defaultValue, ...restInputProps
		},
		field: { onChange },
		fieldState: { error },
	}
	: InputPropTypes,
) => {
	const { data } = useFetcher(apiEndpoint || 'crypto_list');

	const handleChange = useCallback(e => {
		if (restInputProps.onChange) {
			restInputProps.onChange(e);
		}
		onChange(e);
	}, []);

	return (
		<FormControl sx={{ width: '100%' }}>
			<InputLabel color={error ? 'error' : 'primary'}>{label}</InputLabel>
			<Select
				{...restInputProps}
				fullWidth
				error={!!error}
				onChange={handleChange}
				label={label}
				defaultValue={defaultValue || ''}
				renderValue={(value: CurrencyPropType | '') => value && <CurrencyItem {...value} />}
			>
				{data && data.length && data.map((currency: CurrencyPropType) => (
					<MenuItem key={currency.symbol} value={currency} sx={{ py: 2 }}>
						<CurrencyItem {...currency} />
					</MenuItem>
				))}
			</Select>

			{error ? <FormHelperText error>{error.message}</FormHelperText> : null}
		</FormControl>

	);
};

export default CurrencySelector;
