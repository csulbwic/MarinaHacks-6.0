import styles from '../styles/team.module.css';
type ProfileProps = {
  name?: string;
  role?: string;
  img?: string;
  committeeType: string;
}

export const Profile = ({ name, role, img, committeeType }: ProfileProps) => {

  const roleClassName = `${styles.profileRole} ${styles[committeeType]}`;

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileFrame}>
        <img src={img} alt={name} className={styles.profilePic} />
        <img src="/images/teams_graphics/team-border.png" alt="" className={styles.profileBorder} />
      </div>
      <div className={styles.profileName}>{name}</div>
      <div className={roleClassName}>{role}</div>
    </div>
  );
}
