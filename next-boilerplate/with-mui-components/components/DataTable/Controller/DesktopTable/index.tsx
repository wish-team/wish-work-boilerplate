import React from "react";
import ReactDataTable from "react-data-table-component";
import { useTranslation } from "next-i18next";

import type { TableType } from '../type';

import EmptyState from "../Components/EmptyState";
import Loading from "../Components/Loading";


const DesktopTable = ({
	loading,
	columns = [],
	data = { rows: [] },
	...restProps
}: TableType) => {
	const { t } = useTranslation();

	return (
		<ReactDataTable
			columns={columns}
			data={data ? data.rows : []}
			persistTableHead
			noDataComponent={loading ? <span /> : <EmptyState label={t('feedback.no_data')} />}
			progressComponent={<Loading />}
			progressPending={loading}
			noHeader
			pagination={false}
			noContextMenu={false}
			striped

			{...restProps}
		/>
	);
};

export default DesktopTable;
