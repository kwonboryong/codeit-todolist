import styles from "./addBtn.module.css";

export default function AddBtn({ onClick }) {
  return (
    <div className={styles.container}>
      <button type="button" onClick={onClick} className={styles.button}>
        + 추가하기
      </button>
    </div>
  );
}
