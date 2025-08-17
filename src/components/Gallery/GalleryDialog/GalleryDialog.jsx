import {
    AppBar,
    Box,
    CardActionArea,
    Container,
    Dialog,
    Grid,
    IconButton,
    Paper,
    Slide,
    Stack,
    Toolbar,
    Typography,
    useMediaQuery
} from "@mui/material";
import {Close, KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import React, {useCallback, useEffect, useState} from "react";
import images from "../../../assets/images/event/Images";
import colorYears from "../../Theme/HackHpiColors";

const Transition = React.forwardRef(function Transition(
    props,
    ref,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export function GalleryDialog(props) {

    const [galleryTab, setGalleryTab] = useState(0)
    const [selectedImage, setSelectedImage] = useState(0)
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));


    const handleKeyboardInput = useCallback((event) => {
        if (event?.key === "ArrowRight") {
            nextImage()
        }
        if (event?.key === "ArrowLeft") {
            previousImage()
        }
    }, [])

    const nextImage = () => {
        setNewImage(selectedImage => {
            return ((selectedImage + 1) % images[galleryTab].items.length)
        })
    };
    const previousImage = () => {
        setNewImage(selectedImage => {
            return ((((selectedImage - 1) % images[galleryTab].items.length) + images[galleryTab].items.length) % images[galleryTab].items.length)
        })
    };


    useEffect(() => {
        document.addEventListener("keydown", handleKeyboardInput, false);

        return () => {
            document.removeEventListener("keydown", handleKeyboardInput, false);
        };
    }, [handleKeyboardInput()]);

    function setNewImage(index) {
        setSelectedImage(index)
    }

    useEffect(() => {
        scrollImageIntoView(selectedImage)
    }, [selectedImage]);

    function scrollImageIntoView(index) {
        const element = document.getElementById("img-" + index);
        if (!element) {
            console.warn("could not find element", "img-" + index, element)
            return
        }
        element.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'})
    }

    const colors = colorYears[props.year] ?? colorYears.default;

    return (
        <Dialog
            fullScreen
            open={props.isOpen}
            onClose={props.onClose}
            TransitionComponent={Transition}
        >
            <Box sx={{flexDirection: "column", height: "100vh !important", width: "100vw"}}
                 onKeyDown={(e) => console.log("KEYDOWN", e)}>
                <AppBar sx={{position: 'absolute'}}>
                    <Toolbar>
                        <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">
                            Gallery
                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={props.onClose}
                            aria-label="close"
                        >
                            <Close/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Box sx={{height: "100%", width: "100%"}}>
                    <Container
                        maxWidth={false}
                        sx={{display: "flex", alignItems: "center", height: "100%", width: "100%"}}
                    >
                        <Grid
                            container
                            alignItems={"center"}
                            sx={{height: "100%", width: "100%"}}
                            direction={!isMobile ? "row" : "column"}
                            wrap={"nowrap"}
                        >
                            <Grid
                                item
                                xs={2}
                                md={2}
                                sx={{
                                    overflow: "scroll",
                                    height: "100%",
                                    width: "100%",
                                    "::-webkit-scrollbar": {display: "none"}
                                }}
                                order={{xs: 2, md: 1}}
                            >
                                <Stack spacing={2} direction={isMobile ? "row" : "column"} sx={{height: "5rem"}}>
                                    {isMobile ? undefined : <Toolbar/>}
                                    {images[galleryTab].items.map((item, index) => <CardActionArea
                                        onClick={() => {
                                            setSelectedImage(index)
                                            scrollImageIntoView(index)
                                        }}
                                        id={"img-" + index}
                                    >
                                        <Paper
                                            elevation={5}
                                            sx={{
                                                width: isMobile ? undefined : "100%",
                                                height: isMobile ? "100%" : undefined,
                                                aspectRatio: "16/10",
                                                background: `url(${item.src})`,
                                                backgroundPosition: "center",
                                                backgroundSize: "cover",
                                                display: "flex",
                                                alignItems: "flex-end"
                                            }}
                                        >
                                            {
                                                (selectedImage === index) ? (
                                                    <Box sx={{
                                                        height: ".4rem",
                                                        background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.primary} 100%)`,
                                                        width: "100%"
                                                    }}/>
                                                ) : undefined
                                            }

                                        </Paper>
                                    </CardActionArea>)}
                                </Stack>
                            </Grid>

                            <Grid item xs={10} md={10} sx={{height: "100%", width: "100%"}} order={{xs: 1, md: 2}}>
                                <Box sx={{
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    pl: (isMobile ? 0 : 3)
                                }}>
                                    <Paper elevation={5} sx={{
                                        mt: 5,
                                        width: "100%",
                                        aspectRatio: "16/9",
                                        background: `url(${images[galleryTab].items[selectedImage].src})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                    }}>
                                        <Box sx={{
                                            p: 3,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            width: "100%",
                                            height: "100%",
                                            "& .MuiIconButton-root:hover": {background: "rgba(19,16,27,.8)"},
                                        }}>
                                            <IconButton
                                                sx={{
                                                    background: "rgba(19,16,27,0.4)",
                                                }}
                                                onClick={previousImage}
                                            >
                                                <KeyboardArrowLeft fontSize={"large"} sx={{color: "#fff"}}/>
                                            </IconButton>
                                            <IconButton
                                                sx={{
                                                    background: "rgba(19,16,27,0.4)",
                                                }}
                                                onClick={nextImage}
                                            >
                                                <KeyboardArrowRight fontSize={"large"} sx={{color: "#fff"}}/>
                                            </IconButton>
                                        </Box>

                                    </Paper>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Dialog>
    )

}