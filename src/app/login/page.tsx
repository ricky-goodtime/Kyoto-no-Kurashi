import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>ログイン</h1>

        <input
          type="email"
          placeholder="メールアドレス"
          className={styles.input}
        />

        <input
          type="password"
          placeholder="パスワード"
          className={styles.input}
        />

        <button className={styles.button}>
          ログイン
        </button>
      </div>
    </div>
  );
}
