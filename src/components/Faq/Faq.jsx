'use client'
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Grid,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import React from "react";
import {KeyboardArrowRight} from "@mui/icons-material";
import {WindowCard} from "../WindowCard/WindowCard.jsx";
import {Masonry} from "@mui/lab";
import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";

let faqs = [
    {
        name: "General",
        items: [
            {
                title: "What is a hackathon?",
                text: "A hackathon is an amazing event where students come together to collaborate to turn crazy ideas into real projects. \n" +
                    "In the case of HackHPI for two consecutive days, students come together on HPI's campus in Potsdam, Germany to be creative, challenge the status quo, implement innovative ideas using code, gadgets and open data, create meaningful impact, and also to simply have a great time!"
            }, {
                title: "What's so special about HackHPI?",
                text: "There are very few hackathons focusing on social issues; we want to fix that and give you the chance to change the world for the better by building applications that truly matter! You will also have the opportunity to get in touch with our awesome partners, slip into their shoes and solve real-world challenges using their APIs and expertise."
            }, {
                title: "Will HackHPI 2024 take place onsite?",
                text: "Yes, and that's quite a sure thing. We believe that Hackathons need the human contact that only in-person events can provide, and we're glad to announce that the HackHPI 2024 will be an in-presence only event!"
            }, {
                title: "Are there any costs for me?",
                text: "Nope! HackHPI is completely free, and we provide you with food, drinks (and a lot of caffeine! :D) during the whole Hackathon. Unfortunately, we are not able to provide travel reimbursements. However, as an attendee, your confirmation email will include a link to our DB Event Ticket to receive a discount when booking via DB."
            }, {
                title: "Where can I stay during the Hackathon?",
                text: "This is an all-night Hackathon, meaning that we won't stop until the last one standing. We will provide rooms in which you can sleep or just rest, but you're required to bring your own sleeping bag and air mattress. We're also planning on organizing a couch surfing option from Thursday to Friday for everybody coming early. If you wish to participate in this, whether you want to stay or offer a bed, please note that down when filling in the application form."
            }, {
                title: "How can I get to the location?",
                text: "Take S7 from Berlin Central Station (\"Hauptbahnhof\") towards Potsdam and exit at Griebnitzsee."
            }, {
                title: "How should I prepare?",
                text: "Bring your laptop and a charger, comfortable clothes, and, above all, motivation to hack! You can dive into the topic of health in advance, but there will be introductory sessions as well."
            }
        ]
    },
    {
        name: "Application",
        items: [
            {
                title: "How does the application process work?",
                text: "You can apply by filling all required information into the form during the application phases. All we need is some basic information. Then you’ll be on your way to HackHPI in no time!\n" +
                    "We kindly ask you to only do so if you are planning to attend the hackathon, as you might otherwise take someone else's place. We will then evaluate your application and inform everyone by the mid of March. Even if you are not selected at the beginning, you might have the chance to move up in our listings if someone else decides to leave. In cases where you need a prioritized response, indicate it in the form and we will try to contact you faster.\n"
            },
            {
                title: "Who can attend and are there any requirements to attend?",
                text: "If you’re a university or high-school student, you're good to go! We believe that diverse teams come up with more creative solutions. A hackathon should be a way to experience teamwork and work on your abilities. We therefore encourage every major to apply, and give a warm welcome to young professionals as well. However, due to german law, every participant has to be at least 18 years old. There are no further requirements"
            },
            {
                title: "How can we apply as a team?",
                text: "Teams will consist of about 5 people. In the registration form, you will be able to fill in with whom you would like to be in a team. However, everyone has to register themselves!"
            },
            {
                title: "When will applications close??",
                text: "Applications will open 16th January - 28th February."
            },
            {
                title: "When will I hear back?",
                text: "Please note that your acceptance must be confirmed. As the event gets closer, you will receive a notification to confirm your attendance."
            }
        ]
    },
    {
        name: "Hacking",
        items: [
            {
                title: "What are the challenges?",
                text: "All challenges are connected to the subject of health, but we cannot tell you what awaits you. And honestly, who wants to miss the thrill of a surprise challenge? Anyway, the exact challenges will be announced at the event, so stay tuned!"
            },
            {
                title: "What are the prizes?",
                text: "There’ll be an overall prize pool for the best teams in different categories. You will find out more at the event!"
            },
            {
                title: "How big are the teams?",
                text: "Each team will consist of about 5 people. Teams of less than 4 people will be filled up with great people, and teams of more than 6 people will be split into smaller teams, as we have found that teams that are too small or too large are not ideal for our 2-day event."
            },
            {
                title: "What if I don’t have a team?",
                text: "Don't worry! Most of our participants don't have a team while applying. That's why we've come up with a few ways for you to get to know other participants before and during the HackHPI hackathon. Just register as an individual participant and we'll help you connect with others before and during the event!"
            },
            {
                title: "Is there a code of conduct?",
                text: "Yes. We comply with the MLH's code of conduct, which all attendees, partners, volunteers, and staff are required to agree to. We expect all of our attendees to be respectful and considerate of others. You can find the MLH's code of conduct here (https://static.mlh.io/docs/mlh-code-of-conduct.pdf)."
            },
            {
                title: "What about food and accommodation?",
                text: "HackHPI provides plenty of free food and accommodation at the event. We will provide rooms where you can sleep or just rest. There will be a separate women's sleeping/rest area. This area will be fairly modest, so we recommend bringing a sleeping bag for comfort."
            }
        ]
    }
]


export function Faq() {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const handleListItemClick = (
        event,
        index,
    ) => {
        setSelectedIndex(index);
    };
    return (
        <HackHPIWrapper>
            <Container sx={{paddingTop: 10, paddingBottom: 10}}>
                <Typography variant={"h2"} component={"h1"} sx={{marginBottom: "1rem"}}>Frequently asked
                    questions</Typography>
                <Typography variant={"body1"} sx={{marginBottom: "4rem"}}>Can't find the answer you're looking for? You
                    can
                    always <Link href={"mailto:team@hackhpi.org"} color={"inherit"}>send us an email</Link> with your
                    inquiry!</Typography>
                <Grid container spacing={7}>
                    <Grid item xs={12} md={4}>
                        <Stack spacing={3}>
                            <Card sx={{width: '100%', bgcolor: 'background.paper'}}>
                                <List component="nav" aria-label="main mailbox folders">
                                    {
                                        faqs.map((faq, idx) => (
                                            <ListItemButton
                                                key={faq.name}
                                                selected={selectedIndex === idx}
                                                onClick={(event) => handleListItemClick(event, idx)}
                                                sx={{padding: 1}}
                                            >
                                                <ListItemIcon sx={{justifyContent: "center"}}>
                                                    <KeyboardArrowRight
                                                    />
                                                </ListItemIcon>
                                                <Typography sx={{fontSize: "1rem"}} noWrap>{faq.name}</Typography>
                                            </ListItemButton>
                                        ))
                                    }
                                </List>
                            </Card>
                            <Card>
                                <CardContent>

                                    <Typography gutterBottom variant={"h6"}
                                                fontWeight={"bold"}>Still have Questions?</Typography>
                                    <Typography>If you didn't find what you are looking for, feel free to
                                        ask!</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color={"inherit"} href={"mailto:team@hackhpi.org"}>Contact us</Button>
                                </CardActions>
                            </Card>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Masonry spacing={3} columns={matches ? 2 : 1}>
                            {
                                faqs[selectedIndex].items.map((faq, idx) => (
                                        <Box key={idx}>
                                            <WindowCard>
                                                <Typography gutterBottom variant={"h6"}
                                                            fontWeight={"bold"}>{faq.title}</Typography>
                                                <Typography>
                                                    {faq.text}
                                                </Typography>
                                            </WindowCard>

                                            {/*
                            <Accordion key={faq.title} >
                                    <AccordionSummary
                                        expandIcon={<ExpandMore fontSize={"large"}/>}
                                        aria-controls={faq.title+"-content"}
                                        id={faq.title+"-header"}
                                        sx={{fontSize: "1.5rem"}}
                                        noWrap
                                    >
                                        {faq.title}
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </AccordionDetails>
                                </Accordion>
                                */}
                                        </Box>
                                    )
                                )

                            }
                        </Masonry>

                    </Grid>
                </Grid>
            </Container>
        </HackHPIWrapper>
    )

}
