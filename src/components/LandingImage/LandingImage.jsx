'use client'
import {Box, Button, Card, Container, Stack, Typography} from "@mui/material";
import {TypeAnimation} from "react-type-animation";
import Countdown from "./Countdown.jsx";
import {CalendarMonthOutlined, Camera, CameraAlt, LocationOn} from "@mui/icons-material";

function LandingImage() {

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

                    <img src={"/HackHPI24_white.png"} width={"150rem"} alt={"HackHPI Logo"}/>
                    <div>
                        {/*<Countdown/>*/}
                        <Typography sx={{color: "white"}} variant={"h2"} component={"h1"} >
                        Thank you,
                        </Typography>
                        <Typography variant={"h4"} component={"h2"}>
                            <TypeAnimation
                                preRenderFirstString={true}
                                sequence={[
                                    500,
                                    'That we built Better Transport', // initially rendered starting point
                                    1000,
                                    'That we built Better Schools',
                                    1000,
                                    'That we built Better Routes',
                                    1000,
                                    'That we built Better Cities',
                                    3000,
                                    'See you next year!',
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
                            startIcon={<CameraAlt/>}
                            onClick={() => document.getElementById("images").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })}
                        >
                            Images
                        </Button>
                        <Card sx={{height: "3.5rem", width: "13rem", justifyContent: "center", display:"flex"}}>
                            <Stack direction={"row"} alignItems={"center"} display={"flex"}
                                   sx={{height: "100%", paddingRight: "1.25rem", paddingLeft: "1.25rem",}} spacing={2}>
                                <CalendarMonthOutlined sx={{fontSize: "1.5rem", color: "text.disabled"}}/>
                                <Typography sx={{fontSize: "1rem"}} color={"text.disabled"} noWrap>
                                    5th - 6th April 2024
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