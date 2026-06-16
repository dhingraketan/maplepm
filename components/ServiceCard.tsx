import Image from "next/image";
import Link from "next/link";
import styles from "./ServiceCard.module.css";

export type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
  imageAlt: string;
};

export function ServiceCard({
  title,
  description,
  image,
  href,
  imageAlt,
}: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <Link href={href} className={styles.mediaLink}>
        <div className={styles.media}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.image}
          />
        </div>
      </Link>
      <div className={styles.body}>
        <h3 className={styles.title}>
          <Link href={href}>{title}</Link>
        </h3>
        <p className={styles.desc}>{description}</p>
        <Link href={href} className={styles.learn}>
          Learn More
          <span aria-hidden className={styles.arrow}>
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
