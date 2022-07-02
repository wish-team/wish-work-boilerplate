import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import type { InputPropTypes } from "../type";
import React from "react";

const CheckboxInput = ({ input, field: { onChange }, fieldState: { error } }: InputPropTypes) => {
    const Label: any = input.label;
    return (
        <FormGroup row sx={{ alignItems: "center" }}>
            <FormControlLabel
                label=""
                sx={{ marginRight: 0 }}
                control={
                    <Checkbox
                        onChange={onChange}
                        sx={{
                            color: error ? "error.main" : "primary.main",
                            "&.Mui-checked": {
                                color: "primary.main",
                            },
                        }}
                    />
                }
            />
            <Label />
        </FormGroup>
    );
};

export default CheckboxInput;
