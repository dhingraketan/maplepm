import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { services } from "@/data/services";
import styles from "./page.module.css";

const description =
  "Professional property maintenance, exterior cleaning, roof cleaning, gutter cleaning, pressure washing, and lawn maintenance services in the Lower Mainland.";

export const metadata: Metadata = {
  title: "Maple Property Maintenance",
  description,
};

const reasons = [
  {
    title: "Professional standards",
    text: "Clear scopes, tidy job sites, and workmanship you’ll notice from the curb.",
    icon: "✓",
  },
  {
    title: "Reliable scheduling",
    text: "We communicate arrival windows and show up prepared—no mystery timelines.",
    icon: "⏱",
  },
  {
    title: "Local Lower Mainland team",
    text: "We understand wet seasons, pollen cycles, and what exterior surfaces need here.",
    icon: "📍",
  },
  {
    title: "Fair, upfront quotes",
    text: "You’ll know what’s included before we start—no surprise add-ons.",
    icon: "💬",
  },
  {
    title: "Fully insured",
    text: "Peace of mind for homeowners, landlords, and busy property managers alike.",
    icon: "🛡",
  },
  {
    title: "Quality finishing touches",
    text: "Details matter: rinsing, edging, walkthroughs, and respectful cleanup.",
    icon: "✨",
  },
];

const steps = [
  {
    n: "01",
    title: "Request a Quote",
    text: "Tell us about your property and priorities—we’ll follow up with questions if needed.",
  },
  {
    n: "02",
    title: "Schedule Service",
    text: "Pick a time that works. We confirm access details and weather-dependent tasks.",
  },
  {
    n: "03",
    title: "We Complete the Work",
    text: "Our crew arrives equipped, works efficiently, and protects landscaping and finishes.",
  },
  {
    n: "04",
    title: "Enjoy a Clean Property",
    text: "Walkthrough with you (when available), final tidy-up, and maintenance tips.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        variant="home"
        title="Reliable Property Maintenance for Homes & Businesses"
        subtitle="Professional exterior cleaning and seasonal upkeep for roofs, gutters, siding, hardscapes, windows, and lawns—delivered with clear communication and careful methods."
        imageSrc="/images/hero/home-exterior.png"
        imageAlt="Clean modern home exterior with maintained landscaping"
        primaryCta={{ href: "/contact", label: "Get a Free Quote" }}
        secondaryCta={{ href: "/services", label: "View Services" }}
      />

      <section className={styles.section} aria-labelledby="services-preview-heading">
        <div className={styles.container}>
          <SectionHeader
            id="services-preview-heading"
            eyebrow="What we do"
            title="Services built around real weather—and real homes"
            subtitle="From moss control to spotless glass, we focus on exterior results that last longer than a quick rinse."
            align="center"
          />
          <div className={styles.serviceGrid}>
            {services.map((s) => (
              <ServiceCard
                key={s.slug}
                title={s.title}
                description={s.shortDescription}
                image={s.image}
                href={`/services/${s.slug}`}
                imageAlt={`${s.title} — Maple Property Maintenance`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionMuted}`}>
        <div className={styles.container}>
          <SectionHeader
            eyebrow="Why Maple"
            title="Why homeowners and managers choose Maple Property Maintenance"
            subtitle="We’re built for repeat service: respectful crews, honest recommendations, and results you can see."
            align="center"
          />
          <ul className={styles.reasonGrid}>
            {reasons.map((r) => (
              <li key={r.title} className={styles.reasonCard}>
                <div className={styles.reasonIcon} aria-hidden>
                  {r.icon}
                </div>
                <h3 className={styles.reasonTitle}>{r.title}</h3>
                <p className={styles.reasonText}>{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="results-heading">
        <div className={styles.container}>
          <SectionHeader
            id="results-heading"
            eyebrow="Results"
            title="Before & after transformations"
            subtitle="Real results from roof, gutter, siding, and hardscape cleaning projects across BC."
            align="center"
          />
          <div className={styles.baGrid}>
            <figure className={styles.baCard}>
              <div className={styles.baImage}>
                <Image
                  src="/images/before-after/before.png"
                  alt="Before exterior cleaning"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.baImg}
                />
              </div>
              <figcaption className={styles.baCaption}>Before</figcaption>
            </figure>
            <figure className={styles.baCard}>
              <div className={styles.baImage}>
                <Image
                  src="/images/before-after/after.png"
                  alt="After exterior cleaning"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.baImg}
                />
              </div>
              <figcaption className={styles.baCaption}>After</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionNavy}`}>
        <div className={styles.container}>
          <SectionHeader
            eyebrow="Our process"
            title="Simple steps from quote to clean"
            subtitle="No runaround—just a straightforward plan that respects your time and your property."
            align="center"
            light
          />
          <ol className={styles.processGrid}>
            {steps.map((s) => (
              <li key={s.n} className={styles.processCard}>
                <span className={styles.processNum}>{s.n}</span>
                <h3 className={styles.processTitle}>{s.title}</h3>
                <p className={styles.processText}>{s.text}</p>
              </li>
            ))}
          </ol>
          <div className={styles.processCta}>
            <Link className={styles.processBtn} href="/contact">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Need property maintenance help?"
        description="Tell us what you’re seeing on your roof, gutters, siding, or grounds—we’ll recommend the right service mix."
        buttonLabel="Contact Us Today"
        buttonHref="/contact"
      />
    </>
  );
}
