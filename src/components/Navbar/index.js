import { Box, Button, useTheme } from '@mui/material';
import React from 'react'
import { themeModeContext } from '../../themeMode'
import { styles } from './style';
import IconButton from '@mui/material/IconButton';
import ResponsiveAppBar from './ResponsiveAppBar';
import { ArrowBack, DarkMode, Lightbulb, LightMode } from '@mui/icons-material';

export const Navbar = () => {
    const theme = useTheme()
    const colorMode = React.useContext(themeModeContext);

    return (
        <ResponsiveAppBar>
            <IconButton onClick={colorMode.toggleColorMode} sx={{ color:"#000000"}}> {theme.palette.mode === 'dark' ? <LightMode/> : <DarkMode />} </IconButton>
        </ResponsiveAppBar>
    )
}

