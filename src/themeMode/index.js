import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { createContext } from 'react';
import palette from "./palette";
import typography from "./typography";

export const themeModeContext = createContext({ toggleColorMode: () => { } });

const ThemeMode = (props) => {

    const [mode, setMode] = React.useState('dark');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    ...palette
                },
                typography,
                breakpoints: {
                    values: {
                        xs: 0,
                        xsx: 320,
                        sm: 480,
                        md: 768,
                        lg: 889,
                        xl: 1200,
                        xxl: 1300
                    },
                },
            }),
        [mode],
    );

    console.log(props)
    return (
        <themeModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </themeModeContext.Provider>
    );
}

export default ThemeMode;