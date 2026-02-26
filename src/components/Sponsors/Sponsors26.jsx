import { Box, Container, Grid, Link } from "@mui/material";
import Engine from "../../assets/images/sponsors/2026/engine.svg";
import Cula from "../../assets/images/sponsors/2026/Lockup-White.svg";
import Claas from "../../assets/images/sponsors/2026/claas_white.svg";
import Quantco from "../../assets/images/sponsors/2026/quantco_white.svg";
import AWS from "../../assets/images/sponsors/2026/Amazon_Web_Services_Logo_white.svg";
import React from "react";
import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";

function Sponsors() {
  const primarySponsors = [
    {
      logo: Cula.src,
      alt: "Logo of Cula Technologies",
      link: "https://cula.tech",
    },
  ];

  const sponsors = [
    {
      logo: AWS.src,
      alt: "Logo of Quantco",
      link: "https://aws.amazon.com/",
      customHeight: "5rem",
    },
    {
      logo: Engine.src,
      alt: "Logo of HPI Engine",
      link: "https://engine.hpi.de",
    },
    {
      logo: Claas.src,
      alt: "Logo of Claas",
      link: "https://www.claas.com/",
    },
    {
      logo: Quantco.src,
      alt: "Logo of Quantco",
      link: "https://www.quantco.com/",
      customHeight: "7rem",
    },
  ];

  return (
    <HackHPIWrapper>
      <Box sx={{ paddingBottom: 10 }}>
        <Container maxWidth={"xl"}>
          <Grid
            container
            sx={{ paddingTop: "5rem", paddingBottom: "3rem" }}
            justifyContent={"center"}
            spacing={10}
          >
            {primarySponsors.map((sponsor, idx) => (
              <Grid item xs={12} md={6} lg={3} key={idx}>
                <Link
                  href={sponsor.link}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <Box
                    style={{
                      backgroundImage: `url(${sponsor.logo})`,
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      height: "6rem",
                    }}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
          <Grid
            container
            sx={{ paddingTop: "5rem" }}
            justifyContent={"center"}
            spacing={10}
          >
            {sponsors.map((sponsor, idx) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={3}
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link
                  sx={{ width: "80%" }}
                  href={sponsor.link}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  style={{

                  }}
                >
                  <Box
                    style={{
                      backgroundImage: `url(${sponsor.logo})`,
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      height: sponsor.customHeight
                        ? sponsor.customHeight
                        : "4rem",
                    }}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </HackHPIWrapper>
  );
}

export default Sponsors;
