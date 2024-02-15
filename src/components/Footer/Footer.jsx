'use client'
import {
    Card,
    Container,
    Divider,
    Grid,
    IconButton,
    Link,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {GitHub, Instagram, LinkedIn, Mail} from "@mui/icons-material";
import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";
import HackHpiLogo from "../../assets/svg/HackHPI_white.svg"

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
        icon: <Mail/>,
        link: "mailto:team@hackhpi.org",
    },
]


function Footer() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));


    return (
        <HackHPIWrapper>
            <Card sx={{
                height: "17rem",
                display: "flex",
                alignItems: "end",
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0,
                pb: 3,
                pt: 3
            }} elevation={10}>
                <Container maxWidth={"xl"}>
                    <Grid container spacing={2}>
                        <Grid item xs={3} sx={{display: matches ? undefined : "none"}}>
                            <Link href={"/"}>
                                <img src={HackHpiLogo.src} style={{height: "5rem", width: "auto"}} alt={"Logo of HPI"}/>
                            </Link>
                        </Grid>
                        <Grid item xs>
                            <Typography variant={"h5"} gutterBottom>HPI</Typography>
                            <Typography>
                                <Link sx={{textDecoration: "none", color: "inherit"}} href={"https://hpi.de/"}>
                                    Website
                                </Link>
                            </Typography>
                            <Typography>
                                <Link sx={{textDecoration: "none", color: "inherit"}}
                                      href={"https://hpi.de/en/media/overview.html"}>
                                    Public Relations
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant={"h5"} gutterBottom>Legal</Typography>
                            <Typography>
                                <Link sx={{textDecoration: "none", color: "inherit"}}
                                      href={"/imprint"}>
                                    Imprint
                                </Link>
                            </Typography>
                            <Typography>
                                <Link sx={{textDecoration: "none", color: "inherit"}}
                                      href={"/privacy"}>
                                    Privacy Policy
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant={"h5"} gutterBottom>More</Typography>

                            <Typography>
                                <Link sx={{textDecoration: "none", color: "inherit"}}
                                      href={"https://static.mlh.io/docs/mlh-code-of-conduct.pdf"}>
                                    Code of Conduct
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{mb: 3, mt: 3}}/>
                    <Grid container>
                        <Grid item xs={12} md={6} display={"flex"} alignItems={"center"}>
                            <Typography color={"text.disabled"}>© {new Date().getFullYear()} HackHPI. All rights
                                reserved.</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} display={"flex"} justifyContent={"end"}>
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