import AnNguyedProfile from "../../assets/images/team/an_nguyen.jpg"
import BenediktHelfrichProfile from "../../assets/images/team/benedikt_helfrich.jpg"
import CedricRischeProfile from "../../assets/images/team/cedric_rische.jpg"
import LeonHermannProfile from "../../assets/images/team/leon_hermann.jpg"
import MathildaHeiseProfile from "../../assets/images/team/mathilda_heise.jpg"
import MattiSchmidtProfile from "../../assets/images/team/matti_schmidt.jpg"
import BenjaminFrostProfile from "../../assets/images/team/benjamin_frost.jpg"
import NikolasRiegerProfile from "../../assets/images/team/nikolas_rieger.jpg"
import TanjaLehmannProfile from "../../assets/images/team/tanja_lehmann.jpg"
import TheoKlinkeProfile from "../../assets/images/team/theo_klinke.jpg"
import {Avatar, Box, Card, Container, Grid, Link, Stack, Typography, useTheme} from "@mui/material";
import {LinkedIn, Mail} from "@mui/icons-material";


const teamMembers = [
    {
        name: "Cedric Rische",
        position: "Team Member",
        mail: "cedric.rische@student.hpi.de",
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

const imageSize="9rem"

function Team() {
    const theme = useTheme()
    return (
        <Container sx={{paddingBottom: 10}} maxWidth={"xl"}>
            <Typography variant={"h1"} gutterBottom>Meet the team</Typography>
            <Grid container spacing={3}>
                {teamMembers.map(teamMember => {

                    const avatarPrep = stringAvatar(teamMember.name);
                    return (
                        <Grid item xs={6} md={3} key={teamMember.name}>
                            <Card elevation={5} sx={{padding: 2, mt: "calc("+imageSize+" / 2)", overflow: "inherit"}}>
                                <Box sx={{position: "relative"}}>
                                    <Box sx={{
                                        position: "absolute",
                                        transform: "translate(0%,calc(-"+imageSize+" / 2 - " + theme.spacing(2) + "))",
                                        width: "100%",
                                        height: "auto",
                                        pr: 1,
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
                                        >
                                            {avatarPrep.children}
                                        </Avatar>
                                    </Box>

                                </Box>

                                <Typography pt={"calc( "+imageSize+" / 2)"}>{teamMember.name}</Typography>
                                <Typography color={"text.disabled"}>{teamMember.position}</Typography>
                                <Stack direction={"row"} spacing={1} pt={2}>
                                    {teamMember.mail ? <Link href={"mailto:" + teamMember.mail}
                                                             color={"inherit"}><Mail/></Link> : null}
                                    {teamMember.linkedIn ?
                                        <Link href={"https://linkedin.com/in/" + teamMember.linkedIn} target={"_blank"}
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