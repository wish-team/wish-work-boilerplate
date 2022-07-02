import React from 'react'
import { Button } from '@mui/material'
import { useAppContext } from '../context/state'
import FormController from '../components/Form/Controller/FormController'
type Theme = {
  mode: "dark" | "light"
}

const Index = () => {
  const { mode, setTheme } = useAppContext();

  const handleSubmit = () => {
    console.log('submit the form')
  }
  const themeChanger = () => {
    setTheme(mode === 'dark' ? 'light' : 'dark')
  }
  return (
    <div>
      <h1>Wish Work Next JS Boilerplate</h1>

      <FormController
        submitLabel={"submit"}
        onSubmit={handleSubmit}
        inputs={[
          {
            name: "What was he interested at?",
            label: "What was he interested at?",
            type: "text",
            multiline: true,
            rows: 3,
            columns: 12,
            helperText: "help text",
            rules: {
              required: true
            },
          },
          {
            name: "What does he expert at?",
            label: "What does he expert at?",
            type: "text",
            multiline: true,
            rows: 3,
            columns: 12,
            helperText: "help text 2",
            rules: {
              required: true
            },
          },
          {
            name: "What was his opinion about team work?",
            label: "What was his opinion about team work?",
            type: "text",
            multiline: true,
            rows: 3,
            columns: 12,
            helperText: "help text 3",
            rules: {
              required: true
            },
          },
        ]}
      />
      <Button variant="outlined" onClick={themeChanger}>Theme</Button>
    </div>
  )
}


export default Index 