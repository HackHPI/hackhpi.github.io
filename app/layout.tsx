import React from "react";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import HackHPIWrapper from "../src/components/Theme/HackHPIWrapper";
import Footer from "../src/components/Footer/Footer";
import './layout.css'


export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width"/>
            <link rel="icon" type="image/svg" href="/HackHPI24_white.png"/>
            <title>
                HackHPI 2024 | tomorrow's reality, today's vision. smart cities edition.
            </title>
            <meta name="theme-color" content="#13101B"/>
            <meta name={"description"}
                  content={"Explore the future of urban living at HPI in Potsdam. Join motivated students for two days of innovation, workshops, and collaboration with top-notch sponsors offering support and expertise. Tackle a challenge and dive into the world of smart cities."}/>
        </head>
        <body>
        <AppRouterCacheProvider>
            <div style={{position: "relative", minHeight: "100vh"}}>
                <div style={{paddingBottom: "17rem"}}>
                    <HackHPIWrapper>
                        {children}
                    </HackHPIWrapper>
                </div>
                <div style={{position: "absolute", bottom: 0, width: "100%", height: "17rem"}}>
                    <Footer/>
                </div>
            </div>
        </AppRouterCacheProvider>
        </body>
        </html>
    )
}