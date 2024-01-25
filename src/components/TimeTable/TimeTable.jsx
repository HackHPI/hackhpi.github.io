import {Avatar, Box, Card, Container, Divider, Grid, Stack, Typography} from "@mui/material";

export function TimeTable() {

    const timetable = (
        <Card>
            <Box sx={{
                height: "5rem",
                backgroundColor: "primary.main",
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
                            <Avatar sx={{width: "70%", height: "auto", aspectRatio: "1/1"}}>SO</Avatar>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography color={"text.disabled"}>
                                08:00-09:00
                            </Typography>
                            <Typography sx={{fontWeight: 600}}>
                                Keynote
                            </Typography>
                            <Typography color={"text.disabled"}>
                                by someone
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
                            <Avatar sx={{width: "70%", height: "auto", aspectRatio: "1/1"}}>SO</Avatar>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography color={"text.disabled"}>
                                08:00-09:00
                            </Typography>
                            <Typography sx={{fontWeight: 600}}>
                                Keynote
                            </Typography>
                            <Typography color={"text.disabled"}>
                                by someone
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Card>
    )

    return (
        <Container maxWidth={"xl"}>
            <Typography variant={"h1"} gutterBottom>Time Table</Typography>
            <Grid container spacing={5}>
                <Grid item md={6} xs={12}>
                    {timetable}
                </Grid>
                <Grid item md={6} xs={12}>
                    {timetable}

                </Grid>

            </Grid>
        </Container>
    )
}