import {Box, Card, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import {
    Campaign,
    Celebration,
    ConfirmationNumber,
    EmojiEvents,
    EmojiObjects,
    PlayArrow,
    Restaurant,
    Stop
} from "@mui/icons-material";
import {IconContainer} from "../Features/Features";

const dayOne = [
    {
        time: "08:00 - 09:00",
        icon: <ConfirmationNumber/>,
        title: "Check-In",
        person: "",
    },
    {
        time: "09:00 - 10:00",
        icon: <Restaurant/>,
        title: "Breakfast",
        person: "",
    },
    {
        time: "10:00 - 11:00",
        icon: <Campaign/>,
        title: "Introduction & Speakers",
        person: "",
    },
    {
        time: "11:00 - 12:00",
        icon: <EmojiObjects/>,
        title: "Challenge Input Sessions",
        person: "",
    },
    {
        time: "12:00 - 13:00",
        icon: <Restaurant/>,
        title: "Lunch",
        person: "",
    },
    {
        time: "13:00 - 18:00",
        icon: <EmojiObjects/>,
        title: "Idea-Workshop",
        person: "optional",
    },
    {
        time: "13:00 - 13:00 next day (Continuously)",
        icon: <PlayArrow/>,
        title: "Start Hacking Time",
        person: "",
    },
    {
        time: "18:00 - 19:00",
        icon: <Restaurant/>,
        title: "Dinner",
        person: "",
    }
]

const dayTwo = [
    {
        time: "08:00 - 09:00",
        icon: <Restaurant/>,
        title: "Breakfast",
        person: "",
    },
    {
        time: "09:00 - 10:00",
        icon: <EmojiObjects/>,
        title: "Pitch-Workshop",
        person: "optional",
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
        title: "Challenge Presentations",
        person: "",
    }, {
        time: "17:00 - 18:00",
        icon: <EmojiEvents/>,
        title: "Feedback & Awards",
        person: "",
    }, {
        time: "18:00",
        icon: <Celebration/>,
        title: "After Party",
        person: "",
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
                                            <Typography color={"text.disabled"}>
                                                {item.time}
                                            </Typography>
                                            <Typography sx={{fontWeight: 600}}>
                                                {item.title}
                                            </Typography>
                                            <Typography color={"text.disabled"}>
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

    return (
        <Container sx={{paddingBottom: 10, paddingTop: 10}}>
            <Typography variant={"h2"} component={"h1"} gutterBottom>Time Table</Typography>

            <Grid container spacing={5}>
                <Grid item md={6} xs={12}>
                    <Table data={dayOne} title={"Day 1"} subtitle={"05.04"}/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Table data={dayTwo} title={"Day 2"} subtitle={"06.04"}/>
                </Grid>
            </Grid>
        </Container>
    )
}