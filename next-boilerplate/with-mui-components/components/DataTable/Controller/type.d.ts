import React from 'react';

import { PropTypes as PaginationProps } from "./Components/Pagination";

export type DataTableControllerType = {
	header: React.ReactElement;
	metadata?: PaginationProps;
	apiEndpoint: string;
	data?: Array;
	loading?: Array;
	error?: Array;
	apiParams?: Object;
	apiFilter: Object;
	onChangePage: () => void;
}

export type TableType = {
	loading: boolean,
	columns: [],
	data: {
		rows: []
	},
}
