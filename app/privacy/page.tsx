import {Box, Container, Link, Stack, Typography} from "@mui/material";

export default function Page() {
    return (
        <Container sx={{pt: 10, pb: 10}}>
            <Typography variant="h1" gutterBottom>Datenschutzerklärung</Typography>
            <Stack spacing={7}>
                <Box>
                    <Typography>
                        Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der
                        EU-Datenschutzgrundverordnung (DSGVO), ist der
                    </Typography>
                    <Typography>
                        HackHPI Klub<br/>
                        am Hasso-Plattner-Institut<br/>
                        Prof.-Dr.-Helmert-Str. 2-3<br/>
                        14482 Potsdam<br/>
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h2" gutterBottom>Ihre Betroffenenrechte</Typography>
                    <Typography>
                        Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können
                        Sie jederzeit folgende Rechte ausüben:
                    </Typography>
                    <ul>
                        <li>
                            Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung
                            (Art. 15 DSGVO),
                        </li>
                        <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
                        <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
                        <li>
                            Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund
                            gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),
                        </li>
                        <li>
                            Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO)
                            und
                        </li>
                        <li>
                            Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt
                            haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).
                        </li>
                    </ul>
                    <Typography>
                        Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit
                        mit Wirkung für die Zukunft widerrufen.
                    </Typography>
                    <Typography>
                        Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde
                        wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres
                        Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige
                        Behörde.
                    </Typography>
                    <Typography>
                        Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit
                        Anschrift finden Sie unter: <Link
                        color={"inherit"}
                        href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                        target="_blank"
                        rel="nofollow noopener"
                    >https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</Link
                    >.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h2" gutterBottom>Erfassung allgemeiner Informationen beim Besuch unserer
                        Website</Typography>
                    <Stack spacing={3}>
                        <Box>
                            <Typography variant="h3" gutterBottom>Art und Zweck der Verarbeitung:</Typography>
                            <Typography>
                                Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht
                                registrieren oder anderweitig Informationen übermitteln, werden
                                automatisch Informationen allgemeiner Natur erfasst. Diese Informationen
                                (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete
                                Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre
                                IP-Adresse und ähnliches.
                            </Typography>
                            <Typography>Sie werden insbesondere zu folgenden Zwecken verarbeitet:</Typography>
                            <ul>
                                <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website,</li>
                                <li>Sicherstellung einer reibungslosen Nutzung unserer Website,</li>
                                <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
                                <li>zu weiteren administrativen Zwecken.</li>
                            </ul>
                            <Typography>
                                Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen.
                                Informationen dieser Art werden von uns ggfs. statistisch ausgewertet, um
                                unseren Internetauftritt und die dahinterstehende Technik zu optimieren.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3" gutterBottom>Rechtsgrundlage:</Typography>
                            <Typography>
                                Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis
                                unseres berechtigten Interesses an der Verbesserung der Stabilität und
                                Funktionalität unserer Website.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3" gutterBottom>Empfänger:</Typography>
                            <Typography>
                                Empfänger der Daten sind ggf. technische Dienstleister, die für den
                                Betrieb und die Wartung unserer Webseite als Auftragsverarbeiter tätig
                                werden.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3" gutterBottom>Speicherdauer:</Typography>
                            <Typography>
                                Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung nicht
                                mehr erforderlich sind. Dies ist für die Daten, die der Bereitstellung der
                                Webseite dienen, grundsätzlich der Fall, wenn die jeweilige Sitzung
                                beendet ist.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3" gutterBottom>Bereitstellung vorgeschrieben oder
                                erforderlich:</Typography>
                            <Typography>
                                Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder
                                gesetzlich noch vertraglich vorgeschrieben. Ohne die IP-Adresse ist jedoch
                                der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet.
                                Zudem können einzelne Dienste und Services nicht verfügbar oder
                                eingeschränkt sein. Aus diesem Grund ist ein Widerspruch ausgeschlossen.
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
                <Box>
                    <Typography variant="h2" gutterBottom>Newsletter</Typography>
                    <Stack spacing={3}>
                        <Box>
                            <Typography variant="h3" gutterBottom>Art und Zweck der Verarbeitung:</Typography>
                            <Typography>
                                Ihre Daten werden ausschließlich dazu verwendet, Ihnen den abonnierten
                                Newsletter per E-Mail zuzustellen. Die Angabe Ihres Namens erfolgt, um Sie
                                im Newsletter persönlich ansprechen zu können und ggf. zu identifizieren,
                                falls Sie von Ihren Rechten als Betroffener Gebrauch machen wollen.
                            </Typography>
                            <Typography>
                                Für den Empfang des Newsletters ist die Angabe Ihrer E-Mail-Adresse
                                ausreichend. Bei der Anmeldung zum Bezug unseres Newsletters werden die
                                von Ihnen angegebenen Daten ausschließlich für diesen Zweck verwendet.
                                Abonnenten können auch über Umstände per E-Mail informiert werden, die für
                                den Dienst oder die Registrierung relevant sind (bspw. Änderungen des
                                Newsletterangebots oder technische Gegebenheiten).
                            </Typography>
                            <Typography>
                                Für eine wirksame Registrierung benötigen wir eine valide E-Mail-Adresse.
                                Um zu überprüfen, dass eine Anmeldung tatsächlich durch den Inhaber einer
                                E-Mail-Adresse erfolgt, setzen wir das „Double-opt-in“-Verfahren ein.
                                Hierzu protokollieren wir die Bestellung des Newsletters, den Versand
                                einer Bestätigungsmail und den Eingang der hiermit angeforderten Antwort.
                                Weitere Daten werden nicht erhoben. Die Daten werden ausschließlich für
                                den Newsletterversand verwendet und nicht an Dritte weitergegeben.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3" gutterBottom>Rechtsgrundlage:</Typography>
                            <Typography>
                                Auf Grundlage Ihrer ausdrücklich erteilten Einwilligung (Art. 6 Abs. 1
                                lit. a DSGVO), übersenden wir Ihnen regelmäßig unseren Newsletter bzw.
                                vergleichbare Informationen per E-Mail an Ihre angegebene E-Mail-Adresse.
                            </Typography>
                            <Typography>
                                Die Einwilligung zur Speicherung Ihrer persönlichen Daten und ihrer
                                Nutzung für den Newsletterversand können Sie jederzeit mit Wirkung für die
                                Zukunft widerrufen. In jedem Newsletter findet sich dazu ein
                                entsprechender Link. Außerdem können Sie sich jederzeit auch direkt auf
                                dieser Website abmelden oder uns Ihren Widerruf über die am Ende dieser
                                Datenschutzhinweise angegebene Kontaktmöglichkeit mitteilen.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3" gutterBottom>Empfänger:</Typography>
                            <Typography>Empfänger der Daten sind ggf. Auftragsverarbeiter.</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3" gutterBottom>Speicherdauer:</Typography>
                            <Typography>
                                Die Daten werden in diesem Zusammenhang nur verarbeitet, solange die
                                entsprechende Einwilligung vorliegt. Danach werden sie gelöscht.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3" gutterBottom>Bereitstellung vorgeschrieben oder
                                erforderlich:</Typography>
                            <Typography>
                                Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig,
                                allein auf Basis Ihrer Einwilligung. Ohne bestehende Einwilligung können
                                wir Ihnen unseren Newsletter leider nicht zusenden.
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
                <Box>
                    <Typography variant="h2" gutterBottom>Kontaktformular</Typography>
                    <Stack spacing={3}>
                        <Box>
                            <Typography variant="h3" gutterBottom>Art und Zweck der Verarbeitung:</Typography>
                            <Typography>
                                Die von Ihnen eingegebenen Daten werden zum Zweck der inBoxiduellen
                                Kommunikation mit Ihnen gespeichert. Hierfür ist die Angabe einer validen
                                E-Mail-Adresse sowie Ihres Namens erforderlich. Diese dient der Zuordnung
                                der Anfrage und der anschließenden Beantwortung derselben. Die Angabe
                                weiterer Daten ist optional.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3" gutterBottom>Rechtsgrundlage:</Typography>
                            <Typography>
                                Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf
                                der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).
                            </Typography>
                            <Typography>
                                Durch Bereitstellung des Kontaktformulars möchten wir Ihnen eine
                                unkomplizierte Kontaktaufnahme ermöglichen. Ihre gemachten Angaben werden
                                zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen
                                gespeichert.
                            </Typography>
                            <Typography>
                                Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen, erfolgt
                                die Verarbeitung der in das Kontaktformular eingegebenen Daten zur
                                Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3" gutterBottom>Empfänger:</Typography>
                            <Typography>Empfänger der Daten sind ggf. Auftragsverarbeiter.</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3" gutterBottom>Speicherdauer:</Typography>
                            <Typography>
                                Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht.
                            </Typography>
                            <Typography>
                                Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den
                                gesetzlichen Aufbewahrungsfristen nach HGB und löschen Ihre Daten nach
                                Ablauf dieser Fristen.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3" gutterBottom>Bereitstellung vorgeschrieben oder
                                erforderlich:</Typography>
                            <Typography>
                                Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Wir
                                können Ihre Anfrage jedoch nur bearbeiten, sofern Sie uns Ihren Namen,
                                Ihre E-Mail-Adresse und den Grund der Anfrage mitteilen.
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
                <Box>
                    <Typography variant="h2" gutterBottom>SSL-Verschlüsselung</Typography>
                    <Typography>
                        Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden
                        wir dem aktuellen Stand der Technik entsprechende
                        Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h2" gutterBottom>Änderung unserer Datenschutzbestimmungen</Typography>
                    <Typography>
                        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
                        stets den aktuellen rechtlichen Anforderungen entspricht oder um
                        Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B.
                        bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die
                        neue Datenschutzerklärung.
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h2" gutterBottom>Fragen an den Datenschutzbeauftragten</Typography>
                    <Typography>
                        Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail
                        oder wenden Sie sich direkt an die für den Datenschutz verantwortliche
                        Person in unserer Organisation:
                    </Typography>
                    <Typography><Link href="mailto:team@hackhpi.org"
                                      color={"inherit"}>team@hackhpi.org</Link></Typography>
                </Box>
            </Stack>
        </Container>
    )
}