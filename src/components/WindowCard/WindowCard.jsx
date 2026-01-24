import {Box, Card, Stack} from "@mui/material";
import colorYears from "../Theme/HackHpiColors";

export function WindowCard(props) {
    const colors = colorYears[props.year] ?? colorYears.default;
    const backgroundGradient = `linear-gradient(90deg, ${colors.primary} 0%, ${colors.secondary} 100%)`;
    return (
        <Card elevation={7}>
            <Box sx={{
                //backgroundColor: "primary.main",
                //rgba(247,37,133,1)
                //rgba()
                background: backgroundGradient,
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
                height: "2rem",
                paddingRight: "1rem"
            }}>
                <Stack spacing={1} sx={{height: "100%"}} direction={"row"} alignItems={"center"}>
                    <Box sx={{
                        height: "60%",
                        width: "auto",
                        aspectRatio: "1 / 1",
                        background: "rgba(10,10,10,.5)"
                    }}></Box>
                    <Box sx={{
                        height: "60%",
                        width: "auto",
                        aspectRatio: "1 / 1",
                        background: "rgba(10,10,10,.5)"
                    }}></Box>
                    <Box sx={{
                        height: "60%",
                        width: "auto",
                        aspectRatio: "1 / 1",
                        background: "rgba(10,10,10,.5)"
                    }}></Box>
                </Stack>
            </Box>
            <Box p={3}>
                {props.children}
            </Box>
        </Card>
    )

}
