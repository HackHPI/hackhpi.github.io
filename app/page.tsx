import LandingImage2 from "../src/components/LandingImage/LandingImage2";
import {VerifiedChecker} from "../src/components/VerifiedChecker/VerifiedChecker";
import WhatToExpect from "../src/components/WhatToExpect/WhatToExpect";
import Sponsors from "../src/components/Sponsors/Sponsors";
import Registration from "../src/components/Registration/Registration";
import Newsletter from "../src/components/Newsletter/Newsletter";
import {TimeTable} from "../src/components/TimeTable/TimeTable";
import {Gallery} from "../src/components/Gallery/Gallery";
import {Faq} from "../src/components/Faq/Faq";
import Team from "../src/components/Team/Team";
import Speakers from "../src/components/Speakers/Speakers";
import {Features} from "../src/components/Features/Features";

export default function Page() {
    return (
        <>
            <LandingImage2/>
            <VerifiedChecker />
            <WhatToExpect />
            <Features/>
            <Sponsors />
            <Registration/>
            <Speakers/>
            <TimeTable />
            <Gallery />
            <Faq />
            <Newsletter />
            <Team />
        </>
    )
}