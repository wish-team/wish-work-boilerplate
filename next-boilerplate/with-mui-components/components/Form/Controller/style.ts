import styled from '@emotion/styled';

export const Root = styled.form`
	display: block;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.form-style{
		columns: 2 auto;
	}
	.form-section-3 {
		width: 33%;
		margin: ${p => p.theme.spacing(2)};
		margin-top: 0;
	}

	.form-section-6 {
		width: 50%;
		padding: ${p => p.theme.spacing(2)};
		margin-top: 0;
	}

	.form-section-12 {
		width: 100%;
		padding: ${p => p.theme.spacing(2)};
		margin-top: 0;
	}

	.input-end-button {
		/* position: absolute;
		right: 0;
		top: 0;
		bottom: 0; */
	}
	.input-start-button {
		/* position: absolute;
		left: 0;
		top: 0;
		bottom: 0; */
	}

	
`;

export const Footer = styled.div<{ fullWidth: boolean }>`
	margin: ${p => p.theme.spacing(1)} 0;
	display: flex;
	width: 33%;
	float: right;
	justify-content: flex-end;
	padding:0 ${p => p.theme.spacing(2)};

	${p => p.fullWidth && `
		.submitButton {
			height: 44px;
				
		}
	`}
`;
