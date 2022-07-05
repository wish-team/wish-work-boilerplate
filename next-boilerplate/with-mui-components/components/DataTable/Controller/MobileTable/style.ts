import styled from "@emotion/styled";
import Box from '@mui/material/Box';

export const Root = styled(Box)`
	border: 1px solid ${p => p.theme.palette.border.default};

	.cell-action {
		> div:first-child {
			min-width: 100px;
			display: none;
		}
		> div:last-child {
			width: 100%;
			flex: 1;
			display: flex;
			justify-content: flex-end;

			> button {
				flex: 1;
			}
		}
	}
`;
