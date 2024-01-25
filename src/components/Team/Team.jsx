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
import {Avatar, Card, Container, Grid, Link, Stack, Typography} from "@mui/material";
import {LinkedIn, Mail} from "@mui/icons-material";


const teamMembers = [
    {
        name: "An Nguyen",
        position: "Team Member",
        mail: "an.nguyen@student.hpi.de",
        linkedIn: "?",
        profilePicture: AnNguyedProfile
    },
    {
        name: "Benedikt Helfrich",
        position: "Team Member",
        mail: "an.nguyen@student.hpi.de",
        linkedIn: "?",
        profilePicture: BenediktHelfrichProfile
    },
    {
        name: "Benjamin Frost",
        position: "Team Member",
        mail: "an.nguyen@student.hpi.de",
        linkedIn: "?",
        profilePicture: BenjaminFrostProfile
    },
    {
        name: "Cedric Rische",
        position: "Team Member",
        mail: "an.nguyen@student.hpi.de",
        linkedIn: "?",
        profilePicture: CedricRischeProfile
    },
    {
        name: "Leon Hermann",
        position: "Team Member",
        mail: "an.nguyen@student.hpi.de",
        linkedIn: "?",
        profilePicture: LeonHermannProfile
    },
    {
        name: "Mathilda Heise",
        position: "Team Member",
        mail: "an.nguyen@student.hpi.de",
        linkedIn: "?",
        profilePicture: MathildaHeiseProfile
    },
    {
        name: "Matti Schmidt",
        position: "Team Member",
        mail: "an.nguyen@student.hpi.de",
        linkedIn: "?",
        profilePicture: MattiSchmidtProfile
    },
    {
        name: "Nikolas Rieger",
        position: "Team Member",
        mail: "an.nguyen@student.hpi.de",
        linkedIn: "?",
        profilePicture: NikolasRiegerProfile
    },
    {
        name: "Tanja Lehmann",
        position: "Team Member",
        mail: "an.nguyen@student.hpi.de",
        linkedIn: "?",
        profilePicture: TanjaLehmannProfile
    },
    {
        name: "Theo Klinke",
        position: "Team Member",
        mail: "an.nguyen@student.hpi.de",
        linkedIn: "?",
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

function Team() {
    return (
        <Container sx={{paddingBottom: 10}}>
            <Typography variant={"h1"} gutterBottom>Meet the team</Typography>
            <Grid container spacing={3}>
                {teamMembers.map(teamMember => {

                    const avatarPrep = stringAvatar(teamMember.name);
                    return (
                        <Grid item xs={12} md={3} key={teamMember.name}>
                            <Card elevation={5} sx={{padding: 3}}>
                                <Avatar src={teamMember.profilePicture.src} sx={{
                                    height: "5rem",
                                    width: "5rem",
                                    mb: 2,
                                    ...avatarPrep.sx
                                }}>
                                    {avatarPrep.children}
                                </Avatar>
                                <Typography>{teamMember.name}</Typography>
                                <Typography color={"text.disabled"}>{teamMember.position}</Typography>
                                <Stack direction={"row"} spacing={1} pt={2}>
                                    {teamMember.mail ? <Link href={"mailto:" + teamMember.mail} color={"inherit"}><Mail/></Link> : null}
                                    {teamMember.linkedIn ?
                                        <Link href={"https://linkedin.com/in/" + teamMember.linkedIn} target={"_blank"} color={"inherit"}><LinkedIn/></Link> : null}
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