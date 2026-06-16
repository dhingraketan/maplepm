import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { COMPANY } from "@/data/services";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Maple Property Maintenance: a Lower Mainland team focused on dependable exterior cleaning, seasonal upkeep, and transparent quotes.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        variant="inner"
        title="Local crew. Premium finish. Honest advice."
        subtitle="Maple Property Maintenance exists to make exterior care predictable: clear scopes, careful methods, and a team that treats your property with respect."
        imageSrc="/images/hero/home-exterior.png"
        imageAlt="Neatly maintained home exterior in soft daylight"
      />
      <section className={styles.section} aria-labelledby="intro-heading">
        <div className={styles.container}>
          <div className={styles.prose}>
            <h2 id="intro-heading">A professional local partner for exterior upkeep</h2>
            <p>
              Homeowners, landlords, and small businesses across the Fraser Valley juggle busy
              schedules—and exterior maintenance is easy to postpone until it becomes urgent. We
              built Maple Property Maintenance to be the team you can call before small issues turn
              into costly repairs: moss creeping under shingles, gutters overflowing, algae
              shadowing siding, or walkways getting slick.
            </p>
            <p>
              Our approach blends old-school workmanship with modern communication. You’ll get a
              quote that reflects what we actually see, scheduling that respects your time, and a
              crew that cleans up like guests—not contractors cutting corners.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.muted}`} aria-labelledby="mission-heading">
        <div className={styles.container}>
          <SectionHeader
            id="mission-heading"
            eyebrow="Mission"
            title="Keep Lower Mainland properties looking sharp—and standing strong"
            subtitle="We believe exterior maintenance should feel straightforward: fair pricing, safe methods, and results you can judge with your own eyes."
          />
          <ul className={styles.pillList}>
            <li>Protect finishes and drainage paths before damage starts</li>
            <li>Use the right pressure, detergents, and tools for each surface</li>
            <li>Communicate clearly—especially for strata and rental properties</li>
            <li>Leave job sites neat, with respectful access practices</li>
          </ul>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="why-heading">
        <div className={styles.container}>
          <SectionHeader
            id="why-heading"
            eyebrow="Why Maple"
            title="Why customers choose Maple Property Maintenance"
            align="center"
          />
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>We’re obsessive about details</h3>
              <p className={styles.cardText}>
                Edges, rinsing, downspout flow, and final walkthroughs—the small things separate a
                “fine” job from a memorable one.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>We plan for BC weather</h3>
              <p className={styles.cardText}>
                Wet seasons, wind-blown debris, and rapid algae growth are normal here. We recommend
                service timing that matches your property—not a generic calendar template.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>We earn repeat trust</h3>
              <p className={styles.cardText}>
                Most of our growth comes from referrals and recurring routes. That only happens when
                quality stays consistent visit after visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.navy}`} aria-labelledby="areas-heading">
        <div className={styles.container}>
          <SectionHeader
            id="areas-heading"
            eyebrow="Service area"
            title={COMPANY.serviceArea}
            subtitle="If you’re nearby and not sure, send a message—we’ll let you know quickly if we can help."
            align="center"
            light
          />
          <div className={styles.ctaRow}>
            <Link className={styles.cta} href="/contact">
              Get a Free Quote
            </Link>
            <Link className={styles.ctaGhost} href="/services">
              Browse services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
