import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            // main: '#232323',
            main: '#000221',
        },
        secondary: {
            // main: '#4f8e3e', 
            // main: '#b32e68', 
            main: '#C5007D', 
        },      
    },
    typography: {   
        fontFamily: [
            // '"Helvetica Neue"',
            // '-apple-system',
            // 'JetBrains Mono',
            '"Segoe UI"',
            // 'Roboto',
            // '"Helvetica Neue"',
            // 'Arial',
            // 'sans-serif',
            // '"Apple Color Emoji"',
            // '"Segoe UI Emoji"',
            // '"Segoe UI Symbol"',
        ].join(','),
    }
});

theme = responsiveFontSizes(theme);

export default theme;