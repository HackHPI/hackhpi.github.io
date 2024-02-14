import {Box, Container, Grid} from "@mui/material";
import Starwit from "../../assets/images/sponsors/cropped-logo-starwit-white.png"
import ESchool from "../../assets/images/sponsors/trpnt_e-school-standalone-white_high.png"
import React from "react";
import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";

function Sponsors() {

    return (
        <HackHPIWrapper>
            <Box sx={{paddingTop: 10, paddingBottom: 10}}>
                <Container maxWidth={"xl"}>
                    <Grid container sx={{paddingTop: "5rem"}} justifyContent={"center"} spacing={10}>
                        <Grid item>
                            <img src={Starwit.src} alt={"Logo of starwit"} style={{height: "5rem"}}/>
                        </Grid>
                        <Grid item>
                            <img src={ESchool.src} alt={"Logo of E-Scool"} style={{height: "5rem"}}/>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
        </HackHPIWrapper>
    )

}

export default Sponsors;