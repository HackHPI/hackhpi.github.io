import {Box} from "@mui/material";
import "./gradient.css"

import {Gradient} from './Gradient.js'
import {useEffect} from "react";


export function MeshContainer(props) {

    useEffect(() => {
        // Create your instance
        const gradient = new Gradient()

        // Call `initGradient` with the selector to your canvas
        // @ts-ignore
        gradient.initGradient('#gradient-canvas')

    }, [])


    return (
        <Box sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}>
            <Box sx={{
                width: "100%",
                height: "100%",
                position: "relative",
                zIndex: 2,
                background: "rgba(0,0,0,0.1)",
            }}>
                {props.children}
            </Box>
            <Box sx={{position: "absolute", zIndex:-100, height: "100%", width: "100%", top: 0, left: 0}}>
                <canvas id="gradient-canvas" data-transition-in style={{height: "100%"}} />
            </Box>
        </Box>
    )
}
