import {Typography} from "@mui/material";
import {useEffect, useState} from "react";

function Countdown() {

    const [timeLeft, setTimeLeft] = useState(new Date(new Date(2024, 4, 5) - new Date()))

    useEffect(() => {
        const i = setInterval(() => {
            setTimeLeft(new Date(new Date(2024, 4, 5) - new Date()))
        }, 1000);
        return () => clearInterval(i);
    }, []);  //dependency, if end changes remount

    return (
        <Typography sx={{color: "white"}} variant={"h1"}>
            {`${Math.round(timeLeft / (24 * 60 * 60 * 1000))} Days`}
        </Typography>
    )
}

export default Countdown;