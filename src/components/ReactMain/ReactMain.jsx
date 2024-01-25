import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";
import LandingImage from "../LandingImage/LandingImage.jsx";
import WhatToExpect from "../WhatToExpect/WhatToExpect.jsx";
import Newsletter from "../Newsletter/Newsletter.jsx";
import Team from "../Team/Team.jsx";
import Speakers from "../Speakers/Speakers.jsx";
import {Faq} from "../Faq/Faq.jsx";
import {TimeTable} from "../TimeTable/TimeTable.jsx";

function ReactMain() {
    return(
        <HackHPIWrapper>
            <LandingImage/>
            <WhatToExpect/>
            <Newsletter/>
            <TimeTable/>
            <Faq/>
            <Team/>
        </HackHPIWrapper>
    )
}
export default ReactMain;