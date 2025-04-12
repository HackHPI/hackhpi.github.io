import {VerifiedChecker} from "../components/VerifiedChecker/VerifiedChecker";
import WhatToExpect from "../components/WhatToExpect/WhatToExpect";
import Sponsors25 from "../components/Sponsors/Sponsors25";
import Newsletter from "../components/Newsletter/Newsletter";
import {Faq} from "../components/Faq/Faq";
import Team from "../components/Team/Team";
import Speakers from "../components/Speakers/Speakers";
import Jury from "../components/Jury/Jury";
import {Features} from "../components/Features/Features";
import LandingImage from "../components/LandingImage/LandingImage";
import {Gallery} from "../components/Gallery/Gallery";
import Registration from "../components/Registration/Registration";
import {TimeTable} from "../components/TimeTable/TimeTable";

export default function Page() {
    return (
        <>
            <LandingImage/>
            <VerifiedChecker/>
            <WhatToExpect/>
            <Features/>
            <Sponsors25/>
            <Gallery/>
            <Newsletter/>
            {/* <Registration /> */}
            {/*    <Location />*/}
            <Speakers/>
            <Jury/>
            <TimeTable/>
            <Faq/>
            <Team/>
        </>
    )
}
