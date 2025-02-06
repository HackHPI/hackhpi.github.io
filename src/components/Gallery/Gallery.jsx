'use client'
import {Box, Button, Container} from "@mui/material";
import React, {useState} from "react";
import images from "../../assets/images/event/Images";
import {GalleryDialog} from "./GalleryDialog/GalleryDialog";

export function Gallery() {

    const [galleryTab, setGalleryTab] = useState(0)
    const [isGalleryOpen, setIsGalleryOpen] = useState(false)

    const oneThird = Math.floor(images[galleryTab].items.length / 3);
    const firstImages = images[galleryTab].items.slice(0, oneThird)
    const secondImages = images[galleryTab].items.slice(oneThird, oneThird * 2)
    const thirdImages = images[galleryTab].items.slice(oneThird * 2, images[galleryTab].items.length)

    const baseSeconds = 10

    function renderImages(imageList, offset) {
        return <Box sx={{position: "relative", overflow: "hidden", height: "200px"}}>
            <Box sx={{
                position: "absolute",
                top: "0px",
                left: `${offset}px`,
                overflow: "hidden",
                whitespace: "nowrap",
                animation: `bannermove ${baseSeconds * firstImages.length}s linear infinite`,
                height: "100%",
                margin: "0.5em",
                display: "flex"
            }}>
                {imageList.map(image => <Box
                    sx={{
                        margin: "0.5em",
                        aspectRatio: "16/10",
                        background: `url(${image.src})`,
                        backgroundSize: "cover",
                        height: "100%"
                    }}
                    key={image.src}
                />)}
                {imageList.map(image => <Box
                        sx={{
                            margin: "0.5em",
                            aspectRatio: "16/10",
                            background: `url(${image.src})`,
                            backgroundSize: "cover",
                            height: "100%"
                        }}
                        key={image.src}

                    />
                )}
            </Box>
        </Box>
    }

    return (
        <Box sx={{pt: 10, pb: 10}} id={"images"}>
            {renderImages(firstImages, -100)}
            {renderImages(secondImages, -150)}
            {renderImages(thirdImages, -200)}
            <Container sx={{display: "flex", justifyContent: "flex-end"}}>
                <Button variant="contained" color={"primary"} sx={{mt: 3}} onClick={() => setIsGalleryOpen(true)}>View full Gallery</Button>
            </Container>
            <GalleryDialog isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)}/>
        </Box>
    )

}