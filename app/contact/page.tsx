import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { COMPANY } from "@/data/services";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Maple Property Maintenance for a free quote on roof cleaning, gutter cleaning, pressure washing, soft washing, windows, lawn care, and seasonal cleanups.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        variant="inner"
        title="Request your free quote"
        subtitle="Share a few details and we’ll follow up with scheduling options and a clear scope—usually within one business day."
        imageSrc="/images/hero/home-exterior.png"
        imageAlt="Contact Maple Property Maintenance"
      />

      <section className={styles.section} aria-labelledby="contact-details-heading">
        <div className={styles.container}>
          <div className={styles.grid}>
            <div>
              <SectionHeader
                id="contact-details-heading"
                eyebrow="Contact"
                title="Call, email, or send the form"
                subtitle="If you’re dealing with moss, overflow, staining, or seasonal reset work, photos help us quote faster."
              />
              <ul className={styles.details}>
                <li>
                  <span className={styles.k}>Phone</span>
                  <a className={styles.v} href={COMPANY.phoneHref}>
                    {COMPANY.phone}
                  </a>
                </li>
                <li>
                  <span className={styles.k}>Email</span>
                  <a className={styles.v} href={COMPANY.emailHref}>
                    {COMPANY.email}
                  </a>
                </li>
                <li>
                  <span className={styles.k}>Service area</span>
                  <span className={styles.v}>{COMPANY.serviceArea}</span>
                </li>
              </ul>
              <div className={styles.note}>
                <p>
                  <strong>Fast quote tip:</strong> include your municipality, property type
                  (house/townhome/strata), and whether ladder access is straightforward.
                </p>
              </div>
            </div>
            <ContactForm
              id="contact-page-form"
              heading="Project details"
              intro="We’ll confirm timing and any access notes before we book."
            />
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.muted}`} aria-labelledby="map-heading">
        <div className={styles.container}>
          <SectionHeader
            id="map-heading"
            eyebrow="Service area"
            title="Where we work"
            subtitle={COMPANY.serviceArea}
            align="center"
          />
          <div className={styles.mapFrame} role="img" aria-label="Maple Property Maintenance service area">
            <div className={styles.mapInner}>
              <p className={styles.mapText}>Greater Vancouver & Vancouver Island</p>
              <p className={styles.mapSub}>
                Vancouver • Burnaby • Surrey • Richmond • Langley • Abbotsford • Chilliwack •
                surrounding communities
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
