import {Box, Container, Grid, ImageList, ImageListItem, Typography} from "@mui/material";
import React from "react";
import DSC02572 from '../../assets/images/event/DSC02572_1920.webp'
import DSC02594 from '../../assets/images/event/DSC02594_1920.webp'
import DSC02601 from '../../assets/images/event/DSC02601_1920.webp'
import DSC02604 from '../../assets/images/event/DSC02604_1920.webp'
import DSC02609 from '../../assets/images/event/DSC02609_1920.webp'
import DSC02617 from '../../assets/images/event/DSC02617_1920.webp'
import DSC02619 from '../../assets/images/event/DSC02619_1920.webp'
import DSC02630 from '../../assets/images/event/DSC02630_1920.webp'
import DSC02632 from '../../assets/images/event/DSC02632_1920.webp'
import DSC02635 from '../../assets/images/event/DSC02635_1920.webp'
import DSC02638 from '../../assets/images/event/DSC02638_1920.webp'
import DSC02639 from '../../assets/images/event/DSC02639_1920.webp'
import DSC02643 from '../../assets/images/event/DSC02643_1920.webp'
import DSC02645 from '../../assets/images/event/DSC02645_1920.webp'
import DSC02646 from '../../assets/images/event/DSC02646_1920.webp'
import DSC02659 from '../../assets/images/event/DSC02659_1920.webp'
import DSC02677 from '../../assets/images/event/DSC02677_1920.webp'
import DSC02680 from '../../assets/images/event/DSC02680_1920.webp'
import DSC02762 from '../../assets/images/event/DSC02762_1920.webp'
import DSC02810 from '../../assets/images/event/DSC02810_1920.webp'
import DSC02820 from '../../assets/images/event/DSC02820_1920.webp'
import DSC02823 from '../../assets/images/event/DSC02823_1920.webp'
import DSC02824 from '../../assets/images/event/DSC02824_1920.webp'
import DSC02830 from '../../assets/images/event/DSC02830_1920.webp'
import DSC02868 from '../../assets/images/event/DSC02868_1920.webp'
import DSC02870 from '../../assets/images/event/DSC02870_1920.webp'
import DSC02872 from '../../assets/images/event/DSC02872_1920.webp'
import DSC02876 from '../../assets/images/event/DSC02876_1920.webp'
import DSC02879 from '../../assets/images/event/DSC02879_1920.webp'
import DSC02886 from '../../assets/images/event/DSC02886_1920.webp'
import DSC02889 from '../../assets/images/event/DSC02889_1920.webp'
import DSC02903 from '../../assets/images/event/DSC02903_1920.webp'
import DSC02908 from '../../assets/images/event/DSC02908_1920.webp'
import DSC02914 from '../../assets/images/event/DSC02914_1920.webp'
import DSC02919 from '../../assets/images/event/DSC02919_1920.webp'
import DSC02920 from '../../assets/images/event/DSC02920_1920.webp'
import DSC02923 from '../../assets/images/event/DSC02923_1920.webp'
import DSC02926 from '../../assets/images/event/DSC02926_1920.webp'
import DSC02928 from '../../assets/images/event/DSC02928_1920.webp'
import DSC02931 from '../../assets/images/event/DSC02931_1920.webp'
import DSC02941 from '../../assets/images/event/DSC02941_1920.webp'
import DSC02946 from '../../assets/images/event/DSC02946_1920.webp'
import DSC02949 from '../../assets/images/event/DSC02949_1920.webp'
import DSC02957 from '../../assets/images/event/DSC02957_1920.webp'
import DSC02962 from '../../assets/images/event/DSC02962_1920.webp'
import DSC02969 from '../../assets/images/event/DSC02969_1920.webp'
import DSC02974 from '../../assets/images/event/DSC02974_1920.webp'
import DSC02983 from '../../assets/images/event/DSC02983_1920.webp'
import DSC02992 from '../../assets/images/event/DSC02992_1920.webp'
import DSC02998 from '../../assets/images/event/DSC02998_1920.webp'
import DSC03006 from '../../assets/images/event/DSC03006_1920.webp'
import DSC03022 from '../../assets/images/event/DSC03022_1920.webp'
import DSC03032 from '../../assets/images/event/DSC03032_1920.webp'
import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";


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
        <HackHPIWrapper>
            <Container sx={{paddingTop: 10, paddingBottom: 10}} maxWidth={"xl"}>
                <Typography variant={"h1"} gutterBottom>Gallery</Typography>
                <Grid container spacing={7} alignItems="center">
                    {/*<Grid item xs={12} md={4}>
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
                </Grid> */}
                    <Grid item xs={12} md={12}>
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
        </HackHPIWrapper>
    )

}