import Landing from "@/components/Landing";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

import { Contact, Faq, Info, MeetTheTeam, Prizes, Pillars, Sponsors, Team } from "@/views";
import teamStyles from "@/styles/team.module.css";

export default function Home() {
  return (
    <div>
      <div className="bg-[#DFF9FF]">
        {/* keep navbar on top without changing NavBar.tsx */}
        <div className="sticky top-0 z-[70]">
          <NavBar />
        </div>
        <Landing />
        <Info />
        <Pillars />
        <Prizes />
        <MeetTheTeam />
        {/* one continuous background behind the rest of the team and the sponsors */}
        <div className={teamStyles.teamToSponsorBg}>
          <Team />
          {/* <Sponsors /> */}
        </div>
        <Faq />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

{
  /*<div className="bg-[#DFF9FF]">
      {/* keep navbar on top without changing NavBar.tsx *}
      <div className="sticky top-0 z-[70]">
        <NavBar />
      </div>
      <Landing />
      <Info />
      <Team />
      <Pillars />
      <Prizes />
      <Faq/>
      <Contact/>
      <Footer/>
    </div>*/
}