import {Box, Container, Paper, Typography} from "@mui/material";
import '@fontsource/urbanist'
import {TypeAnimation} from "react-type-animation";
import Video from "../../assets/videos/1860079.mp4"
import Countdown from "./Countdown.jsx";

function LandingImage() {
    return (
        <Paper sx={{
            height: "75vh",
            width: "100%",
            position: "relative",
            borderRadius: "0 0 30px 30px"
        }}
        elevation={10}
        >
            <video autoPlay muted loop style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                objectFit: "cover",
                zIndex: 0,
                borderRadius: "0 0 30px 30px"
            }}>
                <source src={Video}
                        type="video/mp4"/>
            </video>
            <div style={{
                zIndex: 1,
                position: "relative",
                padding: "10px",
                background: "rgba(0,0,0,.7)",
                height: "100%",
                borderRadius: "0px 0px 30px 30px"
            }}>
                <Container sx={{height: "100%", width: "100%"}}>
                    <Box sx={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-around",
                        flexDirection: "column"
                    }}>

                        <img src={"/HackHPI_white.svg"} width={"200rem"}/>
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

                    </Box>
                </Container>
            </div>
        </Paper>
    )
}

export default LandingImage