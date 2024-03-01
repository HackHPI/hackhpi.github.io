import {Avatar, Box, Card, Container, Divider, Grid, Stack, Typography} from "@mui/material";

const dayOne = [
    {
        time: "08:00 - 09:00",
        icon: "",
        title: "Check-In",
        person: "",
    },
    {
        time: "09:00 - 10:00",
        icon: "",
        title: "Breakfast",
        person: "",
    },
    {
        time: "10:00 - 11:00",
        icon: "",
        title: "Introduction",
        person: "",
    },
    {
        time: "12:00 - 13:00",
        icon: "",
        title: "Lunch",
        person: "",
    },
    {
        time: "13:00 - 23:59",
        icon: "",
        title: "Hacking Time",
        person: "",
    }
]

const dayTwo = [
    {
        time: "00:00 - 12:00",
        icon: "",
        title: "Hacking Time",
        person: "",
    },{
        time: "08:00 - 09:00",
        icon: "",
        title: "Breakfast",
        person: "",
    },{
        time: "14:00 - 16:00",
        icon: "",
        title: "Challenge Presentations",
        person: "",
    },{
        time: "17:00 - 18:00",
        icon: "",
        title: "Feedback & Awards",
        person: "",
    },{
        time: "18:00 - *",
        icon: "",
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
                                <Grid container alignItems={"center"} spacing={3}>
                                    <Grid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                                        <Avatar sx={{
                                            width: "70%",
                                            height: "auto",
                                            aspectRatio: "1/1",
                                            backgroundColor: "background.default",
                                            color: "inherit"
                                        }}>
                                            {item.icon}
                                        </Avatar>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography color={"text.disabled"}>
                                            {item.time}
                                        </Typography>
                                        <Typography sx={{fontWeight: 600}}>
                                            {item.title}
                                        </Typography>
                                        <Typography color={"text.disabled"}>
                                            {item.person}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2}/>
                                </Grid>
                            </Container>
                        </Box>
                        {index !== dayOne.length - 1 ? <Divider/> : undefined}
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