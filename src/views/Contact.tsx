import Image from "next/image";
import { Nunito } from "next/font/google";
import styles from "@/styles/contactsLayout.module.css";
// Imported directly so Next.js knows their real pixel sizes
import contactsHeader from "../../public/images/ContactsAssets/ContactsHeader.png";
import contactsLogo from "../../public/images/ContactsAssets/ContactsLogo.png";

// Nunito for the text in this section, loaded just for this section
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-contact-nunito",
});

// All art for this section lives in public/images/ContactsAssets
const ASSETS = "/images/ContactsAssets";
const EMAIL = "csulbwic@gmail.com";

// The icon PNGs have empty space around the pink circle. `circle` is where the
// circle sits inside each file (left, top, right, bottom in pixels), so the
// clickable area can be exactly the circle.
const ICONS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/csulbwic/",
    src: `${ASSETS}/InstagramIconContacts.png`,
    size: [235, 172],
    circle: [45, 20, 175, 150],
    spot: "instagram",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/csulbwic/",
    src: `${ASSETS}/LinkedinIconContacts.png`,
    size: [187, 171],
    circle: [28, 23, 162, 151],
    spot: "linkedin",
  },
  {
    label: `Email ${EMAIL}`,
    href: `mailto:${EMAIL}`,
    src: `${ASSETS}/EmailIconContacts.png`,
    size: [292, 186],
    circle: [69, 15, 196, 145],
    spot: "email",
  },
] as const;

export const Contact = () => {
  return (
    <section id="contacts" className={`${styles.section} ${nunito.variable}`}>
      <div className={styles.inner}>
        {/* Title */}
        <header className={styles.header}>
          <h2 className={styles.title}>
            <Image
              src={contactsHeader}
              alt="Contact Us"
              className={styles.titleImg}
              unoptimized
              style={{ maxWidth: contactsHeader.width }}
            />
          </h2>
          <p className={styles.subtitle}>CSULB Women in Computing</p>
        </header>

        <div className={styles.body}>
          {/* Left: MarinaHacks logo */}
          <div className={styles.logoCol}>
            <Image
              src={contactsLogo}
              alt="MarinaHacks logo"
              className={styles.logo}
              sizes="(max-width: 1100px) 40vw, 460px"
            />
          </div>

          {/* Right: WiC logo with the social buttons around it, then the email note */}
          <div className={styles.contactCol}>
            <div className={styles.cluster}>
              <div className={styles.wic}>
                <Image
                  src={`${ASSETS}/WiCContactsLogo.png`}
                  alt="Women in Computing logo"
                  width={232}
                  height={230}
                  className={styles.wicImg}
                />
              </div>

              {ICONS.map((icon) => {
                const [w] = icon.size;
                const [x0, y0, x1] = icon.circle;
                const cw = x1 - x0;
                return (
                  <a
                    key={icon.label}
                    href={icon.href}
                    target={icon.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={icon.label}
                    className={`${styles.icon} ${styles[icon.spot]}`}
                  >
                    <Image
                      src={icon.src}
                      alt=""
                      width={icon.size[0]}
                      height={icon.size[1]}
                      className={styles.iconImg}
                      // scale and shift the file so its circle exactly fills the button
                      style={{
                        width: `${(w / cw) * 100}%`,
                        left: `${(-x0 / cw) * 100}%`,
                        top: `${(-y0 / cw) * 100}%`,
                      }}
                    />
                  </a>
                );
              })}
            </div>

            <p className={styles.note}>
              Please send us an email at{" "}
              <a href={`mailto:${EMAIL}`} className={styles.noteLink}>
                {EMAIL}
              </a>{" "}
              with any general or sponsorship-related queries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};