import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";
import LandingImage2 from "../LandingImage/LandingImage2.jsx";
import WhatToExpect from "../WhatToExpect/WhatToExpect.jsx";
import Newsletter from "../Newsletter/Newsletter.jsx";
import Team from "../Team/Team.jsx";
import Speakers from "../Speakers/Speakers.jsx";
import {Faq} from "../Faq/Faq.jsx";
import {TimeTable} from "../TimeTable/TimeTable.jsx";
import {Gallery} from "../Gallery/Gallery.jsx";
import '@fontsource/roboto-mono'
import Sponsors from "../Sponsors/Sponsors.jsx";


function ReactMain() {
    return(
        <HackHPIWrapper>
            <LandingImage2/>
            <WhatToExpect/>
            <Sponsors/>
            <Newsletter/>
            <TimeTable/>
            <Gallery/>
            <Faq/>
            <Team/>
        </HackHPIWrapper>
    )
}
export default ReactMain;