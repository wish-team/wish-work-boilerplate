import styled from "@emotion/styled";

export const Root = styled.div`
	position: relative;
	/* max-width: 320px; */

	/* ${(p) => p.theme.breakpoints.up("md")} {
        position: fixed;
        right: unset !important;
        transform: none !important;
    } */

	& .rdt_Table {
		background: ${(p: any) => p.theme.palette.background.table_body};
	}

    & .rdt_TableHeadRow {
        background: ${(p: any) => p.theme.palette.background.table_head};
        color: ${(p: any) => p.theme.palette.text.hint};
        font-size: 14px;
        border: 0;
        min-height: 45px;
    }

    & .rdt_TableRow {
        background: transparent;
        min-height: 60px;
		color: ${(p: any) => p.theme.palette.text.hint};

        button {
            padding-bottom: 2px;
        }
    }
`;

export const EmptyRoot = styled.div`
	flex-direction: column;
	padding: 50px 0 40px;
	text-align: center;
	width: 100%;
	background: ${(p: any) => p.theme.palette.background.table_body};
	color: ${(p: any) => p.theme.palette.text.hint};

	& .empty-img-1 {
		fill: ${(p) => (p.theme.palette.mode === "light" ? "#aeb8c2" : "#262626")};
	};
	& .empty-img-2 {
		fill: ${(p) => (p.theme.palette.mode === "light" ? "#f5f5f7" : "#595959")};
	};
	& .empty-img-3 {
		fill: ${(p) => (p.theme.palette.mode === "light" ? "#dce0e6" : "#434343")};
	};
	& .empty-img-4 {
		fill: ${(p) => (p.theme.palette.mode === "light" ? "#fff" : "#1c1c1c")};
	};
	& .empty-img-5 {
		fill-opacity: ${(p) => (p.theme.palette.mode === "light" ? "0.8" : "0.08")};
		fill: ${(p) => (p.theme.palette.mode === "light" ? "#f5f5f5" : "#fff")};
	};

	.label: {
		margin-top: ${(p) => p.theme.spacing(1)};
	},
`;

export const LoaderRoot = styled.div`
    opacity: 0.8;
	padding: 30px 0;
	width: 100%;
	min-height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${(p: any) => p.theme.palette.background.table_body};
	color: ${(p: any) => p.theme.palette.text.hint};
`;


export const Head = styled.div`
	${(p) => p.theme.breakpoints.down("md")} {
		.action-bar {
			padding: 20px ${p => p.theme.spacing(3)};
			display: flex;
			background: ${p => p.theme.palette.background.paper};
			z-index: 10;
			border-top: 1px solid ${p => p.theme.palette.border.default};
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;

			> * {
				flex: 1;
			}
		}
	}

	${(p) => p.theme.breakpoints.down("sm")} {
		.action-bar {
			padding: 20px ${p => p.theme.spacing(2)};
		}
	}
`;

export const Foot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20;
    border-top: 1px solid ${(p) => p.theme.palette.divider};
    /* 
	'& > div': {
			alignItems: 'center',
			display: 'flex',
		},
		'& .MuiOutlinedInput-input': {
			paddingTop: 13,
			paddingBottom: 8,
		}, */
`;
