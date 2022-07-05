import React from 'react';
import { SWRConfig } from 'swr';

import Api from './Api';
import { configs } from './configs/api';

type Props = {
	children: React.ReactElement
};

const ApiProvider = ({ children }: Props) => (
	<SWRConfig
		value={{
			fetcher: Api,
			...configs.swrConfig,
		}}
	>
		{children}
	</SWRConfig>
);

export default ApiProvider;
