import React from "react";
// import useFetcher from "enhancers/hooks/useFetcher";
import Pagination from "./Components/Pagination";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import type { DataTableControllerType } from './type';

import DesktopTable from "./DesktopTable";
import MobileTable from "./MobileTable";

// styles
import { Root, Head, Foot } from "./style";

/* DataTable Component ================================== */
const DataTableController = ({
	header,
	metadata,
	apiEndpoint,
	apiParams,
	data,
	loading,
	error,
	onChangePage,
	...restProps
}: DataTableControllerType) => {
	const Header = header;

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));


	// this line is for when we had a API
	// const { data, loading, error } = useFetcher(apiEndpoint, apiParams);

	return (
		<Root>
			<Head>
				{Header ? <Header /> : null}
			</Head>

			{isMobile ?
				<MobileTable data={data} loading={loading} {...restProps} />
				: <DesktopTable data={data} loading={loading} {...restProps} />
			}

			{metadata?.count ? (
				<Foot>
					<Pagination {...metadata} onChange={onChangePage} disabled={loading} />
				</Foot>
			) : null}
		</Root>
	);
};

export default DataTableController;
