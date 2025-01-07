import {Box, Container, Grid, Link} from "@mui/material";
import ESchool from "../../assets/images/sponsors/2024/e-school.svg"
import React from "react";
import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";
import ClimateTechHub from "../../assets/images/sponsors/2024/CTH-logo-vertical_white.svg";
import HolySquad from "../../assets/images/sponsors/2024/holySquad.png";
import DB from "../../assets/images/sponsors/2024/db.svg";
import Potsdam from "../../assets/images/sponsors/2024/potsdam.webp";
import AxelSpringer from "../../assets/images/sponsors/2024/axelspringer.webp";
import BertaRudi from "../../assets/images/sponsors/2024/berta-rudi_logo_negativ_sw.svg";
import Starwit from "../../assets/images/sponsors/2024/cropped-logo-starwit-white.png";
import DreesSommer from "../../assets/images/sponsors/2024/DreesSommer.webp";


function Sponsors24() {

    const sponsors = [
        {
            logo: BertaRudi.src,
            alt: "Logo of Berta Rudi",
            link: "https://berta-rudi.com/?utm_source=crossmedial&utm_medium=hpihack&utm_campaign=hackathon"
        },
        {
            logo: AxelSpringer.src,
            alt: "Logo of Axel Springer",
            link: "https://www.axelspringer.com/"
        },
        {
            logo: ESchool.src,
            alt: "Logo of HPI E-School",
            link: "https://hpi.de/entrepreneurship/home.html"
        },
        {
            logo: Potsdam.src,
            alt: "Logo of the City of Potsdam",
            link: "https://www.potsdam.de/de"
        },
        {
            logo: DreesSommer.src,
            alt: "Logo of Drees & Sommer",
            link: "https://www.dreso.com/"
        },
        {
            logo: Starwit.src,
            alt: "Logo of Starwit",
            link: "https://starwit-technologies.de/"
        },
        {
            logo: ClimateTechHub.src,
            alt: "Logo of Climate Tech Hub",
            link: "https://www.climate-tech-hub.com/"
        },
        {
            logo: HolySquad.src,
            alt: "Logo of HolySquad",
            link: "https://de.weareholy.com/"
        },
        {
            logo: DB.src,
            alt: "Logo of Deutsche Bahn",
            link: "https://www.deutschebahn.com/"
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

export default Sponsors24;