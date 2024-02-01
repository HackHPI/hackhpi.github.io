import {Box, Card, Stack} from "@mui/material";

export function WindowCard(props) {

    return (
        <Card elevation={7}>
            <Box sx={{
                //backgroundColor: "primary.main",
                //rgba(247,37,133,1)
                background: "linear-gradient(90deg, rgba(58,12,163,1) 0%, rgba(114,9,183,1) 100%)",
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
