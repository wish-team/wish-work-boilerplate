import React from 'react';
import { Button } from '@mui/material';
import { useAppContext } from '../context/state';

type Theme = {
  mode: "dark" | "light"
}

const Index = () => {
  const { mode, setTheme } = useAppContext();

  const SignUp = () => {

  }

  const themeChanger = () => {
    setTheme(mode === 'dark' ? 'light' : 'dark')
  }
  return (
    <div>
      <h1>Next JS Auth with MUI Boilerplate</h1>
      <Button variant="contained" onClick={SignUp}>Sign Up</Button>
      <Button variant="outlined" onClick={themeChanger}>Theme</Button>
    </div>
  )
}


// Index.contextType = 

export default Index 