import {Box, Container, Grid} from "@mui/material";
import Starwit from "../../assets/images/sponsors/cropped-logo-starwit-white.png"
import {FadeInContainer} from "../FadeInContainer/FadeInContainer.jsx";
import React from "react";

function Sponsors() {
    const containerRef = React.useRef(null);

    return (

        <Box ref={containerRef}>
            <FadeInContainer containerRef={containerRef}>
                <Container maxWidth={"xl"}>
                    <Grid container sx={{paddingTop: "5rem"}} justifyContent={"center"}>
                        <Grid item>
                            <img src={Starwit.src} alt={"Logo of starwit"} style={{height: "5rem"}}/>
                        </Grid>
                    </Grid>

                </Container>
            </FadeInContainer>
        </Box>
    )

}

export default Sponsors;