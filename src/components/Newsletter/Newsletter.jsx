import {Box, Container, Grid, Link, Typography} from "@mui/material";
import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";

function Newsletter() {

    return (
        <HackHPIWrapper>
            <Box sx={{paddingTop: 10, paddingBottom: 10}}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} sx={{display: "flex", alignItems: "center"}}>
                            <iframe
                                width="540"
                                height="350"
                                src="https://0270cddf.sibforms.com/serve/MUIFAODxMCBfEOxAaU41kdXNneuAYA9UFi6EdbUH-mezqAUhIK5cEXk8oEIPnRLFxdhcbYk-LxaUNXsHG-wKikEJ-7PxUY0h8Fyfba1LtUBOhpVSwUWzjyx4QY0n2N5vM52i5u1HwqcZrC-rJaAxAIndH_nvEadZlRyjy3Ky_NncN66lIPLtXLFN5JWjZNGqaNxCAV0bz1CE_EbY"
                                frameBorder="0" scrolling="auto" allowFullScreen
                            ></iframe>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant={"h2"}
                                component={"h1"}
                                gutterBottom
                            >
                                Want to stay in the loop?
                            </Typography>
                            <Typography
                            >
                                Sign up for our newsletter.
                            </Typography>
                            <Typography>
                                We use Brevo as our marketing platform. By clicking below to submit
                                this form, you acknowledge that the information you provided will be
                                transferred to Brevo for processing in accordance with their <Link
                                target="_blank"
                                href="https://www.brevo.com/legal/termsofuse" color={"inherit"}>terms of use</Link
                            >.
                            </Typography>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </HackHPIWrapper>
    )

}

export default Newsletter