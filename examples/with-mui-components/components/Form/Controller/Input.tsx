import React from 'react'
import TextField from '@mui/material/TextField';
// import type { InputType } from './type';

const Input = ({ name, label, value, onChange }: any) => {

    (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            error
            helperText="some validation error"
        />
    )
}