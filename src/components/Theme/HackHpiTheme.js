'use client'
import {createTheme, responsiveFontSizes} from "@mui/material";

const theme = createTheme({})

const textColor = [245, 245, 245]

const hackHpiTheme = responsiveFontSizes(createTheme(theme, {
    palette: {
        mode: "dark",
        primary: theme.palette.augmentColor({
            color: {
                main: "#3A0CA3",
            },
            name: "primary"
        }),
        secondary: theme.palette.augmentColor({
            color: {
                main: "#B1063A",
            },
            name: "primary"
        }),
        success: theme.palette.augmentColor({
            color: {
                main: "#66bb6a",
            },
            name: "success"
        }),
        text: {
            primary: `rgba(${textColor[0]},${textColor[1]},${textColor[2]}, 1)`,
            secondary: `rgba(${textColor[0]},${textColor[1]},${textColor[2]}, .7)`,
            disabled: `rgba(${textColor[0]},${textColor[1]},${textColor[2]}, .5)`,
            icon: `rgba(${textColor[0]},${textColor[1]},${textColor[2]}, .5)`
        },
        divider: `rgba(${textColor[0]},${textColor[1]},${textColor[2]}, .12)`,
        background: {
            default: "#13101B",
            paper: "#13101B",
        },
        action: {
            active: "#fff",
            hover: "rgba(255,255,255,0.08)",
            hoverOpacity: .08,
            selected: "rgba(255,255,255,0.16)",
            selectedOpacity: .16,
            disabled: "rgba(255,255,255,0.3)",
            disabledBackground: "rgba(255,255,255,0.12)",
            disabledOpacity: .38,
            focus: "rgba(255,255,255,0.12)",
            focusOpacity: .12,
            activatedOpacity: .24
        }
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "10px"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "10px"
                }
            }
        },

    },
    typography: {

        fontFamily: 'Neo Sans, Urbanist, Arial',
        h1: {
            fontFamily: 'Neo Sans, Urbanist, Arial',
            fontWeight: "bold",
            //lineHeight: "5.5rem",
            //fontSize: "7rem"
        },
        h2: {
            fontFamily: 'Neo Sans, Urbanist, Arial',
            fontWeight: "bold",
        },
        h3:{
            fontFamily: 'Neo Sans, Urbanist, Arial',
        },
        h4:{
            fontFamily: 'Neo Sans, Urbanist, Arial',
        },
        h5:{
            fontFamily: 'Neo Sans, Urbanist, Arial',
        },
        body1: {
            fontFamily: '"Open Sans Variable", Urbanist, Arial',
        }
    }
}));

export default hackHpiTheme;