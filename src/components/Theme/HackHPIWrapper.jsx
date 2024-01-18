import {CssBaseline, ThemeProvider} from "@mui/material";
import lightTheme from "./lightTheme.js";


function HackHPIWrapper(props) {

    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline/>
            {props.children}
        </ThemeProvider>
    );
}

export default HackHPIWrapper;