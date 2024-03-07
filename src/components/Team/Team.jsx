'use client'
import CedricRischeProfile from "../../assets/images/team/cedric_rische.webp"
import MathildaHeiseProfile from "../../assets/images/team/mathilda_heise.webp"
import MattiSchmidtProfile from "../../assets/images/team/matti_schmidt.webp"
import NikolasRiegerProfile from "../../assets/images/team/nikolas_rieger.webp"
import TanjaLehmannProfile from "../../assets/images/team/tanja_lehmann.webp"
import TheoKlinkeProfile from "../../assets/images/team/theo_klinke.webp"
import ViktorKalvodaProfile from "../../assets/images/team/viktor_kalvoda.webp"
import GeromeQuantmeyerProfile from "../../assets/images/team/gerome_quantmeyer.webp"
import UliPrantzProfile from "../../assets/images/team/uli_prantz.webp"
import {Avatar, Box, Card, Container, Grid, Link, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {LinkedIn, Mail} from "@mui/icons-material";
import {useEffect, useState} from "react";


const teamMembers = [
    {
        name: "Cedric Rische",
        position: "Team Member",
        linkedIn: "cedric-rische",
        profilePicture: CedricRischeProfile
    },
    {
        name: "Mathilda Heise",
        position: "Team Member",
        linkedIn: "mathilda-heise-9203a3258",
        profilePicture: MathildaHeiseProfile
    },
    {
        name: "Matti Schmidt",
        position: "Professioneller Gitarrenspieler",
        linkedIn: "matti-schmidt-ac",
        profilePicture: MattiSchmidtProfile
    },
    {
        name: "Nikolas Rieger",
        position: "Team Member",
        profilePicture: NikolasRiegerProfile,
        linkedIn: "nikolas-rieger"
    },
    {
        name: "Tanja Lehmann",
        position: "Team Member",
        linkedIn: "tanja-lehmann-36713a265",
        profilePicture: TanjaLehmannProfile
    },
    {
        name: "Theo Klinke",
        position: "Team Member",
        linkedIn: "theo-klinke",
        profilePicture: TheoKlinkeProfile
    },
    {
        name: "Viktor Kalvoda",
        position: "Team Member",
        profilePicture: ViktorKalvodaProfile,
        linkedIn: "viktor-kalvoda-3ab0b62a2",
    },
    {
        name: "Gerome Quantmeyer",
        position: "Team Member",
        profilePicture: GeromeQuantmeyerProfile,
        linkedIn: "gerome-quantmeyer-44a90322b"
    },
    {
        name: "Uli Prantz",
        position: "Team Member",
        profilePicture: UliPrantzProfile,
        linkedIn: "uli-prantz-100234227"
    },


]


function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

function Team() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up("sm"));
    const [imageSize, setImageSize] = useState("9rem")

    useEffect(() => {
        setImageSize(matches ? "9rem" : "7rem")
    }, [matches]);

    return (
        <Container sx={{paddingTop: 10, paddingBottom: 10}}>
            <Typography variant={"h2"} component={"h1"} gutterBottom>Meet the team</Typography>
            <Grid container spacing={3}>
                {teamMembers.sort((a, b) => {
                    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    // names must be equal
                    return 0;
                }).map(teamMember => {

                    const avatarPrep = stringAvatar(teamMember.name);
                    return (
                        <Grid item xs={6} md={3} key={teamMember.name}>
                            <Card elevation={5}
                                  sx={{padding: 2, mt: "calc(" + imageSize + " / 2)", overflow: "inherit"}}>
                                <Box sx={{position: "relative"}}>
                                    <Box sx={{
                                        position: "absolute",
                                        transform: "translate(0%,calc(-" + imageSize + " / 2 - " + theme.spacing(2) + "))",
                                        width: "100%",
                                        height: "auto",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                    >
                                        <Avatar src={teamMember.profilePicture.src} sx={{
                                            height: imageSize,
                                            width: imageSize,
                                            boxShadow: 7,
                                            mb: 2,
                                            ...avatarPrep.sx
                                        }}
                                                alt={"Image of " + teamMember.name}
                                        >
                                            {avatarPrep.children}
                                        </Avatar>
                                    </Box>

                                </Box>

                                <Typography pt={"calc( " + imageSize + " / 2)"}>{teamMember.name}</Typography>
                                {/*<Typography color={"text.disabled"}>{teamMember.position}</Typography>*/}
                                <Stack direction={"row"} spacing={1} pt={2}>
                                    {/* {teamMember.mail ? <Link href={"mailto:" + teamMember.mail}
                                                             color={"inherit"}><Mail/></Link> : null} */}
                                    {teamMember.linkedIn ?
                                        <Link href={"https://linkedin.com/in/" + teamMember.linkedIn}
                                              target={"_blank"}
                                              color={"inherit"}><LinkedIn/></Link> : null}
                                </Stack>
                            </Card>
                        </Grid>
                    )
                })}

            </Grid>
        </Container>
    )

}

export default Team