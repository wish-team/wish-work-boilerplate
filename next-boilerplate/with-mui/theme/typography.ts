import { fontFamily, fontWeight } from "@mui/system";
// import 

const typography = {

	h1: {
		fontWeight: 'bold', fontSize: '7.5rem',fontFamily: ['Ridley'],
		letterSpacing:'1rem', 
		'@media (max-width:900px)': {
			fontSize: '4.8rem',
			letterSpacing:'0.5rem',
		  },
	},

	h2: {
		fontWeight: 'bold', fontSize: '5rem',fontFamily: ['Ridley'],
		'@media (max-width:700px)': {
			fontSize: '2.8rem',
		  },
	},

	h3: {
		fontWeight: 'bold', fontSize: '3.75rem',fontFamily: ['Rotunda'],
		'@media (max-width:700px)': {
			fontSize: '2.4rem',
			lineheight:'3rem'
		  },
	},

	h4: {
		fontWeight: 'bold', fontSize: '1.5rem',fontFamily: ['Rotunda'],
	},
	h5:{
		fontWeight: 'bold', fontSize: '1.125rem', fontFamily: ['Rotunda'],
	},

	h6:{
		fontWeight: 'bold', fontSize: '1rem',fontFamily: ['Ridley'],
		
	},

	subtitle1: {
	 fontSize: '1.5rem',fontWeight:'300',fontFamily:['Rotunda'],
	 lineHeight:'30px',
	},

	subtitle2: {
		fontWeight: '300', fontSize: '1.125rem',fontFamily:['Rotunda'],lineHeight:'24px',	
	},


	paragraph: {
		fontWeight: '300', fontSize: '1rem', fontFamily:['Rotunda'],
	}, 

	caption: {
		fontWeight: '300', fontSize: '0.875rem',	fontFamily:['Rotunda'],
	},

	link:{
		fontWeight: '800', fontSize: '0.875rem',	fontFamily:['Rotunda'],
	},

	body1:{
		fontWeight: '200', fontSize: '1rem', fontFamily:['Ridley'],lineHeight:'44px'
	},


	body2:{
		fontWeight: '600', fontSize: '2.625rem', fontFamily:['Ridley'],lineHeight:'44px',
		'@media (max-width:700px)': {
			fontSize: '2rem',
			
		  },
	},

	overline:{fontWeight: '200', fontSize: '2.5rem', fontFamily:['Ridley'],lineHeight:'44px' }

};

export default typography;



