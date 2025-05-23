import { Box, Container, Grid, Link } from "@mui/material";
import Engine from "../../assets/images/sponsors/2025/engine.svg";
import Aws from "../../assets/images/sponsors/2025/aws.svg";
import Ottobock from "../../assets/images/sponsors/2025/ottobock.svg";
import Quantco from "../../assets/images/sponsors/2025/quantco.svg";
import Tk from "../../assets/images/sponsors/2025/tk.svg";
import React from "react";
import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";

function Sponsors() {
  const sponsors = [

    {
      logo: Ottobock.src,
      alt: "Logo of HPI Engine",
      link: "https://www.ottobock.com",
    },
    {
      logo: Quantco.src,
      alt: "Logo of HPI Engine",
      link: "https://www.quantco.com",
    },
    {
      logo: Aws.src,
      alt: "Logo of HPI Engine",
      link: "https://aws.amazon.com",
    },
    {
      logo: Tk.src,
      alt: "Logo of HPI Engine",
      link: "https://www.tk.de",
    },
    {
      logo: Engine.src,
      alt: "Logo of HPI Engine",
      link: "https://engine.hpi.de",
    },
  ];

  return (
    <HackHPIWrapper>
      <Box sx={{ paddingBottom: 10 }}>
        <Container maxWidth={"xl"}>
          <Grid
            container
            sx={{ paddingTop: "5rem" }}
            justifyContent={"center"}
            spacing={10}
          >
            {sponsors.map((sponsor, idx) => (
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
                      height: "5rem",
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
