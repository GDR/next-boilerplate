import React from "react";
import {ThemeProvider} from "react-jss";

export const withTheme = (Component) => (
    class WithTheme extends React.Component {
        render() {
            return (
                <ThemeProvider theme={null}>
                    <Component/>
                </ThemeProvider>
            )
        }
    }
);