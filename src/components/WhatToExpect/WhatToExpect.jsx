import {Card, Container, Grid, Typography} from "@mui/material";

function WhatToExpect() {

    return (
        <Container sx={{paddingTop: 7, paddingBottom: 7}}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant={"h1"} gutterBottom>
                        What To expect
                    </Typography>
                    <Typography gutterBottom>
                        In the era of rapid urbanization and advancing technologies, the concept of smart cities has
                        emerged as
                        a solution to address the evolving needs of our society. To meet these demands of an
                        increasingly
                        digitized society, government agencies and companies alike must adapt their infrastructure and
                        embrace
                        state-of-the-art technologies.
                    </Typography>
                    <Typography gutterBottom>
                        Furthermore, the increasing awareness about climate change urges us to take steps towards a more
                        sustainable future. Whether it be our way of transportation or our general lifestyle, clever
                        designs and
                        coding solutions can motivate us to do better.
                    </Typography>
                    <Typography gutterBottom>
                        However, much work still needs to be done in making our cities work seamlessly and
                        environmentally
                        friendly. Therefore, this year focuses on developing solutions for tomorrow's urban society and
                        solving
                        problems we already face.</Typography>
                    <Typography gutterBottom>
                        For two consecutive days, we will bring motivated students from different backgrounds together
                        at HPI
                        near Berlin. By providing world-class sponsors, including workshops and access to their data and
                        APIs, a
                        great location and plenty of caffeine to fuel your brain, we will create a space for creativity,
                        inspiring ideas and a passion for trying out new things.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{display: "flex", justifyContent: "center"}}>
                        <iframe
                            src="https://player.vimeo.com/video/867922224?h=30cf0b8b55&title=0&byline=0&portrait=0"
                            style={{borderRadius: "10px", width: "100%"}}
                            allow="autoPlay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title={"Image Movie"}
                        />
                </Grid>

            </Grid>


        </Container>
    )
}

export default WhatToExpect