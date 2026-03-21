import avatar from "../assets/john-smitherington.png";
import styles from "./User.module.css";

interface UserProps {
  imageSrc?: string;
  name: string;
  location: string;
}

export const User = ({
  imageSrc = avatar,
  name,
  location,
}: UserProps) => {
  return (
    <section className={styles.user} aria-label="Reviewer">
      <img className={styles.avatar} src={imageSrc} alt={name} />
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.location}>{location}</p>
      </div>
    </section>
  );
};
