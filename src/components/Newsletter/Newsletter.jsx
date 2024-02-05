import {Box, Container, Grid, Link, Typography} from "@mui/material";

function Newsletter() {

    return (
        <Box sx={{paddingTop: 15, paddingBottom: 15}}>
            <Container maxWidth={"xl"}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} sx={{display: "flex", alignItems: "center"}}>
                        <iframe
                            width="540"
                            height="350"
                            src="https://0270cddf.sibforms.com/serve/MUIFABVV0kHidS5IzNgtqUvG1rLtlftSX4W4uGTyVdinFJUl058WKYsaVKDfSCnHUEM0gpwj7NC_as6DZ0aiy3J1wPqQg9XgIuVMzy5Q30AsiVpWDZpINCrvwq8kam_Q7zLV9zvBwixIk5NPCKR4416I7E_DBsT42vuRyN5DGcp6qRZQIvs8PijiNYwdZ7AT2JuafhM1Xbr8dBHs"
                            frameBorder="0"
                            scrolling="auto"
                            allowFullScreen
                            //style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"
                        ></iframe>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant={"h2"}
                            gutterBottom
                        >
                            Want to stay in the loop?
                        </Typography>
                        <Typography
                        >
                            Sign up for our newsletter.
                        </Typography>
                        <Typography>
                            We use Brevo as our marketing platform. By clicking below to submit
                            this form, you acknowledge that the information you provided will be
                            transferred to Brevo for processing in accordance with their <Link
                            target="_blank"
                            href="https://www.brevo.com/legal/termsofuse" color={"inherit"}>terms of use</Link
                        >.
                        </Typography>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )

}

export default Newsletter