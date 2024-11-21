'use client'
import {Box, Button, Card, Container, Stack, Typography} from "@mui/material";
import {TypeAnimation} from "react-type-animation";
import Countdown from "./Countdown.jsx";
import {CalendarMonthOutlined, LocationOn} from "@mui/icons-material";
import {MeshContainer} from "./MeshContainer/MeshContainer";

function LandingImage() {

    return (
        <MeshContainer>
            <Container sx={{height: "100%", width: "100%", display: "flex", alignItems: "center"}}>
                <Box sx={{
                    height: "80%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "column",
                }}>

                    <img src={"/HackHPI_white.svg"} width={"150rem"} alt={"HackHPI Logo"}/>
                    <div>
                        <Countdown/>
                        <Typography variant={"h4"} component={"h2"}>
                            <TypeAnimation
                                preRenderFirstString={true}
                                sequence={[
                                    500,
                                    'Until we build Better Transport', // initially rendered starting point
                                    1000,
                                    'Until we build Better Schools',
                                    1000,
                                    'Until we build Better Routes',
                                    1000,
                                    'Until we build Better Cities',
                                    10000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </Typography>
                    </div>
                    <Stack direction={"row"} spacing={3} useFlexGap flexWrap="wrap">
                        <Button
                            variant={"contained"}
                            sx={{
                                background: "linear-gradient(90deg, rgba(58,12,163,1) 0%, rgba(114,9,183,1) 100%)",
                                backgroundColor: "secondary.main",
                                borderWidth: "1rem",
                                width: "13rem",
                                height: "3.5rem",
                                fontSize: "1rem",
                            }}
                            startIcon={<LocationOn/>}
                            onClick={() => document.getElementById("location").scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                                inline: "nearest"
                            })}
                        >
                            Directions
                        </Button>
                        <Card sx={{height: "3.5rem", width: "13rem", justifyContent: "center", display: "flex"}}>
                            <Stack direction={"row"} alignItems={"center"} display={"flex"}
                                   sx={{height: "100%", paddingRight: "1.25rem", paddingLeft: "1.25rem",}} spacing={2}>
                                <CalendarMonthOutlined sx={{fontSize: "1.5rem", color: "text.disabled"}}/>
                                <Typography sx={{fontSize: "1rem"}} color={"text.disabled"} noWrap>
                                    21th - 22th March
                                </Typography>
                            </Stack>
                        </Card>
                    </Stack>
                </Box>
            </Container>
        </MeshContainer>
    )

    return (
        <Box sx={{
            width: "100%",
            backgroundImage: `url(/mazeBackground.svg), linear-gradient(180deg, rgba(19,16,27,1) 0%, rgba(19,16,27,1) 100%)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            padding: 2
        }}
        >
            <Container sx={{height: "100%", width: "100%", display: "flex", alignItems: "center"}}>
                <Box sx={{
                    height: "80%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "column",
                    minHeight: "60vh",
                }}>

                    <img src={"/HackHPI_white.svg"} width={"150rem"} alt={"HackHPI Logo"}/>
                    <div>
                        <Countdown/>
                        <Typography variant={"h4"} component={"h2"}>
                            <TypeAnimation
                                preRenderFirstString={true}
                                sequence={[
                                    500,
                                    'Until we build Better Transport', // initially rendered starting point
                                    1000,
                                    'Until we build Better Schools',
                                    1000,
                                    'Until we build Better Routes',
                                    1000,
                                    'Until we build Better Cities',
                                    10000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </Typography>
                    </div>
                    <Stack direction={"row"} spacing={3} useFlexGap flexWrap="wrap">
                        <Button
                            variant={"contained"}
                            sx={{
                                background: "linear-gradient(90deg, rgba(58,12,163,1) 0%, rgba(114,9,183,1) 100%)",
                                backgroundColor: "secondary.main",
                                borderWidth: "1rem",
                                width: "13rem",
                                height: "3.5rem",
                                fontSize: "1rem",
                            }}
                            startIcon={<LocationOn/>}
                            onClick={() => document.getElementById("location").scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                                inline: "nearest"
                            })}
                        >
                            Directions
                        </Button>
                        <Card sx={{height: "3.5rem", width: "13rem", justifyContent: "center", display: "flex"}}>
                            <Stack direction={"row"} alignItems={"center"} display={"flex"}
                                   sx={{height: "100%", paddingRight: "1.25rem", paddingLeft: "1.25rem",}} spacing={2}>
                                <CalendarMonthOutlined sx={{fontSize: "1.5rem", color: "text.disabled"}}/>
                                <Typography sx={{fontSize: "1rem"}} color={"text.disabled"} noWrap>
                                    5th - 6th April
                                </Typography>
                            </Stack>
                        </Card>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default LandingImage