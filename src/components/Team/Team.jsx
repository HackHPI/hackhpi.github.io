'use client'

import CedricRischeProfile2024 from "../../assets/images/team/2024/cedric_rische.webp"
import MathildaHeiseProfile2024 from "../../assets/images/team/2024/mathilda_heise.webp"
import MattiSchmidtProfile2024 from "../../assets/images/team/2024/matti_schmidt.webp"
import NikolasRiegerProfile2024 from "../../assets/images/team/2024/nikolas_rieger.webp"
import TanjaLehmannProfile2024 from "../../assets/images/team/2024/tanja_lehmann.webp"
import TheoKlinkeProfile2024 from "../../assets/images/team/2024/theo_klinke.webp"
import ViktorKalvodaProfile2024 from "../../assets/images/team/2024/viktor_kalvoda.webp"
import GeromeQuantmeyerProfile2024 from "../../assets/images/team/2024/gerome_quantmeyer.webp"
import UliPrantzProfile2024 from "../../assets/images/team/2024/uli_prantz.webp"

import CedricRischeProfile2025 from "../../assets/images/team/2025/cedric_rische.jpg"
import DanielKissProfile2025 from "../../assets/images/team/2025/daniel_kiss.jpg"
import JeanneAueProfile2025 from "../../assets/images/team/2025/jeanne_aue.jpg"
import MathildaHeiseProfile2025 from "../../assets/images/team/2025/mathilda_heise.jpg"
import MaximilianPiperProfile2025 from "../../assets/images/team/2025/maximilian_piper.jpg"
import NikolasRiegerProfile2025 from "../../assets/images/team/2025/nikolas_rieger.jpg"
import TanjaLehmannProfile2025 from "../../assets/images/team/2025/tanja_lehmann.jpg"
import ViktorKalvodaProfile2025 from "../../assets/images/team/2025/viktor_kalvoda.jpg"
// import GeromeQuantmeyerProfile2025 from "../../assets/images/team/2025/gerome_quantmeyer.jpg"
// import GritManssenProfile2025 from "../../assets/images/team/2025/grit_manssen.jpg"
import {Avatar, Box, Card, Container, Grid, Link, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {LinkedIn} from "@mui/icons-material";
import {useEffect, useState} from "react";


const teamMembers24 = [
    {
        name: "Cedric Rische",
        position: "Team Member",
        linkedIn: "cedric-rische",
        profilePicture: CedricRischeProfile2024
    },
    {
        name: "Mathilda Heise",
        position: "Team Member",
        linkedIn: "mathilda-heise-9203a3258",
        profilePicture: MathildaHeiseProfile2024
    },
    {
        name: "Matti Schmidt",
        position: "Professioneller Gitarrenspieler",
        linkedIn: "matti-schmidt-ac",
        profilePicture: MattiSchmidtProfile2024
    },
    {
        name: "Nikolas Rieger",
        position: "Team Member",
        linkedIn: "nikolas-rieger",
        profilePicture: NikolasRiegerProfile2024
    },
    {
        name: "Tanja Lehmann",
        position: "Team Member",
        linkedIn: "tanja-lehmann-36713a265",
        profilePicture: TanjaLehmannProfile2024
    },
    {
        name: "Theo Klinke",
        position: "Team Member",
        linkedIn: "theo-klinke",
        profilePicture: TheoKlinkeProfile2024
    },
    {
        name: "Viktor Kalvoda",
        position: "Team Member",
        linkedIn: "viktor-kalvoda-3ab0b62a2",
        profilePicture: ViktorKalvodaProfile2024
    },
    {
        name: "Gerome Quantmeyer",
        position: "Team Member",
        linkedIn: "gerome-quantmeyer-44a90322b",
        profilePicture: GeromeQuantmeyerProfile2024
    },
    {
        name: "Uli Prantz",
        position: "Team Member",
        linkedIn: "uli-prantz-100234227",
        profilePicture: UliPrantzProfile2024
    },
]
const teamMembers25 = [
    {
        name: "Cedric Rische",
        position: "Team Member",
        linkedIn: "cedric-rische",
        profilePicture: CedricRischeProfile2025
    },
    {
        name: "Mathilda Heise",
        position: "Team Member",
        linkedIn: "mathilda-heise-9203a3258",
        profilePicture: MathildaHeiseProfile2025
    },
    {
        name: "Grit Manssen",
        position: "Team Member",
        linkedIn: "grit-manssen-0270b023a",
        profilePicture: ""
    },
    {
        name: "Nikolas Rieger",
        position: "Team Member",
        linkedIn: "nikolas-rieger",
        profilePicture: NikolasRiegerProfile2025
    },
    {
        name: "Tanja Lehmann",
        position: "Team Member",
        linkedIn: "tanja-lehmann-36713a265",
        profilePicture: TanjaLehmannProfile2025
    },
    {
        name: "Viktor Kalvoda",
        position: "Team Member",
        linkedIn: "viktor-kalvoda-3ab0b62a2",
        profilePicture: ViktorKalvodaProfile2025
    },
    {
        name: "Maximilian Piper",
        position: "Team Member",
        linkedIn: "maximilian-piper-101088229",
        profilePicture: MaximilianPiperProfile2025
    },
    {
        name: "Daniel Kiss",
        position: "Team Member",
        linkedIn: "kdaniel21",
        profilePicture: DanielKissProfile2025
    },
    {
        name: "Gerome Quantmeyer",
        position: "Team Member",
        linkedIn: "gerome-quantmeyer-44a90322b",
        profilePicture: ""
    },
    {
        name: "Jeanne Aue",
        position: "Team Member",
        linkedIn: "jeanne-aue",
        profilePicture: JeanneAueProfile2025
    },
    {
        name: "Constantin Sachse",
        position: "Team Member",
        linkedIn: "",
        profilePicture: ""
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
            fontSize: "2rem",
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
                {teamMembers25.sort((a, b) => {
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
                                              color={"inherit"}>
                                            <LinkedIn/>
                                        </Link> :
                                        <Link href={null}
                                              style={{ color: "gray" }}>
                                            <LinkedIn/>
                                        </Link>
                                    }
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