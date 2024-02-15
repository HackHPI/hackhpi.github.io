'use client'
import {useEffect, useState} from "react";
import {Alert, Container} from "@mui/material";
import {Check} from "@mui/icons-material";

export function VerifiedChecker() {

    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        const queryParameters = new URLSearchParams(window?.location?.search)
        const type = queryParameters.get("isVerified")
        setIsVerified(type)
    }, []);

    if (isVerified) {
        return (
            <Container sx={{pt: 5, pb: 0}}>
                <Alert icon={<Check fontSize="inherit"/>} severity="success">
                    Your E-Mail has been verified!
                </Alert>
            </Container>
        )
    }

    return (
        <>
        </>
    )
}