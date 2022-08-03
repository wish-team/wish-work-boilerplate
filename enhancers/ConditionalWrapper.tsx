import { Theme, ThemeProvider } from '@mui/material/styles'
import React, { useEffect, useState } from 'react'

type Props = {
  children: React.ReactElement
  themeObject: Theme
}

type MUIProps = {
  children: React.ReactElement
  themeObject: Theme
}

const MUIWrapper = (c: MUIProps) => (
  <ThemeProvider theme={c.themeObject}>{c.children}</ThemeProvider>
)

/**
 * Purpose of this wrapper is to ensure MUI gets the right theme
 * from redux store which is persisted in local storage
 * if not for this wrapper, page renders with the default MUI theme
 */
const ConditionalWrapper = ({ children, themeObject }: Props) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  return show ? MUIWrapper({ children, themeObject }) : children
}

export default ConditionalWrapper
