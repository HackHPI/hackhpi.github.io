import {Box, Container, Grid, Typography} from "@mui/material";
import {WindowCard} from "../WindowCard/WindowCard.jsx";

function WhatToExpect() {

    return (
        <Container sx={{paddingTop: 7, paddingBottom: 7}} maxWidth={"xl"}>
            <Grid container spacing={6} alignItems={"center"}>
                <Grid item xs={12} md={8}>
                    <Typography variant={"h1"} gutterBottom>
                        What To expect
                    </Typography>
                    <Typography gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut diam rhoncus, scelerisque
                        metus quis, tincidunt mauris. Ut nec sem gravida, lacinia ipsum nec, tempus odio. Nam aliquet
                        est sed felis ullamcorper dapibus tincidunt varius odio. Quisque consectetur ligula at convallis
                        mollis. Donec eleifend pellentesque urna, in luctus felis hendrerit vitae. Maecenas et
                        pellentesque sem. Quisque consequat, magna vitae tristique tincidunt, purus sem pretium magna,
                        quis fringilla orci leo quis sapien. Nullam laoreet tempor pellentesque. Cras ornare mi vel est
                        euismod gravida. Nulla facilisi. Aliquam ut nisl mollis, faucibus libero eu, egestas nunc. Ut
                        posuere tincidunt nisl feugiat bibendum. Sed tempor viverra ex, non placerat risus aliquam
                        vitae. Proin lobortis, ligula ac imperdiet vestibulum, quam ligula tincidunt metus, non placerat
                        sapien massa eget neque.
                    </Typography>

                </Grid>
                <Grid item xs={12} md={4} sx={{display: "flex", justifyContent: "center"}}>
                    <Box sx={{width: "100%"}}>
                        <WindowCard>
                                <iframe
                                    src="https://player.vimeo.com/video/867922224?h=30cf0b8b55&title=0&byline=0&portrait=0"
                                    style={{aspectRatio: "16 / 9", borderRadius: "5px", width: "100%"}}
                                    allow="autoPlay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title={"Image Movie"}
                                />
                        </WindowCard>

                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default WhatToExpect