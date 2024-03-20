import {CssBaseline, ThemeProvider} from "@mui/material";
import hackHpiTheme from "./HackHpiTheme.js";


function HackHPIWrapper(props) {

    return (
        <ThemeProvider theme={hackHpiTheme}>
            <CssBaseline/>
            {props.children}
        </ThemeProvider>
    );
}

export default HackHPIWrapper;