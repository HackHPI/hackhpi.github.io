"use client"
import {Box, Container, Grid, Paper, Stack, Typography, useTheme} from "@mui/material";
import FelixLennardHake from "../../assets/images/speakers/FelixLennardHake.webp"
import {WindowCard} from "../WindowCard/WindowCard";

const speakers = {
    primary: [
        {
            name: "Felix Lennart Hake",
            position: "Mobility policy officer at Bitkom, Germany's digital association",
            profilePicture: FelixLennardHake.src,
            description: "Felix is responsible for Bitkom's political and regulatory work on smart mobility. Together with manufacturers, tech companies, mobility service providers and transport companies, Felix is committed to a connected, intelligent and sustainable mobility ecosystem - in rural areas as well as in cities and metropolitan regions. He is also responsible for the Digital Aviation working group. Prior to joining Bitkom, Felix worked for a political strategy and communications consultancy for several years and completed a Blue Book traineeship in the EU Commission's DG CONNECT. He studied sociology, politics and economics as well as European studies and political science in Friedrichshafen, Paris and Berlin.",
            linkedIn: "felix-lennart-hake"
        },
    ],
}

function Speakers() {
    const theme = useTheme();
    return (
        <Container sx={{paddingBottom: 10, paddingTop: 10}}>
            <Typography variant={"h2"} gutterBottom>Speakers</Typography>
            <Grid container spacing={10}>
                <Grid item xs={12} md={12}>
                    <Stack spacing={3}>
                        {speakers.primary.map(speaker => (
                            <WindowCard elevation={5} key={speaker.name}>
                                <Grid container spacing={5}>
                                    <Grid item xs={12} md={3}>
                                        <Paper sx={{
                                            borderRadius: theme.components.MuiCard.styleOverrides.root.borderRadius,
                                            background: `url(${speaker.profilePicture})`,
                                            backgroundPosition: "center",
                                            backgroundSize: "cover",
                                            backgroundColor: "#e0e0e0",
                                            aspectRatio: "1 / 1 !important",
                                            height: "auto",
                                            maxWidth: "100%"
                                        }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={9}>
                                        <Stack spacing={3}>
                                            <Box>
                                                <Typography variant={"h4"}>{speaker.name}</Typography>
                                                <Typography variant={"subtitle"} color={"text.disabled"}>
                                                    {speaker.position}
                                                </Typography>
                                            </Box>
                                            <Typography
                                                sx={{
                                                    //display: "-webkit-box",
                                                    //"-webkit-box-orient": "vertical",
                                                    //"-webkit-line-clamp": "7",
                                                    //overflow: "hidden",
                                                    //textOverflow: "ellipsis"
                                                }}>
                                                {speaker.description}
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </WindowCard>
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Speakers;