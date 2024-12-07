import styles from "./todoBox.module.css";

export default function TodoBox({ title, svg, description }) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>

      <img src={svg} alt={title} className={styles.svg} />
      <p className={styles.description}>{description} </p>
    </div>
  );
}
