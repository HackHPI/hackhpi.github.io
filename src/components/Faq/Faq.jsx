import {Card, Container, Grid, List, ListItemButton, ListItemIcon, Typography} from "@mui/material";
import React from "react";
import {KeyboardArrowRight} from "@mui/icons-material";
import {WindowCard} from "../WindowCard/WindowCard.jsx";

let faqs = [
    {
        name: "cat1",
        items: [
            {
                title: "Lorem 1",
                text: "Some Text"
            }, {
                title: "Lorem 1",
                text: "Some Text"
            }, {
                title: "Lorem 1",
                text: "Some Text"
            }, {
                title: "Lorem 1",
                text: "Some Text"
            }, {
                title: "Lorem 1",
                text: "Some Text"
            }, {
                title: "Lorem 1",
                text: "Some Text"
            },
        ]
    },
    {
        name: "cat2",
        items: [
            {
                title: "Lorem 2",
                text: "Some Text"
            }
        ]
    }
]


export function Faq() {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (
        event,
        index,
    ) => {
        setSelectedIndex(index);
    };
    return (
        <Container sx={{pt: 5, pb: 5}} maxWidth={"xl"}>
            <Typography variant={"h1"} gutterBottom>FAQ</Typography>
            <Grid container spacing={7}>
                <Grid item xs={12} md={4}>
                    <Card sx={{width: '100%', bgcolor: 'background.paper'}}>
                        <List component="nav" aria-label="main mailbox folders">
                            {
                                faqs.map((faq, idx) => (
                                    <ListItemButton
                                        key={faq.name}
                                        selected={selectedIndex === idx}
                                        onClick={(event) => handleListItemClick(event, idx)}
                                        sx={{padding: 2}}
                                    >
                                        <ListItemIcon>
                                            <KeyboardArrowRight
                                                fontSize={"large"}
                                                color={selectedIndex === idx ? "secondary" : undefined}/>
                                        </ListItemIcon>
                                        <Typography sx={{fontSize: "1.5rem"}} noWrap>{faq.name}</Typography>
                                    </ListItemButton>
                                ))
                            }
                        </List>
                    </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={3}>

                        {
                            faqs[selectedIndex].items.map(faq => (
                                    <Grid item xs={12} md={6}>
                                        <WindowCard>
                                            <Typography gutterBottom variant={"h6"}>{faq.title}</Typography>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
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
                                    </Grid>
                                )
                            )

                        }
                    </Grid>

                </Grid>
            </Grid>
        </Container>
    )

}