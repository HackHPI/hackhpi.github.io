import HackHPIWrapper from "../Theme/HackHPIWrapper.jsx";
import LandingImage from "../LandingImage/LandingImage.jsx";
import WhatToExpect from "../WhatToExpect/WhatToExpect.jsx";
import Newsletter from "../Newsletter/Newsletter.jsx";
import Team from "../Team/Team.jsx";
import {Speaker} from "@mui/icons-material";
import Speakers from "../Speakers/Speakers.jsx";
import Location from "../Location/Location.jsx";

function ReactMain() {
    return(
        <HackHPIWrapper>
            <LandingImage/>
            <WhatToExpect/>
            <Newsletter/>
            <Speakers/>
            <Team/>
            <Location/>
        </HackHPIWrapper>
    )
}
export default ReactMain;