import {createTheme,ThemeOptions} from '@mui/material'

export const customTheme:ThemeOptions = createTheme({
    palette:{
        mode: 'dark',
        primary:{
            main: '#1976d2',
            light: '#42a5f5',
            dark: '#1565c0',
            contrastText: '#fff'  
        },
        background : {
            paper: '#fff',
            default: '#fff'  
        },


    }
}) 