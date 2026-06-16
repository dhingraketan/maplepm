import Image from "next/image";
import Link from "next/link";
import { COMPANY, services } from "@/data/services";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.colBrand}>
          <Link href="/" className={styles.brandRow}>
            <Image
              src="/logo.png"
              alt=""
              width={180}
              height={50}
              className={styles.logo}
            />
            <span className="sr-only">{COMPANY.name}</span>
          </Link>
          <p className={styles.tagline}>
            Exterior cleaning and property maintenance with clear quotes, careful
            workmanship, and respectful service across the Lower Mainland.
          </p>
        </div>
        <div className={styles.col}>
          <h2 className={styles.heading}>Services</h2>
          <ul className={styles.list}>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.col}>
          <h2 className={styles.heading}>Service areas</h2>
          <p className={styles.areaText}>{COMPANY.serviceArea}</p>
          <h2 className={`${styles.heading} ${styles.headingSpaced}`}>Contact</h2>
          <ul className={styles.contactList}>
            <li>
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
            </li>
            <li>
              <a href={COMPANY.emailHref}>{COMPANY.email}</a>
            </li>
            <li>
              <Link href="/contact">Request a quote</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
