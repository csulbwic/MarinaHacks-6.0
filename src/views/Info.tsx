import styles from '../styles/info.module.css';
import landing from '../styles/landing.module.css';
import Image from 'next/image';

export const Info = () => {
  return (
    <div id="about" className={`${styles.infoContainer} text-center flex flex-col items-center`}>
      {/*Starfish decoration*/}
      <Image
        src="/images/star_fish_1.svg"
        alt="Starfish"
        width={150}
        height={150}
        className={`${styles.starfish} ${styles.leftStar} sway-more-rev sway-origin-bottom [animation-delay:600ms]`}
      />
      <Image
        src="/images/star_fish_2.svg"
        alt="Starfish"
        width={90}
        height={90}
        className={`${styles.starfish} ${styles.rightStar} sway-more-rev sway-origin-bottom [animation-delay:500ms]`}
      />

      <h1 className="
        gradient-text
        font-black-white
        text-[110px]
        font-normal
        leading-none
        text-center
        mb-10 
        -translate-y-6
        [text-shadow:0px_4px_2px_rgba(60,7,77,0.25)]
      ">
        About MarinaHacks
      </h1>

      <div className= {styles.infoBox}>

      <p className="font-preahvihear">
        {"Women in Computing is hosting MarinaHacks: California State University Long Beach's annual women-centric hackathon! This free event is dedicated to bringing together women to hone their skills, develop confidence and fill the gender gap within the competitive tech industry."}
      </p>
      
      <p className="font-preahvihear">
        {"This semester's MarinaHacks 6.0 will take place on October 24-25th. You will be able to win prizes, network with other students, attend workshops, in order to build your resume and most importantly have fun!"}
      </p>
      
      <p className="font-preahvihear">
        {"📍Location: CSULB Pyramid, The Point Conference Center (Also Noted on Dev Post)"}
      </p>
      
      <p className="font-preahvihear">
        {"🕘 Time: From 10:00 AM on Saturday, October 24th 2026 to 10:00 AM on Sunday October 25th, 2026."}
      </p>

      </div>

      {/* SCHEDULE - BACKGROUND */}
      <section
  id="schedule"
  className="
    mt-20 mb-10
    flex w-full max-w-[900px]
    flex-col items-center justify-center
    px-4 sm:px-6
  "
>
  <Image
    src="/images/schedule6.0"
    alt="Event Schedule"
    width={900}
    height={600}
    sizes="(max-width: 900px) 100vw, 900px"
    className="h-auto w-full rounded-3xl shadow-lg"
  />
</section>

    </div>
  )
}