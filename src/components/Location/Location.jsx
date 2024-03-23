"use client"
import {Box, Button, Container, Grid, IconButton, Stack, Typography} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import {WindowCard} from "../WindowCard/WindowCard";
import {LocationOn} from "@mui/icons-material";
import LocationImage from "../../assets/images/locationImage.webp"

export function Location() {

    const [showMap, setShowMap] = useState(false)

    return (
        <Container sx={{paddingTop: 10, paddingBottom: 10}} id={"location"}>
            <Typography variant={"h2"} component={"h1"} gutterBottom>How to get to the event</Typography>
            <Grid container spacing={5}>
                <Grid item xs={12} md={5} sx={{display: "flex", justifyContent: "center"}}>
                    <Box sx={{width: "100%"}}>
                        <WindowCard>
                            {showMap ? (
                                <Box sx={{aspectRatio: "1/1"}}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d697.9147602408915!2d13.12434043533714!3d52.392405603815675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85f485b026e31%3A0xedbef6f3831a6d94!2sAugust-Bebel-Str.%2088%2C%2014482%20Potsdam!5e0!3m2!1sen!2sde!4v1711226813190!5m2!1sen!2sde"
                                        width="100%" height="100%" style={{border: 0}} allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </Box>
                            ) : (
                                <Box
                                    style={{
                                        aspectRatio: "1 / 1",
                                        borderRadius: "5px",
                                        width: "100%",
                                        background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${LocationImage.src})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "contain",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                        <Box>
                                            <IconButton onClick={() => setShowMap(true)}>
                                                <LocationOn sx={{fontSize: "3rem"}}/>
                                            </IconButton>
                                        </Box>
                                        <Typography>Click to enable Google Maps</Typography>
                                    </Box>
                                </Box>
                            )}

                        </WindowCard>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack spacing={5}>
                        <Stack spacing={2}>
                            <Typography variant={"h4"} gutterBottom>Address</Typography>
                            <Typography fontWeight={"bold"}>August-Bebel-Str. 88, 14482 Potsdam</Typography>
                            <Stack direction={"row"} spacing={2} alignItems={"center"}>
                                <Typography>Get Directions:</Typography>
                                <Button
                                    variant={"outlined"}
                                    color={"inherit"}
                                    href={"https://www.google.com/maps/dir//August-Bebel-Str.+88,+14482+Potsdam/@52.3922957,13.1243753,18z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47a85f485b026e31:0xedbef6f3831a6d94!2m2!1d13.1251134!2d52.3922948!3e0?entry=ttu"}
                                    target={"_blank"}
                                    rel={"noopener noreferrer"}
                                >
                                    Google Maps
                                </Button>
                                <Button
                                    variant={"outlined"}
                                    color={"inherit"}

                                    href={"https://maps.apple.com/?address=August-Bebel-Stra%C3%9Fe%2088,%2014482%20Potsdam,%20Germany&ll=52.392156,13.123771&q=August-Bebel-Stra%C3%9Fe%2088&t=m"}
                                    target={"_blank"} rel={"noopener noreferrer"}
                                >
                                    Apple Maps
                                </Button>
                            </Stack>
                        </Stack>

                        <Stack spacing={2}>
                            <Typography variant={"h4"} gutterBottom>By Car</Typography>
                            <Typography>There are multiple parking spaces available near the Location. We endorse
                                however, the use of Public Transport.</Typography>
                        </Stack>
                        <Stack spacing={2}>
                            <Typography variant={"h4"} gutterBottom>By Train</Typography>
                            <Typography>Please use the DB Navigator App to get directions to the Station, <b>Potsdam
                                Griebnitzsee</b>.</Typography>
                            <Typography>To get a Discount on your Ticket, you can use the DB event ticket, which was sent to you via E-Mail.</Typography>
                        </Stack>
                    </Stack>

                </Grid>
            </Grid>
        </Container>
    )
}