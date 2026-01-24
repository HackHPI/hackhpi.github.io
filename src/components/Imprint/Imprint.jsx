import {Box, Container, Link, Stack, Typography} from "@mui/material";

function Imprint() {
    return (
        <Container sx={{pt: 5}}>
            <Stack spacing={5}>
                <Box>
                    <Typography variant="h1" gutterBottom>Impressum</Typography>
                    <Typography variant="body1">Diese Webseite wird betrieben vom</Typography>
                    <Typography variant="body1">
                        HackHPI Klub
                    </Typography>
                    <Typography variant="body1">
                        am Hasso-Plattner-Institut
                    </Typography>
                    <Typography variant="body1">
                        Prof.-Dr.-Helmert-Str. 2-3
                    </Typography>
                    <Typography variant="body1">
                        14482 Potsdam
                    </Typography>
                    <Typography variant="body1">
                        E-Mail: <Link href="mailto:team@hackhpi.org" color={"inherit"}>team@hackhpi.org</Link>
                    </Typography>
                    <Typography variant="body1">Inhaltlich verantwortlich gemäß § 5 TMG, § 55 RStV: Klubsprecher Jeanne
                        Aue, Daniel Kiss und Cedric Rische</Typography>
                </Box>
                <Box>
                    <Typography variant="h2" gutterBottom>Haftungsausschluss</Typography>
                    <Typography variant="body1">
                        Trotz größtmöglicher Sorgfalt kann nicht ausgeschlossen werden, dass
                        einzelne Informationen auf dieser Seite veraltet oder nicht zutreffend
                        sind. Es wird keine Haftung für Aktualität, Genauigkeit und
                        Vollständigkeit der publizierten Informationen übernommen. Für den Inhalt
                        verlinkter externer Webseiten sind lediglich deren Betreiber
                        verantwortlich.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h2" gutterBottom>Urheber der verwendeten Bilder</Typography>
                    <Typography variant="body1">
                        HPI Hauptgebäude: HPI/K. Herschelmann
                    </Typography>
                    <Typography variant="body1">
                        HPI School of Design Thinking: Nico Böckhoff
                    </Typography>
                    <Typography variant="body1">
                        Some of the images of the 2024 HackHPI Event: HPI/Roza
                    </Typography>
                    <Typography variant="body1">
                        Partner-Logos: Der jeweilige Partner
                    </Typography>
                </Box>
            </Stack>
        </Container>
    )
}

export default Imprint
