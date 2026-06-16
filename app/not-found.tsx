import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.text}>
          That route doesn’t exist. Try the home page, services directory, or contact form.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primary} href="/">
            Go home
          </Link>
          <Link className={styles.secondary} href="/services">
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
