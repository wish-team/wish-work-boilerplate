import { fontWeight } from '@mui/system'

/* 
  TypeError
  changed fontFamily from an array of string ['Ridley'] to a string 'Ridley'
  to comply with MUI types for typography
*/

const typography = {
  h1: {
    fontWeight: 'bold',
    fontSize: '104px',
    fontFamily: 'Ridley',
    letterSpacing: '1rem',
  },

  h2: {
    fontWeight: 'bold',
    fontSize: '60px',
    fontFamily: "'Rotunda', 'Peyda'",
  },

  h3: {
    fontWeight: 'bold',
    fontSize: '24px',
    fontFamily: 'Rotunda',
  },

  h4: {
    fontWeight: 'bold',
    fontSize: '18px',
    fontFamily: 'Rotunda',
  },

  subtitle1: {
    fontSize: '24px',
    fontWeight: '300',
    fontFamily: 'Rotunda',
    lineHeight: '30px',
  },

  subtitle2: {
    fontWeight: '300',
    fontSize: '18px',
    fontFamily: 'Rotunda',
  },

  title: {
    fontWeight: 'bold',
    fontSize: '16px',
    fontFamily: 'Ridley',
  },

  paragraph: {
    fontWeight: '300',
    fontSize: '16px',
    fontFamily: 'Rotunda',
  },

  caption: {
    fontWeight: '300',
    fontSize: '14px',
    fontFamily: 'Rotunda',
  },

  link: {
    fontWeight: '800',
    fontSize: '14px',
    fontFamily: 'Rotunda',
  },
}

export default typography
