'use client'
import {Box} from "@mui/material";
import React, {useState} from "react";
import Images2023 from "../../assets/images/event/2023/Images2023";
import Images2024 from "../../assets/images/event/2024/Images2024";

function CustomTabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && children}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


let images = [
    {
        name: "2024",
        subtitle: "tomorrow's reality, today's vision. smart cities edition.",
        items: Images2024
    },
    {
        name: "2023",
        subtitle: "about://building-trust-in-digital-state",
        items: Images2023
    }
]


export function Gallery2() {

    const [galleryTab, setGalleryTab] = useState(0)

    const oneThird = Math.floor(images[galleryTab].items.length / 3);
    console.log(oneThird, oneThird * 2, images[galleryTab].items.length)
    const firstThird = images[galleryTab].items.slice(0, oneThird)
    const twoThird = images[galleryTab].items.slice(oneThird, oneThird * 2)
    const threeThird = images[galleryTab].items.slice(oneThird * 2, images[galleryTab].items.length)

    const baseSeconds = 10

    return (
        <Box sx={{pt: 10, pb: 10}} id={"images"}>
            <Box sx={{position: "relative", overflow: "hidden", height: "200px"}}>
                <Box sx={{
                    position: "absolute",
                    top: "0px",
                    left: "-100px",
                    overflow: "hidden",
                    whitespace: "nowrap",
                    animation: `bannermove ${baseSeconds * firstThird.length}s linear infinite`,
                    height: "100%",
                    margin: "0.5em",
                    display: "flex"
                }}>
                    {firstThird.map(image => <Box sx={{
                        margin: "0.5em",
                        aspectRatio: "16/10",
                        background: `url(${image.src})`,
                        backgroundSize: "cover",

                        height: "100%"
                    }}/>)}
                    {firstThird.map(image => <Box sx={{
                        margin: "0.5em",
                        aspectRatio: "16/10",
                        background: `url(${image.src})`,
                        backgroundSize: "cover",
                        height: "100%"
                    }}/>)}

                </Box>

            </Box>
            <Box sx={{position: "relative", overflow: "hidden", height: "200px"}}>
                <Box sx={{
                    position: "absolute",
                    top: "0px",
                    left: "-200px",
                    overflow: "hidden",
                    whitespace: "nowrap",
                    animation: `bannermove ${baseSeconds * twoThird.length}s linear infinite`,
                    height: "100%",
                    margin: "0.5em",
                    display: "flex"
                }}>
                    {twoThird.map(image => <Box sx={{
                        margin: "0.5em",
                        aspectRatio: "16/10",
                        background: `url(${image.src})`,
                        backgroundSize: "cover",
                        height: "100%"
                    }}/>)}
                    {twoThird.map(image => <Box sx={{
                        margin: "0.5em",
                        aspectRatio: "16/10",
                        background: `url(${image.src})`,
                        backgroundSize: "cover",
                        height: "100%"
                    }}/>)}

                </Box>

            </Box>
            <Box sx={{position: "relative", overflow: "hidden", height: "200px"}}>
                <Box sx={{
                    position: "absolute",
                    top: "0px",
                    left: "-300px",
                    overflow: "hidden",
                    whitespace: "nowrap",
                    animation: `bannermove ${baseSeconds * threeThird.length}s linear infinite`,
                    height: "100%",
                    margin: "0.5em",
                    display: "flex"
                }}>
                    {threeThird.map(image => <Box sx={{
                        margin: "0.5em",
                        aspectRatio: "16/10",
                        background: `url(${image.src})`,
                        backgroundSize: "cover",
                        height: "100%"
                    }}/>)}
                    {threeThird.map(image => <Box sx={{
                        margin: "0.5em",
                        aspectRatio: "16/10",
                        background: `url(${image.src})`,
                        backgroundSize: "cover",
                        height: "100%"
                    }}/>)}

                </Box>

            </Box>
        </Box>
    )

}