import { colors } from '@mui/material';
import common from './common';

const dark = {
	text: {
		primary: '#FFFFFF',
		secondary: '#8A8F98',
		default:'#03010A',
		alternate: '#A8A8A8',
        hint:"#d1036f",
		note:"#0070F3",
		link: common.secondary,
	},
	background: {
		default: '#03010A',
		footer:'#03010A',
		paper: '#080A11',
		toolbar: '#20232a',
		tableHeader: '#20232a',
		alternate:'#0D1014',
		alternate_2:'#0C0A10',
		main:"linear-gradient(to bottom, #04020B,#150F1D ,#06030C)",
		classic:'#fff'
	},
	border: {
		default: '#0D1014',
		secondary:'#2E2E2F'
	},
	shadow:{
		default:'0px 1px 8px 0px rgba(20,20,20,1)'
	}
};

export default dark;