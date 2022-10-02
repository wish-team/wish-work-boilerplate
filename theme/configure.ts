import { createTheme } from '@mui/material/styles'
import common from './palette/common'
import dark from './palette/dark'
import light from './palette/light'
import type { Direction, ThemeMode } from './type'
import typography from './typography'

interface ConfigThemeProps {
  direction: Direction
  mode: ThemeMode
  fontFamily: string[]
}

const configTheme = ({ direction, mode, fontFamily }: ConfigThemeProps) => {
  const theme = createTheme({
    direction,
    palette: {
      ...common,
      ...(mode === 'light' ? light : dark),
      mode,
    },
    typography: {
      ...typography,
      fontFamily: fontFamily.join(', '),
    },
  })

  return theme
}

export default configTheme
