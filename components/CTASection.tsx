import Link from "next/link";
import styles from "./CTASection.module.css";

type CTASectionProps = {
  title: string;
  description?: string;
  buttonLabel: string;
  buttonHref: string;
  variant?: "navy" | "light";
};

export function CTASection({
  title,
  description,
  buttonLabel,
  buttonHref,
  variant = "navy",
}: CTASectionProps) {
  return (
    <section
      className={`${styles.section} ${variant === "light" ? styles.light : styles.navy}`}
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2 className={styles.title}>{title}</h2>
          {description ? <p className={styles.desc}>{description}</p> : null}
        </div>
        <Link className={styles.btn} href={buttonHref}>
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
