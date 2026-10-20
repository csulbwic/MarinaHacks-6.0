import { members } from "@/Data/members"
import { Profile } from "@/components"
import styles from "@/styles/team.module.css";
import Image from "next/image";

/*
GROUP 1: Directors
GROUP 2: WiC Officers
GROUP 3: Website Committee
GROUP 4: Design Committee
GROUP 5: Sponsorship Committee
*/

// "Meet the Team!" heading + Directors, on the MeettheTeamBG background
export const MeetTheTeam = () => {
    return (
      <div id ="teams" className={`${styles.teamContainer} ${styles.introPart} ${styles.meetTheTeamBg}`}>
        <h1 className={styles.teamHeading}>Meet the Team!</h1>
        
        {/* DIRECTORS - BACKGROUND */}
        <section id="directors"
        className="relative overflow-visible flex flex-col items-center min-h-[500px] md:min-h-[500px] mb-32
        bg-[url('/images/teams_graphics/directors_graphics2.svg')]
        bg-no-repeat bg-contain bg-center">
            
            {/* TITLE */}
            <div>
                <h2 className={styles.teamTitle}>Directors</h2>
            </div>

            <div className={`${styles.memberGrid}`}>
                {/* Map Members of group member only */}
                {members.filter((member) => member.group === 1).map((item, index) => {
                return (
                    <Profile 
                        name={item.name} 
                        role={item.role} 
                        img={item.img} 
                        key={index}
                        committeeType="marinaHacksCommittee"
                    />
                )
                })}
            </div>
        </section>
      </div>
    )
  }

// The rest of the committees. Its background (teamtosponsorBG) is shared with
// the Sponsors section, so it's set on a wrapper around both in pages/index.tsx
export const Team = () => {
    return (
      <div className={`${styles.teamContainer} ${styles.restPart}`}>
        {/* DESIGN - BACKGROUND */}
        <section id="design"
        className="relative overflow-visible flex flex-col items-center min-h-[500px] md:min-h-[500px] mb-32
        bg-[url('/images/teams_graphics/designteam_graphics.svg')]
        bg-no-repeat bg-contain bg-center">
            
            {/* TITLE */}
            <div>
                <h2 className={styles.teamTitle}>Design Committee</h2>
            </div>

            <div className={styles.memberGrid}
            style={ {maxWidth:"1100px"}}>
                {/* Map Members of group member only */}
                {members.filter((member) => member.group === 4).map((item, index) => {
                return (
                    <Profile 
                        name={item.name} 
                        role={item.role} 
                        img={item.img} 
                        key={index}
                        committeeType="designCommittee"
                    />
                )
                })}
            </div>
        </section>

        {/* WEBSITE - BACKGROUND */}
        <section id="website"
        className="relative overflow-visible flex flex-col items-center min-h-[500px] md:min-h-[500px] mb-32
        bg-[url('/images/teams_graphics/websiteteam_graphics.svg')]
        bg-no-repeat bg-contain bg-center">
            
            {/* TITLE */}
            <div>
                <h2 className={styles.teamTitle}>Website Committee</h2>
            </div>

            <div className={styles.memberGrid}
            style={ {maxWidth:"1000px"}}>
                {/* Map Members of group member only */}
                {members.filter((member) => member.group === 3).map((item, index) => {
                return (
                    <Profile 
                        name={item.name} 
                        role={item.role} 
                        img={item.img} 
                        key={index}
                        committeeType="websiteCommittee"
                    />
                )
                })}
            </div>
        </section>

        {/* SPONSORSHIP - BACKGROUND */}
        <section id="sponsorship"
        className="relative overflow-visible flex flex-col items-center min-h-[500px] md:min-h-[500px] mb-32
        bg-[url('/images/teams_graphics/sponsorship_graphics.svg')]
        bg-no-repeat bg-contain bg-center">
            
            {/* TITLE */}
            <div>
                <h2 className={styles.teamTitle}>Sponsorship & Budgeting Committee</h2>
            </div>

            <div className={styles.memberGrid}>
                {/* Map Members of group member only */}
                {members.filter((member) => member.group === 5).map((item, index) => {
                return (
                    <Profile 
                        name={item.name} 
                        role={item.role} 
                        img={item.img} 
                        key={index}
                        committeeType="sponsorshipCommittee"
                    />
                )
                })}
            </div>
        </section>
        
        {/* WIC OFFICERS - BACKGROUND */}
        <section id="officers"
        className="relative overflow-visible flex flex-col items-center min-h-[500px] md:min-h-[500px]
        bg-[url('/images/teams_graphics/wicofficers_graphics.svg')]
        bg-no-repeat bg-contain bg-center">
            
            {/* TITLE */}
            <div>
                <h2 className={styles.teamTitle}>Women in Computing Officers</h2>
            </div>

            <div className={styles.memberGrid}
            style={ {maxWidth:"2000px"}}>
                {/* Map Members of group member only */}
                {members.filter((member) => member.group === 2).map((item, index) => {
                return (
                    <Profile 
                        name={item.name} 
                        role={item.role} 
                        img={item.img} 
                        key={index}
                        committeeType="officer"
                    />
                )
                })}
            </div>
        </section>
      </div>
    )
  }