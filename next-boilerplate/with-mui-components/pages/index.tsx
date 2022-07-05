import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { useAppContext } from '../context/state'
import FormController from '../components/Form/Controller/FormController'
import ModalController from '../components/Modal/Controller'

type Theme = {
  mode: "dark" | "light"
}

const Index = () => {
  const { mode, setTheme } = useAppContext();
  const [open, setOpen] = React.useState(false);


  const openModal = () => {
    console.log('open2:', open)
    setOpen(true)
  }

  const handleSubmit = (data: any) => {
    console.log("submit the form's data", JSON.stringify({ data }))
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
      <ModalController
        title={'test modal'}
        description={'description'}
        open={open}
        setOpen={setOpen}
      />
      <Button variant='outlined' onClick={openModal}>Modal</Button>
      <Button variant="outlined" onClick={themeChanger}>Theme</Button>
    </div>
  )
}


export default Index 