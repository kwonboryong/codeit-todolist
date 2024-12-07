import styles from "./input.module.css";

export default function Input({ value, onChange }) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력해주세요"
        className={styles.input}
      ></input>
    </div>
  );
}
