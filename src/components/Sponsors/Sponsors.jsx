import {Box, Container, Grid} from "@mui/material";
import ESchool from "../../assets/images/sponsors/trpnt_e-school-standalone-white_high.png"
import React from "react";
import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";
import ClimateTechHub from "../../assets/images/sponsors/CTH-logo-vertical_white.svg";
import HolySquad from "../../assets/images/sponsors/holySquad.webp";
import DB from "../../assets/images/sponsors/db.svg";

function Sponsors() {

    return (
        <HackHPIWrapper>
            <Box sx={{paddingBottom: 10}}>
                <Container maxWidth={"xl"}>
                    <Grid container sx={{paddingTop: "5rem"}} justifyContent={"center"} spacing={10}>
                        <Grid item>
                            <img src={ClimateTechHub.src} alt={"Logo of Climate Tech Hub"} style={{height: "5rem"}}/>
                        </Grid>
                        <Grid item>
                            <img src={ESchool.src} alt={"Logo of E-Scool"} style={{height: "5rem"}}/>
                        </Grid>
                        <Grid item>
                            <img src={HolySquad.src} alt={"Logo of HolySquad"} style={{height: "5rem"}}/>
                        </Grid>
                        <Grid item>
                            <img src={DB.src} alt={"Logo of DB"} style={{height: "5rem"}}/>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
        </HackHPIWrapper>
    )

}

export default Sponsors;