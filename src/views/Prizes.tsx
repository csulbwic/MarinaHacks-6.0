import Image from "next/image";
import { Prize } from "@/Data/prize";
import styles from "@/styles/prizesLayout.module.css";
// Imported directly so Next.js knows its real pixel size
import prizesHeader from "../../public/images/PrizesAssets/PrizesHeader.png";

// All art for this section lives in public/images/PrizesAssets
const ASSETS = "/images/PrizesAssets";

// Left coral and Right coral overlapped, so each side of the title looks abundant
function CoralCluster({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`${styles.coralCluster} ${side === "left" ? styles.clusterLeft : styles.clusterRight}`}
      aria-hidden
    >
      <Image
        src={`${ASSETS}/Left coral.png`}
        alt=""
        width={310}
        height={330}
        className={`${styles.coral} ${styles.coralA}`}
      />
      <Image
        src={`${ASSETS}/Right coral.png`}
        alt=""
        width={270}
        height={255}
        className={`${styles.coral} ${styles.coralB}`}
      />
    </div>
  );
}

export const Prizes = () => {
  const prizes = Prize.slice(0, 4);

  return (
    <section id="prizes" className={styles.section}>
      <div className={styles.inner}>
        {/* Title with a coral on each side */}
        <div className={styles.header}>
          <CoralCluster side="left" />
          <h2 className={styles.title}>
            <Image
              src={prizesHeader}
              alt="Prizes"
              className={styles.titleImg}
              // serve the original PNG without recompressing it
              unoptimized
              priority
              // never stretch it wider than its real size
              style={{ maxWidth: prizesHeader.width }}
            />
          </h2>
          <CoralCluster side="right" />
        </div>

        {/* Blue panel with the four prize slots */}
        <div className={styles.panel}>
          <ul className={styles.grid}>
            {prizes.map((prize, i) => (
              <li key={i} className={styles.slot}>
                {/* Top coral, prize and bottom coral bob up and down together */}
                <div className={styles.bob}>
                  <Image
                    src={`${ASSETS}/Top coral.png`}
                    alt=""
                    aria-hidden
                    width={255}
                    height={197}
                    className={styles.rock}
                  />

                  {/* Space for the prize image; stays empty until PrizeImg is set */}
                  <div className={styles.prizeImage}>
                    {prize.PrizeImg && (
                      <Image
                        src={prize.PrizeImg}
                        alt={prize.name}
                        fill
                        sizes="(max-width: 480px) 60vw, (max-width: 900px) 35vw, 200px"
                        className={styles.prizeImg}
                      />
                    )}
                  </div>

                  <Image
                    src={`${ASSETS}/Bottom coral.png`}
                    alt=""
                    aria-hidden
                    width={272}
                    height={170}
                    className={`${styles.rock} ${styles.rockBottom}`}
                  />
                </div>

                <p className={styles.name}>{prize.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};