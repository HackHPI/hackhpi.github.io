import {Box, Card, Container, Grid, Typography} from "@mui/material";
import {Campaign, ConfirmationNumber, EmojiEvents, MoneyOff} from "@mui/icons-material";
import React from "react";

export function IconContainer(props) {
    return (
        <Card sx={{
            background: "linear-gradient(45deg, rgba(58,12,163,1) 0%, rgba(114,9,183,1) 100%)",
            width: "80%",
            aspectRatio: "1 / 1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            {React.cloneElement(props.icon, {sx: {color: "white"}, style: {width: "65%", height: "auto"}})}
        </Card>
    )
}

export function Features() {

    const features = [
        {
            icon: <MoneyOff/>,
            title: "Completely free (including food)",
            subtitle: "Yes, completely free! This includes challenges, workshops, networking events, meals/snacks, and everything else during the event!"
        },
        {
            icon: <EmojiEvents/>,
            title: "Cash prizes",
            subtitle: "Up for grabs are cash prizes for the best result, and among other things, prices for the best meme of the event."
        },
        /*
        {
            icon: <ConfirmationNumber/>,
            title: "Free tickets for the Urban Innovation Forum in Berlin",
            subtitle: "All participants are invited to attend the Urban Innovation Forum in Berlin on March 20th for FREE, hosted by our partner the Climate Tech Hub."
        },
        {
            icon: <Campaign/>,
            title: "Pitch your idea at the Greentech Festival in Berlin",
            subtitle: "Two of this year’s HackHPI winning team, will have the opportunity to pitch the results at the startup stage of the Greentech Festival in Berlin on May 18th."
        }

         */
    ]

    return (
        <Container sx={{paddingBottom: 10, paddingTop: 5}}>
            <Grid container spacing={7}>
                {features.map((feature, i) => (
                    <Grid item md={6} key={i}>
                        <Grid container>
                            <Grid item xs={2}>
                                <IconContainer icon={feature.icon}/>
                            </Grid>
                            <Grid item xs={10} sx={{display: "flex", alignItems: "center"}}>
                                <Box>
                                    <Typography variant={"h5"} gutterBottom>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant={"body1"} gutterBottom>
                                        {feature.subtitle}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}

            </Grid>
        </Container>
    )
}