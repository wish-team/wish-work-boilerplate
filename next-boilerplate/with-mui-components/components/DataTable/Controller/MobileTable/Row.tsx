import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Root } from './style';


const Row = ({ columns, data, rowIndex }) => {

	// console.log('RowItem', data);

	return (
		<Root sx={{ mb: { xs: 2, sm: 3 } }}>
			{columns.map((c, i) => {
				const Cell = c.cell ? c.cell : null;

				return (
					<Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', py: { xs: 2, sm: 3 }, px: { xs: 2, sm: 3 } }} className={`cell-${c.selector}`}>
						<Box sx={{ minWidth: 150 }}>
							<Typography color="text.hint">{c.name}</Typography>
						</Box>

						<Box>
							{c.cell ? c.cell(data, rowIndex, c) : data[c.selector]}
						</Box>
					</Box>
				)
			})}
		</Root>
	);
};

export default Row;
