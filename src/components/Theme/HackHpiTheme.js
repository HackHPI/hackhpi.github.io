import {createTheme} from "@mui/material";

const theme = createTheme({})

const textColor = [245, 245, 245]

const hackHpiTheme = createTheme(theme, {
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
                main: "#4CC9F0",
            },
            name: "primary"
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
        }
    },
    typography: {
        fontFamily: 'Urbanist, Arial',
        h1: {
            lineHeight: "5.5rem",
            fontSize: "7rem"
        }
    }
});

export default hackHpiTheme;