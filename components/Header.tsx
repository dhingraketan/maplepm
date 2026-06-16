"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { COMPANY } from "@/data/services";
import styles from "./Header.module.css";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className={styles.announcement}>
        <div className={styles.announcementInner}>
          <a className={styles.announceLink} href={COMPANY.phoneHref}>
            {COMPANY.phone}
          </a>
          <span className={styles.dot} aria-hidden />
          <a className={styles.announceLink} href={COMPANY.emailHref}>
            {COMPANY.email}
          </a>
          <span className={styles.dot} aria-hidden />
          <span className={styles.area}>{COMPANY.serviceArea}</span>
        </div>
      </div>
      <header className={styles.header}>
        <div className={styles.bar}>
          <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
            <Image
              src="/logo.png"
              alt=""
              width={240}
              height={68}
              className={styles.logo}
              priority
            />
            <span className={styles.brandName}>Maple Property Maintenance</span>
          </Link>
          <nav className={styles.nav} aria-label="Primary">
            <ul className={styles.navList}>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link className={styles.navLink} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.cta}>
              Get a Free Quote
            </Link>
            <button
              type="button"
              className={styles.menuBtn}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span className={styles.menuIcon} data-open={open} />
            </button>
          </div>
        </div>
        <div
          id="mobile-menu"
          className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`}
          aria-hidden={!open}
        >
          <ul className={styles.mobileList}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  className={styles.mobileLink}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className={styles.mobileCta}
                onClick={() => setOpen(false)}
              >
                Get a Free Quote
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
