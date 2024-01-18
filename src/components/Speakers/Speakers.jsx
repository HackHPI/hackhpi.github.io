import {Avatar, Box, Card, Container, Grid, Paper, Stack, Typography, useTheme} from "@mui/material";
import CedricRischeProfile from "../../assets/images/team/cedric_rische.jpg"

const speakers = {
    primary: [
        {
            name: "Cedric Rische",
            position: "Some HackHPI Stuff",
            profilePicture: CedricRischeProfile.src,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget magna vel purus blandit tincidunt. Integer auctor aliquam mauris, sit amet ultricies lacus bibendum sit amet. Nullam scelerisque, orci nec congue tristique, metus justo iaculis odio, ac suscipit arcu metus vitae orci. Nam tincidunt quam eget dui bibendum varius. Ut ultricies et erat non feugiat. In quis ex in turpis mattis vestibulum vitae quis lorem. Pellentesque ac consectetur lacus, imperdiet semper metus. Praesent tincidunt diam augue, vitae luctus quam lacinia ac."
        },
        {
            name: "Cedric Rische",
            position: "Some HackHPI Stuff",
            profilePicture: CedricRischeProfile.src,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget magna vel purus blandit tincidunt. Integer auctor aliquam mauris, sit amet ultricies lacus bibendum sit amet. Nullam scelerisque, orci nec congue tristique, metus justo iaculis odio, ac suscipit arcu metus vitae orci. Nam tincidunt quam eget dui bibendum varius. Ut ultricies et erat non feugiat. In quis ex in turpis mattis vestibulum vitae quis lorem. Pellentesque ac consectetur lacus, imperdiet semper metus. Praesent tincidunt diam augue, vitae luctus quam lacinia ac."
        },
    ],
    secondary: [
        {
            name: "Cedric Rische",
            position: "Some HackHPI Stuff",
            profilePicture: CedricRischeProfile.src,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget magna vel purus blandit tincidunt. Integer auctor aliquam mauris, sit amet ultricies lacus bibendum sit amet. Nullam scelerisque, orci nec congue tristique, metus justo iaculis odio, ac suscipit arcu metus vitae orci. Nam tincidunt quam eget dui bibendum varius. Ut ultricies et erat non feugiat. In quis ex in turpis mattis vestibulum vitae quis lorem. Pellentesque ac consectetur lacus, imperdiet semper metus. Praesent tincidunt diam augue, vitae luctus quam lacinia ac."
        },
        {
            name: "Cedric Rische",
            position: "Some HackHPI Stuff",
            profilePicture: CedricRischeProfile.src,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget magna vel purus blandit tincidunt. Integer auctor aliquam mauris, sit amet ultricies lacus bibendum sit amet. Nullam scelerisque, orci nec congue tristique, metus justo iaculis odio, ac suscipit arcu metus vitae orci. Nam tincidunt quam eget dui bibendum varius. Ut ultricies et erat non feugiat. In quis ex in turpis mattis vestibulum vitae quis lorem. Pellentesque ac consectetur lacus, imperdiet semper metus. Praesent tincidunt diam augue, vitae luctus quam lacinia ac."
        },
        {
            name: "Cedric Rische",
            position: "Some HackHPI Stuff",
            profilePicture: CedricRischeProfile.src,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget magna vel purus blandit tincidunt. Integer auctor aliquam mauris, sit amet ultricies lacus bibendum sit amet. Nullam scelerisque, orci nec congue tristique, metus justo iaculis odio, ac suscipit arcu metus vitae orci. Nam tincidunt quam eget dui bibendum varius. Ut ultricies et erat non feugiat. In quis ex in turpis mattis vestibulum vitae quis lorem. Pellentesque ac consectetur lacus, imperdiet semper metus. Praesent tincidunt diam augue, vitae luctus quam lacinia ac."
        },
    ]
}

function Speakers() {
    const theme = useTheme();
    console.log(theme.components.MuiCard.styleOverrides.root)
    return (
        <Container sx={{paddingBottom: 20}} maxWidth={false}>
            <Typography variant={"h1"} gutterBottom>Speakers</Typography>
            <Grid container spacing={10}>
                <Grid item xs={12} md={6}>
                    <Stack spacing={3}>
                    {speakers.primary.map(speaker => (
                        <Card elevation={5} key={speaker.name} sx={{height: "17rem"}}>
                            <Grid container>
                                <Grid item xs={12} md={3}>
                                    <Paper sx={{
                                        borderRadius: theme.components.MuiCard.styleOverrides.root.borderRadius,
                                        background: `url(${speaker.profilePicture})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundColor: "#e0e0e0",
                                        aspectRatio: "1 / 1 !important",
                                        height: "17rem",
                                    }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={9} p={3}>
                                    <Stack spacing={3}>
                                        <Box>
                                            <Typography variant={"h3"}>{speaker.name}</Typography>
                                            <Typography variant={"subtitle"} color={"text.disabled"}>
                                                {speaker.position}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            sx={{
                                                display: "-webkit-box",
                                                "-webkit-box-orient": "vertical",
                                                "-webkit-line-clamp": "7",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis"
                                            }}>
                                            {speaker.description}
                                        </Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Card>
                    ))}
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Grid container spacing={3}>
                            {speakers.secondary.map(speaker => (
                                <Grid item xs={12} md={6} key={speaker.name}>
                                    <Card elevation={2} sx={{p: 3, height: "17rem"}}>
                                        <Stack spacing={3}>
                                            <Box>
                                                <Grid container spacing={3} alignItems={"center"}>
                                                    <Grid item xs={3}>
                                                        <Avatar src={speaker.profilePicture} sx={{
                                                            aspectRatio: "1 / 1",
                                                            height: "auto",
                                                            width: "100%"
                                                        }}/>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <Typography variant={"h4"}>{speaker.name}</Typography>
                                                        <Typography variant={"subtitle"} color={"text.disabled"}>
                                                            {speaker.position}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>

                                            </Box>
                                            <Typography
                                                sx={{
                                                    display: "-webkit-box",
                                                    "-webkit-box-orient": "vertical",
                                                    "-webkit-line-clamp": "4",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis"
                                                }}
                                            >
                                                {speaker.description}
                                            </Typography>
                                        </Stack>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                </Grid>
            </Grid>


        </Container>
    )
}

export default Speakers;