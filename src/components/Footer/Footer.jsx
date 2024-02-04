import {Card, Container, Grid, IconButton, Link, Stack, Typography} from "@mui/material";
import {Facebook, GitHub, Instagram, LinkedIn, Mail, Twitter} from "@mui/icons-material";
import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";

const socials = [
    {
        icon: <GitHub/>,
        link: "https://github.com/HackHPI/hackhpi.github.io",
    },
    {
        icon: <LinkedIn/>,
        link: "https://www.linkedin.com/company/hackhpi",
    },
    {
        icon: <Instagram/>,
        link: "https://www.instagram.com/hack.hpi",
    },
    {
        icon: <Facebook/>,
        link: "https://www.facebook.com/HackHPI",
    },
    {
        icon: <Twitter/>,
        link: "https://twitter.com/HackHPI",
    },
    {
        icon: <Mail/>,
        link: "mailto:team@hackhpi.org",
    },
]


function Footer() {

    return (
        <HackHPIWrapper>
            <Card sx={{
                height: "5rem",
                display: "flex",
                alignItems: "center",
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0
            }} elevation={10}>
                <Container maxWidth={"xl"}>
                    <Grid container>
                        <Grid item xs={6} display={"flex"} alignItems={"center"}>
                            <Typography color={"text.disabled"}>© {new Date().getFullYear()} HackHPI. All rights
                                reserved.</Typography>
                        </Grid>
                        <Grid item xs={6} display={"flex"} justifyContent={"end"}>
                            <Stack direction={"row"}>
                                {socials.map((social) => (
                                    <IconButton
                                        sx={{color: "text.secondary"}}
                                        key={social.link}
                                        component={Link}
                                        href={social.link}
                                        target={"_blank"}
                                        rel={"noopener"}
                                    >
                                        {social.icon}
                                    </IconButton>
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Card>
        </HackHPIWrapper>
    )
}

export default Footer