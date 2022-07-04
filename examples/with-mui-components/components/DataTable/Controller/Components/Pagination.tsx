import React from 'react';
import MaterialPagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

export type PropTypes = {
	count: number,
	limit: number,
	offset: number,
	onChange: () => void,
	disabled: boolean,
}

/* Pagination Component ================================== */
const Pagination = ({
	count,
	limit,
	offset,
	onChange,
	disabled,
	...restProps
}: PropTypes) => {
	const totalPages = Math.ceil(count / limit);

	return (
		<MaterialPagination
			{...restProps}
			count={totalPages}
			color="primary"
			page={offset}
			renderItem={p => <PaginationItem {...p} page={p.page} />}
			disabled={disabled}
			onChange={onChange}
		/>
	);
};

export default Pagination;
