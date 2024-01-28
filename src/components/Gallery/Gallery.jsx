import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Box,
    Card,
    Container,
    Grid, ImageList, ImageListItem,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText, Typography
} from "@mui/material";
import React from "react";
import {ExpandMore, KeyboardArrowRight} from "@mui/icons-material";
import DSC02572 from '../../assets/images/event/DSC02572.webp'
import DSC02594 from '../../assets/images/event/DSC02594.webp'
import DSC02601 from '../../assets/images/event/DSC02601.webp'
import DSC02604 from '../../assets/images/event/DSC02604.webp'
import DSC02609 from '../../assets/images/event/DSC02609.webp'
import DSC02617 from '../../assets/images/event/DSC02617.webp'
import DSC02619 from '../../assets/images/event/DSC02619.webp'
import DSC02630 from '../../assets/images/event/DSC02630.webp'
import DSC02632 from '../../assets/images/event/DSC02632.webp'
import DSC02635 from '../../assets/images/event/DSC02635.webp'
import DSC02638 from '../../assets/images/event/DSC02638.webp'
import DSC02639 from '../../assets/images/event/DSC02639.webp'
import DSC02643 from '../../assets/images/event/DSC02643.webp'
import DSC02645 from '../../assets/images/event/DSC02645.webp'
import DSC02646 from '../../assets/images/event/DSC02646.webp'
import DSC02659 from '../../assets/images/event/DSC02659.webp'
import DSC02677 from '../../assets/images/event/DSC02677.webp'
import DSC02680 from '../../assets/images/event/DSC02680.webp'
import DSC02762 from '../../assets/images/event/DSC02762.webp'
import DSC02810 from '../../assets/images/event/DSC02810.webp'
import DSC02820 from '../../assets/images/event/DSC02820.webp'
import DSC02823 from '../../assets/images/event/DSC02823.webp'
import DSC02824 from '../../assets/images/event/DSC02824.webp'
import DSC02830 from '../../assets/images/event/DSC02830.webp'
import DSC02868 from '../../assets/images/event/DSC02868.webp'
import DSC02870 from '../../assets/images/event/DSC02870.webp'
import DSC02872 from '../../assets/images/event/DSC02872.webp'
import DSC02876 from '../../assets/images/event/DSC02876.webp'
import DSC02879 from '../../assets/images/event/DSC02879.webp'
import DSC02886 from '../../assets/images/event/DSC02886.webp'
import DSC02889 from '../../assets/images/event/DSC02889.webp'
import DSC02903 from '../../assets/images/event/DSC02903.webp'
import DSC02908 from '../../assets/images/event/DSC02908.webp'
import DSC02914 from '../../assets/images/event/DSC02914.webp'
import DSC02919 from '../../assets/images/event/DSC02919.webp'
import DSC02920 from '../../assets/images/event/DSC02920.webp'
import DSC02923 from '../../assets/images/event/DSC02923.webp'
import DSC02926 from '../../assets/images/event/DSC02926.webp'
import DSC02928 from '../../assets/images/event/DSC02928.webp'
import DSC02931 from '../../assets/images/event/DSC02931.webp'
import DSC02941 from '../../assets/images/event/DSC02941.webp'
import DSC02946 from '../../assets/images/event/DSC02946.webp'
import DSC02949 from '../../assets/images/event/DSC02949.webp'
import DSC02957 from '../../assets/images/event/DSC02957.webp'
import DSC02962 from '../../assets/images/event/DSC02962.webp'
import DSC02969 from '../../assets/images/event/DSC02969.webp'
import DSC02974 from '../../assets/images/event/DSC02974.webp'
import DSC02983 from '../../assets/images/event/DSC02983.webp'
import DSC02992 from '../../assets/images/event/DSC02992.webp'
import DSC02998 from '../../assets/images/event/DSC02998.webp'
import DSC03006 from '../../assets/images/event/DSC03006.webp'
import DSC03022 from '../../assets/images/event/DSC03022.webp'
import DSC03032 from '../../assets/images/event/DSC03032.webp'


/*
const images={}
await Astro.glob("/src/assets/images/*.jpg").then((files) => {
    files.forEach((file) => {
        const name = file.default.src.split(".")[0].split("/").pop()
        images[name]=file.default
    });
});
k
places.forEach((place)=>{
    const image = images[place.name]
    if(image)
        place.image=image
    else
        place.image = fallbackImage
})
console.log(images)
*/
let faqs = [
    {
        name: "2023",
        subtitle: "about://building-trust-in-digital-state",
        items: [
            DSC02572,
            DSC02594,
            DSC02601,
            DSC02604,
            DSC02609,
            DSC02617,
            DSC02619,
            DSC02630,
            DSC02632,
            DSC02635,
            DSC02638,
            DSC02639,
            DSC02643,
            DSC02645,
            DSC02646,
            DSC02659,
            DSC02677,
            DSC02680,
            DSC02762,
            DSC02810,
            DSC02820,
            DSC02823,
            DSC02824,
            DSC02830,
            DSC02868,
            DSC02870,
            DSC02872,
            DSC02876,
            DSC02879,
            DSC02886,
            DSC02889,
            DSC02903,
            DSC02908,
            DSC02914,
            DSC02919,
            DSC02920,
            DSC02923,
            DSC02926,
            DSC02928,
            DSC02931,
            DSC02941,
            DSC02946,
            DSC02949,
            DSC02957,
            DSC02962,
            DSC02969,
            DSC02974,
            DSC02983,
            DSC02992,
            DSC02998,
            DSC03006,
            DSC03022,
            DSC03032,

        ]
    },
    {
        name: "2022",
        items: [
            {
                title: "Lorem 2",
                text: "Some Text"
            }
        ]
    },
    {
        name: "2021",
        items: [
            {
                title: "Lorem 2",
                text: "Some Text"
            }
        ]
    }
]


export function Gallery() {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (
        event,
        index,
    ) => {
        setSelectedIndex(index);
    };
    return (
        <Container sx={{pt: 5, pb: 5}} maxWidth={"xl"}>
            <Typography variant={"h1"} gutterBottom>Gallery</Typography>
            <Grid container spacing={7} alignItems="center">
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
                    <Box sx={{maxHeight: "30rem", overflowY: "scroll"}}>
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {faqs[selectedIndex].items.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.src}?w=248&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )

}