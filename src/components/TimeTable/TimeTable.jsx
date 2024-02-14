import {Avatar, Box, Card, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";

export function TimeTable() {

    const timetable = (
        <Card>
            <Box sx={{
                height: "5rem",
                background: "linear-gradient(150deg, rgba(58,12,163,1) 0%, rgba(114,9,183,1) 100%)",
                display: "flex",
                alignItems: "center",
                pl: 3
            }}>
                <Stack alignItems={"center"} spacing={2} direction={"row"}>
                    <Typography sx={{fontSize: "1.5rem", fontWeight: 600}}>Day 1</Typography>
                    <Typography sx={{fontSize: "1.25rem", fontWeight: 300}}>06.04.2024</Typography>
                </Stack>
            </Box>
            <Box sx={{pt: 3, pb: 3}}>
                <Container>
                    <Grid container alignItems={"center"} spacing={3}>
                        <Grid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                            <Avatar sx={{width: "70%", height: "auto", aspectRatio: "1/1", backgroundColor: "background.default"}}>SO</Avatar>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography color={"text.disabled"}>
                                08:00-09:00
                            </Typography>
                            <Typography sx={{fontWeight: 600}}>
                                Hey There!
                            </Typography>
                            <Typography color={"text.disabled"}>
                                a Person
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Divider/>
            <Box sx={{pt: 3, pb: 3}}>
                <Container>
                    <Grid container alignItems={"center"} spacing={3}>
                        <Grid item xs={2} sx={{display: "flex", justifyContent: "center"}}>
                            <Avatar sx={{width: "70%", height: "auto", aspectRatio: "1/1", backgroundColor: "background.default"}}>SO</Avatar>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography color={"text.disabled"}>
                                08:00-09:00
                            </Typography>
                            <Typography sx={{fontWeight: 600}}>
                                Nothing to see here yet
                            </Typography>
                            <Typography color={"text.disabled"}>
                                But soon, something will be here
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Card>
    )

    return (
        <HackHPIWrapper>
            <Container sx={{paddingBottom: 10}}>
                <Typography variant={"h2"} component={"h1"} gutterBottom>Time Table</Typography>
                <Box sx={{position: "relative"}}>
                    <Box sx={{
                        position: "absolute",
                        transform: "translate(-50%,-50%)",
                        left: "50%",
                        top: "50%",
                        zIndex: 1000,
                    }}>
                        <Typography variant={"h5"} fontWeight={"bold"} >
                            Will be announced soon
                        </Typography>
                    </Box>
                    <Box sx={{filter: "blur(10px)"}}>
                        <Grid container spacing={5}>
                            <Grid item md={6} xs={12}>
                                {timetable}
                            </Grid>
                            <Grid item md={6} xs={12}>
                                {timetable}
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </HackHPIWrapper>
    )
}