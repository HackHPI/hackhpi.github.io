"use client"
import {Box, Container, Grid, Paper, Stack, Typography, useTheme} from "@mui/material";
import SebastianUlm from "../../assets/images/jury/SebastianUlm.jpg"
import HolgerRhinow from "../../assets/images/jury/HolgerRhinow.png"
import FlorianBreipohl from "../../assets/images/jury/FlorianBreipohl.jpeg"
import MonaGhazi from "../../assets/images/jury/MonaGhazi.png"
import {WindowCard} from "../WindowCard/WindowCard";

const jury = {
    primary: [
        {
            name: "Sebastian Ulm",
            position: "Head of Urban Innovation, Climate Tech Hub e.V.",
            profilePicture: SebastianUlm.src,
            description: "Sebastian built Urban Innovation, a project of the Climate Tech Hub, and has led it since 2021. His career in business development has included working as a consultant on behalf of the German Federal Ministry for Economic Affairs and Energy, for the German Energy Solutions Initiative and the Ministry's market entry program at eclareon GmbH, as well as working at the German-Indonesian Chamber of Industry and Commerce in Jakarta. With many years of experience in international cooperation around the globe, Sebastian builds strong networks between ecosystems to foster exchange and innovation.",
        },
        {
            name: "Dr. Holger Rhinow",
            position: "Head of HPI Maker Universe",
            profilePicture: HolgerRhinow.src,
            description: "Dr. Holger Rhinow is an expert in design thinking and innovation management, currently heading the HPI Maker Universe at the Hasso Plattner Institute, Potsdam. His role involves leading projects, aimed at fostering a vibrant research and innovation environment. With a focus on integrating advanced technologies, Holger’s initiatives provide support for student and researcher projects. Holger has authored numerous publications that delve into the nuances of design thinking, organizational learning, and innovation. He holds a doctorate in from the University of Potsdam.",
        },
        {
            name: "Florian Breipohl",
            position: "CEO at EnerKíte",
            profilePicture: FlorianBreipohl.src,
            description: "As the CEO of EnerKíte Airborne Wind Energy Converters, Florian Breipohl and his team are spearheading the global energy transition. Collaborating with partners from aerospace, industry, and wind energy sectors, EnerKíte aims to revolutionize traditional wind energy infrastructure by substituting conventional turbine towers with sophisticated software systems. Their innovative approach involves harnessing robust, high-altitude winds using kites to generate electricity on the ground. In his capacity within Airborne Wind Europe, Florian Breipohl actively engages with sector companies to craft EU-wide directives facilitating the introduction of airborne wind power systems to the market. This initiative aims to complement existing wind energy infrastructure with decentralized wind power solutions.",
        },
        {
            name: "Mona Ghazi",
            position: "Founder of the Neuropreneur Institute",
            profilePicture: MonaGhazi.src,
            description: "Mona Ghazi is a multiple award-winning entrepreneur and a PhD(c) in neuro-entrepreneurship. She started studying alongside school at 14 and successfully founded her second software company at 18. At 21, she sold Optimo to a leading global logistics company. As a computer scientist, she learned to program her subconscious to be more efficient and relaxed. She now passes on her experience of starting a business, personal development and neuroscience to other entrepreneurial minds.",
        },
    ],
}

function Jury() {
    const theme = useTheme();
    return (
        <Container sx={{paddingBottom: 10, paddingTop: 10}}>
            <Typography variant={"h2"} gutterBottom>Jury</Typography>
            <Grid container spacing={10}>
                <Grid item xs={12} md={12}>
                    <Stack spacing={3}>
                        {jury.primary.map(judge => (
                            <WindowCard elevation={5} key={judge.name}>
                                <Grid container spacing={5}>
                                    <Grid item xs={12} md={3}>
                                        <Paper sx={{
                                            borderRadius: theme.components.MuiCard.styleOverrides.root.borderRadius,
                                            background: `url(${judge.profilePicture})`,
                                            backgroundPosition: "center",
                                            backgroundSize: "cover",
                                            backgroundColor: "#e0e0e0",
                                            aspectRatio: "1 / 1 !important",
                                            height: "auto",
                                            maxWidth: "100%"
                                        }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={9}>
                                        <Stack spacing={3}>
                                            <Box>
                                                <Typography variant={"h4"}>{judge.name}</Typography>
                                                <Typography variant={"subtitle"} color={"text.disabled"}>
                                                    {judge.position}
                                                </Typography>
                                            </Box>
                                            <Typography
                                                sx={{
                                                    //display: "-webkit-box",
                                                    //"-webkit-box-orient": "vertical",
                                                    //"-webkit-line-clamp": "7",
                                                    //overflow: "hidden",
                                                    //textOverflow: "ellipsis"
                                                }}>
                                                {judge.description}
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </WindowCard>
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Jury;