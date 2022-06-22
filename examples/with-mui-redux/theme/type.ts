import React from 'react'
import { Theme as MaterialTheme } from '@mui/material/styles'

export type BorderRadius = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Direction = 'ltr' | 'rtl'
export type ThemeMode = 'light' | 'dark'

/*
  made siderWidth optional since it was missing in the shape.ts
*/

export type ThemeObject = {
  fontFamily?: React.CSSProperties['fontFamily']
  direction: Direction
  mode: ThemeMode
  responsiveFont?: boolean
}

declare module '@mui/material/styles' {
  export interface Theme {
    shape: {
      borderRadius: Record<BorderRadius, number>
      headerHeight: number
      siderWidth?: number
    }
  }

  // allow configuration using `createTheme`
  export interface ThemeOptions {
    shape: {
      borderRadius: Record<BorderRadius, number>
      headerHeight: number
      siderWidth?: number
    }
  }
}

declare module '@emotion/react' {
  export interface Theme extends MaterialTheme {}
}
