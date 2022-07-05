import React from "react";
import { useTranslation } from "next-i18next";

import EmptyState from "../Components/EmptyState";
import Loading from "../Components/Loading";
import Row from "./Row";

import type { TableType } from '../type';


const MobileTable = ({
	loading,
	columns = [],
	data = { rows: [] },
	...restProps
}: TableType) => {
	console.log(loading, columns, data);
	return (
		<div>
			{data?.rows?.map((r, i) => (
				<Row key={r.name} columns={columns} data={r} rowIndex={i} />
			))}
		</div>
	);
};

export default MobileTable;
