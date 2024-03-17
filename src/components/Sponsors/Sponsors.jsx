import {Box, Container, Grid, Link} from "@mui/material";
import ESchool from "../../assets/images/sponsors/e-school.svg"
import React from "react";
import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";
import ClimateTechHub from "../../assets/images/sponsors/CTH-logo-vertical_white.svg";
import HolySquad from "../../assets/images/sponsors/holySquad.png";
import DB from "../../assets/images/sponsors/db.svg";
import Potsdam from "../../assets/images/sponsors/potsdam.webp";
import AxelSpringer from "../../assets/images/sponsors/axelspringer.webp";

function Sponsors() {

    const sponsors = [
        {
            logo: ClimateTechHub.src,
            alt: "Logo of Climate Tech Hub",
            link: "https://www.climate-tech-hub.com/"
        }, {
            logo: ESchool.src,
            alt: "Logo of HPI E-School",
            link: "https://hpi.de/entrepreneurship/home.html"
        }, {
            logo: HolySquad.src,
            alt: "Logo of HolySquad",
            link: "https://de.weareholy.com/"
        }, {
            logo: DB.src,
            alt: "Logo of Deutsche Bahn",
            link: "https://www.deutschebahn.com/"
        }, {
            logo: Potsdam.src,
            alt: "Logo of the City of Potsdam",
            link: "https://www.potsdam.de/de"
        }, {
            logo: AxelSpringer.src,
            alt: "Logo of Axel Springer",
            link: "https://www.axelspringer.com/"
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