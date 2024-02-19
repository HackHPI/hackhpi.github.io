import LandingImage2 from "../components/LandingImage/LandingImage2";
import {VerifiedChecker} from "../components/VerifiedChecker/VerifiedChecker";
import WhatToExpect from "../components/WhatToExpect/WhatToExpect";
import Sponsors from "../components/Sponsors/Sponsors";
import Registration from "../components/Registration/Registration";
import Newsletter from "../components/Newsletter/Newsletter";
import {TimeTable} from "../components/TimeTable/TimeTable";
import {Gallery} from "../components/Gallery/Gallery";
import {Faq} from "../components/Faq/Faq";
import Team from "../components/Team/Team";

export default function Page() {
    return (
        <>
            <LandingImage2/>
            <VerifiedChecker />
            <WhatToExpect />
            <Sponsors />
            <Registration/>
            <Newsletter />
            <TimeTable />
            <Gallery />
            <Faq />
            <Team />
        </>
    )
}