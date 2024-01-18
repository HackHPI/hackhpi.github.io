import {Box, Container, Grid, Typography} from "@mui/material";

function Location() {

    return (
        <Box sx={{backgroundColor: "primary.main", color: "primary.contrastText"}}>
            <Grid container spacing={5}>
                <Grid item xs={12} md={8}>
                    <Container maxWidth={false}>
                        <Typography variant={"h1"}>Location</Typography>
                    </Container>
                </Grid>
                <Grid item xs={12} md={4}></Grid>
            </Grid>

        </Box>
    )

}

export default Location;