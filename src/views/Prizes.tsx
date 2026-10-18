import Image from "next/image";
import { Nunito } from "next/font/google";
import { Prize } from "@/Data/prize";
import styles from "@/styles/prizesLayout.module.css";
// Imported directly so Next.js knows its real pixel size
import prizesHeader from "../../public/images/PrizesAssets/PrizesHeader.png";

// Nunito (bold for categories, semi bold for prize names), loaded just for this section
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-prize-nunito",
});

// PrizeImg can be one path or a list of paths; always work with a list
function toList(img: string | string[]) {
  return (Array.isArray(img) ? img : [img]).filter(Boolean);
}

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
    <section id="prizes" className={`${styles.section} ${nunito.variable}`}>
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

                  {/* The prize (or prizes) sit between the rocks and float with them */}
                  <div
                    className={`${styles.prizeImage} ${
                      toList(prize.PrizeImg).length > 1 ? styles.prizeImageMulti : ""
                    }`}
                    style={prize.imgOffsetY ? { transform: `translateY(${prize.imgOffsetY})` } : undefined}
                  >
                    {toList(prize.PrizeImg).map((src, j, all) => (
                      <div key={src} className={styles.prizeImgBox}>
                        <Image
                          src={src}
                          alt={all.length > 1 ? `${prize.name} prize ${j + 1}` : `${prize.name} prize`}
                          fill
                          sizes="200px"
                          className={styles.prizeImg}
                        />
                      </div>
                    ))}
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
                {prize.item && <p className={styles.item}>{prize.item}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};