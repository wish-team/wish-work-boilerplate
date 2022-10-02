import type { PaletteOptions } from '@mui/material'
import { colors } from '@mui/material'

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
    dark: colors.red[900],
    light: colors.red[400],
  },
  warning: {
    main: '#f1b44c',
    contrastText: 'white',
    dark: colors.yellow[900],
    light: colors.yellow[400],
  },
  success: {
    main: '#34c38f',
    contrastText: 'white',
    dark: colors.green[900],
    light: colors.green[400],
  },
  info: {
    main: '#0070F3',
    contrastText: 'white',
    dark: colors.green[900],
    light: colors.green[400],
  },
}

export default common
