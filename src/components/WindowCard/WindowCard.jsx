import {Box, Card, CardContent, Stack} from "@mui/material";

export function WindowCard(props) {

    return (
        <Card elevation={7}>
            <Box sx={{
                backgroundColor: "primary.main",
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
                        backgroundColor: "primary.dark"
                    }}></Box>
                    <Box sx={{
                        height: "60%",
                        width: "auto",
                        aspectRatio: "1 / 1",
                        backgroundColor: "primary.dark"
                    }}></Box>
                    <Box sx={{
                        height: "60%",
                        width: "auto",
                        aspectRatio: "1 / 1",
                        backgroundColor: "primary.dark"
                    }}></Box>
                </Stack>
            </Box>
                {props.children}
        </Card>
    )

}
