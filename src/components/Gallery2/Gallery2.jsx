'use client'
import {
    AppBar,
    Box,
    Button,
    CardActionArea,
    Container,
    Dialog,
    Grid,
    IconButton,
    Paper,
    Slide,
    Stack,
    Toolbar,
    Typography, useMediaQuery
} from "@mui/material";
import React, {useState} from "react";
import Images2023 from "../../assets/images/event/2023/Images2023";
import Images2024 from "../../assets/images/event/2024/Images2024";
import {Close, KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(
    props,
    ref,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

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
    const [isGalleryOpen, setIsGalleryOpen] = useState(true)
    const [selectedImage, setSelectedImage] = useState(0)

    const oneThird = Math.floor(images[galleryTab].items.length / 3);
    const firstThird = images[galleryTab].items.slice(0, oneThird)
    const twoThird = images[galleryTab].items.slice(oneThird, oneThird * 2)
    const threeThird = images[galleryTab].items.slice(oneThird * 2, images[galleryTab].items.length)
    const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    const baseSeconds = 10

    function scrollImageIntoView(index) {
        const element = document.getElementById("img-" + index);
        if (!element) {
            console.error("could not find element", "img-" + index, element)
            return
        }
        element.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'})

    }

    function setNewImage(index) {
        scrollImageIntoView(index)
        setSelectedImage(index)
    }

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
            <Container sx={{display: "flex", justifyContent: "flex-end"}}>
                <Button color={"inherit"} sx={{mt: 3}} onClick={() => setIsGalleryOpen(true)}>View full Gallery</Button>
            </Container>
            <Dialog
                fullScreen
                open={isGalleryOpen}
                onClose={() => setIsGalleryOpen(false)}
                TransitionComponent={Transition}
            >
                <AppBar sx={{position: 'relative'}}>
                    <Toolbar>
                        <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">
                            Gallery
                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => setIsGalleryOpen(false)}
                            aria-label="close"
                        >
                            <Close/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Box sx={{height: "100vh", display: "flex", flexDirection: "column"}}>
                    <Container maxWidth={false}
                               sx={{flexGrow: 1, display: "flex", alignItems: "center"}}>
                        <Grid container spacing={5} alignItems={"center"}>
                            <Grid item xs={12} md={2}
                                  sx={{overflowY: "scroll", overflowX: "scroll", height: "90vh", "::-webkit-scrollbar": {display: "none"}}}  order={{xs: 2, md: 1}}>
                                <Stack spacing={2} direction={matches ? "column" : "row"} >
                                    {images[galleryTab].items.map((item, index) => <CardActionArea onClick={() => {
                                        setSelectedImage(index)
                                        scrollImageIntoView(index)
                                    }} id={"img-" + index}><Paper elevation={5} sx={{
                                        width: "100%",
                                        aspectRatio: "16/10",
                                        background: `url(${item.src})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        display: "flex",
                                        alignItems: "flex-end"
                                    }}>
                                        {
                                            (selectedImage === index) ? (
                                                <Box sx={{
                                                    height: ".4rem",
                                                    background: "linear-gradient(90deg, rgba(58,12,163,1) 0%, rgba(114,9,183,1) 100%)",
                                                    width: "100%"
                                                }}/>
                                            ) : undefined
                                        }

                                    </Paper></CardActionArea>)}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={10}  order={{xs: 1, md: 2}}>
                                <Paper elevation={5} sx={{
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
                                        <IconButton sx={{
                                            background: "rgba(19,16,27,0.4)",
                                        }}
                                                    onClick={() => setNewImage((((selectedImage - 1) % images[galleryTab].items.length) + images[galleryTab].items.length) % images[galleryTab].items.length)}>
                                            <KeyboardArrowLeft fontSize={"large"} sx={{color: "#fff"}}/>
                                        </IconButton>
                                        <IconButton sx={{
                                            background: "rgba(19,16,27,0.4)",
                                        }}
                                                    onClick={() => setNewImage((selectedImage + 1) % images[galleryTab].items.length)}
                                        >
                                            <KeyboardArrowRight fontSize={"large"} sx={{color: "#fff"}}/>
                                        </IconButton>
                                    </Box>

                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Dialog>
        </Box>
    )

}