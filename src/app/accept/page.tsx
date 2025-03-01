"use client"
import {useEffect} from "react";
import {RegistrationRest} from "../../rest/RegistrationRest";
import {Box, CircularProgress, Typography} from "@mui/material";
import {useRouter} from "next/navigation";

export default function Page() {

    const router = useRouter()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const queryParameters = new URLSearchParams(window?.location?.search)
            const token = queryParameters.get("t")
            const registration = queryParameters.get("r")
            const registrationRest = new RegistrationRest()
            registrationRest.acceptWithToken(registration, token).then(() => router.push("/?isVerified=true"))
        }

    }, []);
    return <Box sx={{padding: 10, display: "flex", justifyContent: "center"}}>
        <Box >
            <CircularProgress color={"inherit"}/>
            <Typography>Verifying your Token</Typography>
        </Box>
    </Box>
}
