'use client'
import {Box, Button, Card, Container, Stack, Typography} from "@mui/material";
import {TypeAnimation} from "react-type-animation";
import Countdown from "./Countdown.jsx";
import {CalendarMonthOutlined} from "@mui/icons-material";

function LandingImage2() {


    return (
        <Box sx={{
            height: "60vh",
            width: "100%",
            backgroundImage: `url(/mazeBackground.svg), linear-gradient(180deg, rgba(19,16,27,1) 0%, rgba(19,16,27,1) 100%)`,
            backgroundPosition: "center",
            backgroundSize: "cover"
        }}
        >
            <Container sx={{height: "100%", width: "100%", display: "flex", alignItems: "center"}} maxWidth={"xl"}>
                <Box sx={{
                    height: "80%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "column"
                }}>

                    <img src={"/HackHPI24_white.png"} width={"200rem"} alt={"HackHPI Logo"}/>
                    <div>
                        <Countdown/>
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
                            style={{fontSize: '3em', color: "white"}}
                            repeat={Infinity}
                        />
                    </div>
                    <Stack direction={"row"} spacing={5}>
                        <Button
                            variant={"contained"}
                            sx={{
                                background: "linear-gradient(90deg, rgba(58,12,163,1) 0%, rgba(114,9,183,1) 100%)",
                                backgroundColor: "secondary.main",
                                borderWidth: "1rem",
                                width: "15rem",
                                height: "3.5rem",
                                fontSize: "1.25rem",
                            }}
                        >
                            SignUp
                        </Button>
                        <Card elevation={5}>
                            <Stack direction={"row"} alignItems={"center"} display={"flex"} sx={{height: "100%"}} spacing={3}>
                                <CalendarMonthOutlined sx={{fontSize: "2rem"}}/>
                                <Typography sx={{fontSize:"1rem"}}>5th - 6th April</Typography>
                            </Stack>
                        </Card>
                        <Button
                            variant={"contained"}
                            disabled
                            sx={{
                                borderWidth: "1rem",
                                width: "15rem",
                                height: "3.5rem",
                                fontSize: "1.25rem",
                            }}
                        >
                            SignUp
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default LandingImage2