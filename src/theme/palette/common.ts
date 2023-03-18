import type { PaletteOptions } from '@mui/material'
import { red, yellow, green } from '@mui/material/colors'

const common: PaletteOptions = {
  primary: {
    main: '#D1036F',
    contrastText: 'white',
  },
  secondary: {
    main: '#0070F3',
    contrastText: 'white',
  },
  error: {
    main: '#f46a6a',
    contrastText: 'white',
    dark: red[900],
    light: red[400],
  },
  warning: {
    main: '#f1b44c',
    contrastText: 'white',
    dark: yellow[900],
    light: yellow[400],
  },
  success: {
    main: '#34c38f',
    contrastText: 'white',
    dark: green[900],
    light: green[400],
  },
  info: {
    main: '#0070F3',
    contrastText: 'white',
    dark: green[900],
    light: green[400],
  },
}

export default common
