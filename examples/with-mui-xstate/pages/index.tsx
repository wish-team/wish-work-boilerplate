import React from 'react'
import { Button } from '@mui/material'
import { useAppContext } from '../context/state'
type Theme = {
  mode: "dark" | "light"
}

const Index = () => {
  const { mode, setTheme } = useAppContext();

  const themeChanger = () => {
    setTheme(mode === 'dark' ? 'light' : 'dark')
  }
  return (
    <div>
      <h1>Hello World!</h1>
      <Button variant="contained">Submit</Button>
      <Button variant="outlined" onClick={themeChanger}>Theme</Button>
    </div>
  )
}




// Index.contextType = 

export default Index 