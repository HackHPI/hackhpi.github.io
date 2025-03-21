"use client";
import {Box, Card, Chip, Container, Divider, Grid, IconButton, Stack, Typography} from "@mui/material";
import {
    Campaign,
    Celebration,
    ConfirmationNumber,
    EmojiEvents,
    EmojiObjects,
    KeyboardArrowLeft,
    KeyboardArrowRight,
    PlayArrow,
    Restaurant,
    Stop
} from "@mui/icons-material";
import * as React from "react";
import {useState} from "react";
import {IconContainer} from "../Features/Features";

const dayOneYears = [
    {
        year: 2025,
        subtitle: "Friday 21.03",
        dayOne: [
            {
                time: "09:00 - 11:00",
                icon: <ConfirmationNumber/>,
                title: "Check-In + Breakfast",
                person: "",
            },
            {
                time: "11:00 - 12:00",
                icon: <Campaign/>,
                title: "Intro Presentations + Speaker",
                person: "",
            },
            {
                time: "12:00 - 13:00",
                icon: <Campaign/>,
                title: "Challenge Presentation",
                person: "",
            },
            {
                time: "13:00 - 14:00",
                icon: <Restaurant/>,
                title: "Lunch",
                person: "",
            },
            {
                time: "13:45 - 14:30",
                icon: <EmojiObjects/>,
                title: "JITAI Challenge Input Session",
                person: "optional",
            },
            {
                time: "14:00 - 15:00",
                icon: <EmojiObjects/>,
                title: "ottobock Challenge Input Session",
                person: "optional",
            },
            {
                time: "14:00 - 15:00",
                icon: <EmojiObjects/>,
                title: "Open Challenge Input Session",
                person: "optional",
            },
            {
                time: "14:00 - 13:00 next day (continuously)",
                icon: <PlayArrow/>,
                title: "Begin Hacking Time",
                person: "",
            },
            {
                time: "16:00 - 17:00",
                icon: <EmojiObjects/>,
                title: "Pitch Workshop",
                person: "optional",
            },
            {
                time: "18:00 - 19:00",
                icon: <Restaurant/>,
                title: "Dinner",
                person: "",
            },
            {
                time: "00:00 - 01:00",
                icon: <Restaurant/>,
                title: "Midnight Snack",
                person: "",
            }
        ]
    },
    {
        year: 2024,
        subtitle: "Friday 05.04",
        dayOne: [
            {
                time: "09:00 - 11:00",
                icon: <ConfirmationNumber/>,
                title: "Check-In",
                person: "",
            },
            {
                time: "09:30 - 11:00",
                icon: <Restaurant/>,
                title: "Breakfast & Get to know each other",
                person: "",
            },
            {
                time: "11:00 - 12:00",
                icon: <Campaign/>,
                title: "Introduction & Speakers",
                person: "",
            },
            {
                time: "12:00 - 13:00",
                icon: <EmojiObjects/>,
                title: "Challenge Input Sessions",
                person: "",
            },
            {
                time: "13:00 - 14:00",
                icon: <Restaurant/>,
                title: "Lunch",
                person: "",
            },
            {
                time: "14:00 - 13:00 next day (Continuously)",
                icon: <PlayArrow/>,
                title: "Start Hacking Time",
                person: "",
            },
            {
                time: "14:00 - 14:30",
                icon: <EmojiObjects/>,
                title: "Starwit Challenge Workshop",
                person: "optional",
            },
            {
                time: "16:00 - 16:30",
                icon: <EmojiObjects/>,
                title: "AI Workshop by Axel Springer",
                person: "optional",
            },
            {
                time: "18:30 - 19:00",
                icon: <EmojiObjects/>,
                title: "Pitch Workshop by Axel Springer",
                person: "optional",
            },
            {
                time: "18:00 - 19:00",
                icon: <Restaurant/>,
                title: "Dinner",
                person: "",
            }
        ]
    }
]

const dayTwoYears = [
    {
        year: 2025,
        subtitle: "Saturday 22.03",
        dayTwo: [
            {
                time: "08:00 - 09:00",
                icon: <Restaurant/>,
                title: "Breakfast",
                person: "",
            },
            {
                time: "13:00",
                icon: <Stop/>,
                title: "End Hacking Time",
                person: "",
            },
            {
                time: "13:00 - 14:00",
                icon: <Restaurant/>,
                title: "Lunch",
                person: "",
            },
            {
                time: "14:00 - 16:00",
                icon: <Campaign/>,
                title: "Participant Challenge Presentations",
                person: "",
            }, {
                time: "17:00 - 18:00",
                icon: <EmojiEvents/>,
                title: "Awards",
                person: "",
            }, {
                time: "18:00",
                icon: <Celebration/>,
                title: "Begin After Party",
                person: "",
            }
        ]
    },
    {
        year: 2024,
        subtitle: "Saturday 06.04",
        dayTwo: [
            {
                time: "08:00 - 09:00",
                icon: <Restaurant/>,
                title: "Breakfast",
                person: "",
            },
            {
                time: "13:00",
                icon: <Stop/>,
                title: "End Hacking Time",
                person: "",
            },
            {
                time: "13:00 - 14:00",
                icon: <Restaurant/>,
                title: "Lunch",
                person: "",
            },
            {
                time: "14:00 - 17:00",
                icon: <Campaign/>,
                title: "Challenge Presentations",
                person: "",
            }, {
                time: "17:00 - 17:15",
                icon: <EmojiEvents/>,
                title: "Feedback & Awards",
                person: "",
            }, {
                time: "17:15",
                icon: <Celebration/>,
                title: "Drinks & Networking",
                person: "",
            }
        ]
    }
]

export function Table(props) {
    return (
        <Card>
            <Box sx={{
                height: "5rem",
                background: "linear-gradient(150deg, rgba(58,12,163,1) 0%, rgba(114,9,183,1) 100%)",
                display: "flex",
                alignItems: "center",
                pl: 3
            }}>
                <Stack alignItems={"center"} spacing={2} direction={"row"}>
                    <Typography sx={{fontSize: "1.5rem", fontWeight: 600}}>{props.title}</Typography>
                    <Typography sx={{fontSize: "1.25rem", fontWeight: 300}}>{props.subtitle}</Typography>
                </Stack>
            </Box>

            {
                props.data.map((item, index) => (
                    <>
                        <Box sx={{pt: 3, pb: 3}}>
                            <Container>
                                <Grid container spacing={3}>
                                    <Grid item xs={2} sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignContent: "center",
                                        alignItems: "center"
                                    }}>
                                        <IconContainer icon={item.icon}/>
                                    </Grid>
                                    <Grid item xs={8} sx={{display: "flex", alignItems: "center"}}>
                                        <Box>
                                            <Typography color={"text.disabled"} noWrap>
                                                {item.time}
                                            </Typography>
                                            <Typography sx={{fontWeight: 600}} noWrap>
                                                {item.title}
                                            </Typography>
                                            <Typography color={"text.disabled"} noWrap>
                                                {item.person}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={2}/>
                                </Grid>
                            </Container>
                        </Box>
                        {index !== props.data.length - 1 ? <Divider/> : undefined}
                    </>
                ))
            }
        </Card>
    )
}

export function TimeTable() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <Container sx={{paddingBottom: 10, paddingTop: 10}}>
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Typography variant={"h2"} gutterBottom>Time Table</Typography>
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                    <IconButton
                        disabled={dayOneYears.length - 1 === currentIndex}
                        onClick={() => {
                            setCurrentIndex(currentIndex + 1);
                        }}
                    >
                        <KeyboardArrowLeft/>
                    </IconButton>
                    <Chip
                        label={dayOneYears[currentIndex].year}
                        color={currentIndex === 0 ? "primary" : undefined}
                    />
                    <IconButton
                        disabled={currentIndex === 0}
                        onClick={() => {
                            setCurrentIndex(currentIndex - 1);
                        }}
                    >
                        <KeyboardArrowRight/>
                    </IconButton>
                </Stack>
            </Box>
            <Grid container spacing={5}>
                <Grid item md={6} xs={12}>
                    <Table data={dayOneYears[currentIndex].dayOne} title={"Day 1"}
                           subtitle={dayOneYears[currentIndex].subtitle}/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Table data={dayTwoYears[currentIndex].dayTwo} title={"Day 2"}
                           subtitle={dayTwoYears[currentIndex].subtitle}/>
                </Grid>
            </Grid>
        </Container>
    )
}