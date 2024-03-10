"use client"
import {Box, Container, Grid, IconButton, Typography} from "@mui/material";
import {WindowCard} from "../WindowCard/WindowCard.jsx";
import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";
import {PlayArrow} from "@mui/icons-material";
import {useState} from "react";

function WhatToExpect() {

    const [playVideo, setPlayVideo] = useState(false)

    return (
        <HackHPIWrapper>

            <Container sx={{paddingTop: 10, paddingBottom: 7}}>
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
                                {playVideo ? (
                                    <iframe
                                        src="https://player.vimeo.com/video/867922224?h=30cf0b8b55&title=0&byline=0&portrait=0&autoplay=1&muted=1"
                                        style={{aspectRatio: "16 / 9", borderRadius: "5px", width: "100%", border: 0}}
                                        allow="autoPlay; fullscreen; picture-in-picture"
                                        allowFullScreen
                                        title={"Image Movie"}
                                    />
                                ) : (
                                    <Box
                                        style={{
                                            aspectRatio: "16 / 9",
                                            borderRadius: "5px",
                                            width: "100%",
                                            background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(https://vumbnail.com/867922224.jpg)`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <IconButton onClick={() => setPlayVideo(true)}>
                                            <PlayArrow sx={{fontSize: "3rem"}}/>
                                        </IconButton>
                                    </Box>
                                )}

                            </WindowCard>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </HackHPIWrapper>
    )
}

export default WhatToExpect