import {Box, Card, Stack} from "@mui/material";

export function WindowCard(props) {

  function getSecondaryColor(year) {


    switch (props.year) {
      case 2024:
        return "rgba(114,9,183,1)"
      case 2025:
        return "rgba(76,201,240,1)"
      case 2026:
        return "rgba(63,253,106,1)"
      default:
        return "rgba(63,253,106,1)"
    }
  }
  function getPrimaryColor(year) {


    switch (props.year) {
      case 2024:
      case 2025:
        return "rgba(167,252,63,1)"
      case 2026:
        return "rgba(167,252,63,1)"
      default:
        return "rgba(167,252,63,1)"
    }
  }
    let backgroundSecondColor = getSecondaryColor(props.year);
    const backgroundGradient = `linear-gradient(90deg, rgba(167,252,63,1) 0%, ${backgroundSecondColor} 100%)`;
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
