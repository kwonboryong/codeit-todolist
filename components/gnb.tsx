import Link from "next/link";
import styles from "./gnb.module.css";

export default function Gnb() {
  return (
    <div className={styles.container}>
      <Link href={"/"}>
        <img
          src="/img/logo.svg"
          alt="코드잇 스프린트 로고"
          className={styles.svg}
        />
      </Link>
    </div>
  );
}
