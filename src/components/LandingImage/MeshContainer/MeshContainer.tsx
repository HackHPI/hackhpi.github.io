import {Box} from "@mui/material";
import "./gradient.css"

import {Gradient} from './Gradient.js'
import {useEffect} from "react";


export function MeshContainer(props) {

    useEffect(() => {
        // Create your instance
        const gradient = new Gradient()

        // Call `initGradient` with the selector to your canvas
        gradient.initGradient('#gradient-canvas')

    }, [])


    return (
        <Box sx={{
            position: "relative",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            minHeight: "60vh",
            background: "linear-gradient(90deg, rgba(19,16,27,1) 0%, rgba(19,16,27,0) 100%)",

        }}>
            <Box sx={{
                position: "absolute", width: "100%", height: "100%",
                background: "linear-gradient(90deg, rgba(19,16,27,1) 0%, rgba(19,16,27,0) 100%)",
            }}>
                {props.children}
            </Box>
            <canvas id="gradient-canvas" data-transition-in/>
        </Box>
    )
}