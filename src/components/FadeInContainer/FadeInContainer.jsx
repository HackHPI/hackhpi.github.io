import ReactVisibilitySensor from 'react-visibility-sensor';
import {useState} from "react";
import {Slide} from "@mui/material";

export function FadeInContainer(props) {

    let [active, setActive] = useState(false);

    return (
        <ReactVisibilitySensor
            partialVisibility={false}
            onChange={(isVisible) => {
                console.log("isVisible", isVisible)
                if (isVisible) {

                    setActive(isVisible);
                }
            }
            }
        >
            <Slide direction={"up"} in={active} timeout={500} container={props.containerRef.current}>
                {props.children}
            </Slide>
        </ReactVisibilitySensor>
    )
}