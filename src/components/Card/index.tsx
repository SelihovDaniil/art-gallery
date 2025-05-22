import styles from "./card.module.scss";

export default function Card({ image, title, year, author, location }: { image: string; title: string; year: string; author: string; location: string }) {
  return (
    <div className={styles.card}>

      <img className={styles.image} src={image} alt={title} />
      <div className={styles.animation_box}>
        <div className={styles.line}><span /></div>
        <div className={styles.bottom}>
          <span className={styles.title}>{title}</span>
          <span className={styles.undertitle}>{year}</span>
        </div>
        <div className={styles.left}>
          <span className={styles.title}>{author}</span>
          <span className={styles.undertitle}>{location}</span>
        </div>
      </div>
    </div>
  );
}
