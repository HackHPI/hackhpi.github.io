import {Box, Container, Grid, Typography} from "@mui/material";
import {WindowCard} from "../WindowCard/WindowCard.jsx";
import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";

function WhatToExpect() {

    return (
        <HackHPIWrapper>

            <Container sx={{paddingTop: 10, paddingBottom: 10}}>
                <Grid container spacing={6} alignItems={"center"}>
                    <Grid item xs={12} md={8}>
                        <Typography variant={"h2"} component={"h1"} gutterBottom>
                            What to expect
                        </Typography>
                        <Typography fontWeight={"light"} gutterBottom>
                            Explore the future of urban living at HPI in Potsdam.
                        </Typography>
                        <Typography gutterBottom display={"block"}
                                    fontWeight={"light"}>
                            Join motivated students for two days of
                            innovation, workshops, and collaboration with top-notch sponsors offering support and
                            expertise.
                            Tackle a challenge and dive into the world of smart cities.
                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={4} sx={{display: "flex", justifyContent: "center"}}>
                        <Box sx={{width: "100%"}}>
                            <WindowCard>
                                <iframe
                                    src="https://player.vimeo.com/video/867922224?h=30cf0b8b55&title=0&byline=0&portrait=0"
                                    style={{aspectRatio: "16 / 9", borderRadius: "5px", width: "100%"}}
                                    allow="autoPlay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title={"Image Movie"}
                                />
                            </WindowCard>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </HackHPIWrapper>
    )
}

export default WhatToExpect