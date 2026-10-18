import Image from "next/image";
import styles from "@/styles/sponsors.module.css";
import sponsorsTitle from "../../public/images/sponsors_title.png";

export const Sponsors = () => {
  return (
    <section id="sponsors" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            <Image
              src={sponsorsTitle}
              alt="Sponsors"
              className={styles.faqHeadingImage}
              style={{ maxWidth: sponsorsTitle.width }}
            />
          </h2>
          <Image
            src="/images/pufferfish.png"
            alt=""
            aria-hidden
            width={416}
            height={277}
            className={styles.fish}
          />
        </header>

        <div className={styles.panel}>
          <ul className={styles.sponsorGrid} aria-label="Our sponsors">
            <li className={styles.sponsor}>
              <div className={styles.googleLogo} role="img" aria-label="Google">
                <Image
                  src="/images/Google_G_logo.svg"
                  alt="Google"
                  width={180}
                  height={88}
                />
              </div>
            </li>
            <li className={styles.sponsor}>
              <div
                className={styles.engineeringLogo}
                role="img"
                aria-label="CSULB College of Engineering"
              >
                <Image
                  src="/images/csulb coe logo.svg"
                  alt="CSULB College of Engineering"
                  width={180}
                  height={88}
                />
              </div>
            </li>
            <li className={`${styles.sponsor} ${styles.wicSponsor}`}>
              <Image
                src="/images/asi-logo 1.svg"
                alt="ASI"
                width={180}
                height={88}
              />
            </li>
          </ul>
        </div>

        <Image
          src="/images/shell.png"
          alt=""
          aria-hidden
          width={349}
          height={232}
          className={styles.shell}
        />
      </div>
    </section>
  );
};
