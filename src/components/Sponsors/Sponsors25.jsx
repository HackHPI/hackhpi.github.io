import {Box, Container, Grid, Link} from "@mui/material";
import Engine from "../../assets/images/sponsors/2025/engine.svg"
import React from "react";
import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";


function Sponsors() {

    const sponsors = [
        {
            logo: Engine.src,
            alt: "Logo of HPI Engine",
            link: "https://engine.hpi.de"
        },

    ]

    return (
        <HackHPIWrapper>
            <Box sx={{paddingBottom: 10}}>
                <Container maxWidth={"xl"}>
                    <Grid container sx={{paddingTop: "5rem"}} justifyContent={"center"} spacing={10}>
                        {sponsors.map((sponsor, idx) => (
                            <Grid item xs={12} md={6} lg={3} key={idx}>
                                <Link href={sponsor.link} target={"_blank"} rel="noopener noreferrer">
                                    <Box style={{
                                        backgroundImage: `url(${sponsor.logo})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat",
                                        width: "100%", height: "5rem",
                                    }}/>
                                </Link>
                            </Grid>
                        ))}

                    </Grid>

                </Container>
            </Box>
        </HackHPIWrapper>
    )

}

export default Sponsors;