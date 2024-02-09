import {Box, Button, Container, Stack} from "@mui/material";
import '@fontsource/urbanist'
import {TypeAnimation} from "react-type-animation";
import Countdown from "./Countdown.jsx";
import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";

function LandingImage2() {


    return (
        <HackHPIWrapper>
            <Box sx={{
                height: "80vh",
                width: "100%",
                backgroundImage: `url(/mazeBackground.svg), linear-gradient(180deg, rgba(19,16,27,1) 0%, rgba(19,16,27,1) 100%)`,
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}
            >
                <Container sx={{height: "100%", width: "100%"}} maxWidth={false}>
                    <Box sx={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-around",
                        flexDirection: "column"
                    }}>

                        <img src={"/HackHPI24_white.png"} width={"200rem"}/>
                        <div>
                            <Countdown/>
                            <TypeAnimation
                                client:load
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
                        <Stack direction={"row"}>
                            <Button
                                variant={"contained"}
                                sx={{
                                    //background: "linear-gradient(145deg, rgba(76,201,240,1) 0%, rgba(247,37,133,1) 100%);",
                                    backgroundColor: "secondary.main",
                                    borderWidth: "1rem",
                                }}
                                size={"large"}
                            >
                                SignUp
                            </Button>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </HackHPIWrapper>
    )
}

export default LandingImage2