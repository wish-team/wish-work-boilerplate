import type { Theme as MaterialTheme } from '@mui/material/styles'
import type React from 'react'

export type Direction = 'ltr' | 'rtl'
export type ThemeMode = 'light' | 'dark'

export type ThemeObject = {
  fontFamily?: React.CSSProperties['fontFamily']
  direction: Direction
  mode: ThemeMode
  responsiveFont?: boolean
}

declare module '@mui/material/styles' {
  // adding typography variants
  interface TypographyVariants {
    title: React.CSSProperties
    paragraph: React.CSSProperties
    link: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    title?: React.CSSProperties
    paragraph?: React.CSSProperties
    link?: React.CSSProperties
  }

  // adding colors
  interface Palette {
    border?: {
      default: string
    }
  }

  interface PaletteOptions {
    border?: {
      default: string
    }
  }
}

declare module '@emotion/react' {
  export interface Theme extends MaterialTheme {}
}

declare module '@mui/material/Typography' {
  // updating the Typography's variant options
  interface TypographyPropsVariantOverrides {
    title: true
    paragraph: true
    link: true
  }
}
