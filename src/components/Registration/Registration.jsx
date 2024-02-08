import { Container, FormControl, FormLabel, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";

const textfield = {
    minWidth: "100%"
}

function Registration() {
    return (
        <Container sx={{ pt: 10, pb: 10 }} maxWidth={"xl"}>
            <Typography variant={"h1"} sx={{ mb: "2rem" }}>Registration</Typography>
            <Grid container spacing={2}>
                <Typography variant={"h3"}>Personal Data</Typography>
                <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <FormControl style={textfield}>
                                <FormLabel>First Name</FormLabel>
                                <TextField type="text" placeholder="First Name" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl style={textfield}>
                                <FormLabel>Last Name</FormLabel>
                                <TextField type="text" placeholder="Last Name" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl style={textfield}>
                                <FormLabel>Date of birth</FormLabel>
                                <TextField type="date" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl style={textfield}>
                                <FormLabel>Gender</FormLabel>
                                <Select displayEmpty>
                                    <MenuItem value="">None</MenuItem>
                                    <MenuItem value={1}>male</MenuItem>
                                    <MenuItem value={2}>female</MenuItem>
                                    <MenuItem value={3}>others</MenuItem>
                                    <MenuItem value={4}>prefer not to state</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    )
}
export default Registration