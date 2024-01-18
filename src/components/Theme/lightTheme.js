import {createTheme} from "@mui/material";

const theme = createTheme({})

const lightTheme = createTheme(theme, {
    palette: {
        primary: theme.palette.augmentColor({
            color: {
                main: "#212121",
            },
            name: "primary"
        }),
        secondary: theme.palette.augmentColor({
            color: {
                main: "#2332a6",
            },
            name: "primary"
        })
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "10px"
                }
            }
        },
    },
    typography: {
        fontFamily: 'Urbanist, Arial',
        h1: {
            lineHeight: "5.5rem"
        }
    }
});

export default lightTheme;