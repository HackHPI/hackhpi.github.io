import {Box, Container} from "@mui/joy";
import '@fontsource/urbanist'
import {TypeAnimation} from "react-type-animation";
import Video from "../../assets/videos/1860079.mp4"

function LandingImage() {
    return (
        <>
            <Box sx={{
                height: "80vh",
                width: "100%",
                position: "relative",
                borderRadius: "0 0 30px 30px"
            }}>
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
                    <Container sx={{height: "100%", display: "flex", alignItems: "space-around"}}>
                        <img src={"/HackHPI_white.svg"} width={"200rem"}/>
                        <div>
                            <TypeAnimation
                                client:load
                                preRenderFirstString={true}
                                sequence={[
                                    500,
                                    'Build Better Transport', // initially rendered starting point
                                    1000,
                                    'Build Better Schools',
                                    1000,
                                    'Build Better Routes',
                                    1000,
                                    'Build Better Cities',
                                    10000,
                                ]}
                                speed={50}
                                style={{fontSize: '4em', color: "white"}}
                                repeat={Infinity}
                            />
                        </div>
                    </Container>
                </div>
            </Box>
            <div style={{height: "80vh", width: "100%", display: "flex", alignItems: "center"}}>

            </div>
        </>
    )
}

export default LandingImage