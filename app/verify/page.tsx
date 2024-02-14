"use client"
import {useEffect} from "react";
import {RegistrationRest} from "../../src/rest/RegistrationRest";
import {Box, CircularProgress, Typography} from "@mui/material";
import {useRouter} from "next/navigation";

export default function Page() {

    const router = useRouter()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const queryParameters = new URLSearchParams(window?.location?.search)
            const type = queryParameters.get("token")
            const registrationRest = new RegistrationRest()
            registrationRest.verifyToken(type).then(() => router.push("/?isVerified=true"))
        }

    }, []);
    return <Box sx={{padding: 10, display: "flex", justifyContent: "center"}}>
        <Box align={"center"}>
            <CircularProgress color={"inherit"}/>
            <Typography>Verifying your Token</Typography>
        </Box>
    </Box>
}