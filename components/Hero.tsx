import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

type HeroProps = {
  variant?: "home" | "inner";
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function Hero({
  variant = "inner",
  title,
  subtitle,
  imageSrc,
  imageAlt,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section
      className={`${styles.hero} ${variant === "home" ? styles.heroHome : styles.heroInner}`}
      aria-label="Hero"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={variant === "home"}
        className={styles.bg}
        sizes="100vw"
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        {primaryCta || secondaryCta ? (
          <div className={styles.actions}>
            {primaryCta ? (
              <Link className={styles.btnPrimary} href={primaryCta.href}>
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link className={styles.btnSecondary} href={secondaryCta.href}>
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
