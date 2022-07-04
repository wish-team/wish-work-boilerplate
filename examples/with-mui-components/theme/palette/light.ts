import { colors } from '@mui/material';
import common from './common';

const light = {
	text: {
		primary: '#373737',
		secondary: '#373737',
		default: '#fff',
		alternate: '#515151',
        hint:"#0070F3",
		link: common.secondary,
	},
	background: {
		default: '#fff',
		footer:'#F8F8F8',
		paper: '#fff',
		toolbar: '#ffffff',
		alternate: '#FAFAFA',
		alternate_2:'#f1f1f1',
		tableHeader: 'rgb(241, 243, 246)',
		main:"linear-gradient(to bottom, #F6F6F6,#FFFBF9,#f1f1f1)",
		classic:'#000'
	},
	border: {
		default: '#E3E3E3',
		secondary: '#D1D1D1'
	},
	
	shadow:{
		default:'rgba(20,20,20)'
	}
};

export default light;