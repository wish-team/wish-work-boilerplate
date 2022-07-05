import { useTheme } from "@mui/material";
import React, { memo } from "react";

import { Spinner, Dots } from "./style";

type PropTypes = {
    color?: string;
    size?: number;
    strokeWidth?: number;
    type?: "spin" | "bar" | "dots";
};

const LoadingIndicator = ({
    color = "text.primary",
    size = 8,
    strokeWidth = 1,
    type = "dots",
}: PropTypes) => {
    const theme = useTheme();

    const c = color.split(".");
    const mainColor = theme.palette[c[0]];
    const finalColor = c[1] ? mainColor[c[1]] : mainColor.primary || mainColor.main;

    if (type === "spin") {
        return (
            <Spinner color={finalColor} size={size} className="loader">
                <svg width="100%" height="100%">
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={size / 2 - strokeWidth}
                        fill="none"
                        strokeWidth={strokeWidth}
                    />
                </svg>
            </Spinner>
        );
    }

    return (
        <Dots color={finalColor} size={size} className="loader">
            <div />
            <div />
            <div />
        </Dots>
    );
};

export default memo(LoadingIndicator);
