"use client";
import { Button, Card, Container, Stack, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import {Article, CalendarMonthOutlined, CameraAlt} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { MeshContainer } from "./MeshContainer/MeshContainer";

function LandingImage() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeDiff());

  function calculateTimeDiff() {
    return new Date(new Date(2025, 2, 22) - new Date());
  }

  useEffect(() => {
    const i = setInterval(() => {
      setTimeLeft(calculateTimeDiff());
    }, 1000);
    return () => clearInterval(i);
  }, []); //dependency, if end changes remount

  return (
    <MeshContainer>
      <Container
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          minHeight: "60vh",
        }}
      >
        <img src={"/HackHPI_white.svg"} width={"150rem"} alt={"HackHPI Logo"} />
        <div>
          <Typography sx={{ color: "white" }} variant={"h2"} component={"h1"}>
            Agriculture, Food & Tech
          </Typography>
          <Typography variant={"h4"} component={"h2"}>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "Revolutionize ",
                500,
                "Revolutionize food chains", // initially rendered starting point
                1000,
                "Revolutionize crop management", // initially rendered starting point,
                1000,
                "Revolutionize farming tech", // initially rendered starting point
                1000,
                //`See you in ${Math.round(timeLeft / (24 * 60 * 60 * 1000))} Days!`,
                //`Thank you for joining us!`,
                // 10000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </Typography>
        </div>
        <Stack direction={"row"} spacing={3} useFlexGap flexWrap="wrap">
          <Button
            variant={"contained"}
            sx={{
              borderWidth: "1rem",
              width: "13rem",
              height: "3.5rem",
              fontSize: "1rem",
            }}
            color={"primary"}
            startIcon={<CameraAlt />}
            onClick={() =>
              // document.getElementById("signupForm").scrollIntoView({
              document.getElementById("images").scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              })
            }
          >
            {/* Registration */}
            Photo Gallery
          </Button>
          <Card
            sx={{ height: "3.5rem", justifyContent: "center", display: "flex" }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              display={"flex"}
              sx={{
                height: "100%",
                paddingRight: "1.25rem",
                paddingLeft: "1.25rem",
              }}
              spacing={2}
            >
              <CalendarMonthOutlined
                sx={{ fontSize: "1.5rem", color: "text.disabled" }}
              />
              <Typography
                sx={{ fontSize: "1rem" }}
                color={"text.disabled"}
                noWrap
              >
                10th-11th April 2026
              </Typography>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </MeshContainer>
  );
}

export default LandingImage;
