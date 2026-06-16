import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { services } from "@/data/services";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Maple Property Maintenance services: roof cleaning, gutter cleaning, soft washing, pressure washing, windows, lawn care, exterior maintenance, and seasonal cleanups.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        variant="inner"
        title="Exterior services, done the right way"
        subtitle="Choose a service to see what’s included, typical benefits, and related options—then request a quote when you’re ready."
        imageSrc="/images/hero/home-exterior.png"
        imageAlt="Well maintained residential exterior"
      />
      <section className={styles.section} aria-labelledby="all-services-heading">
        <div className={styles.container}>
          <SectionHeader
            eyebrow="All services"
            id="all-services-heading"
            title="Professional maintenance for every season"
            subtitle="Every visit is built around safe methods, respectful crews, and results you can see from the street."
          />
          <div className={styles.grid}>
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
      <CTASection
        variant="light"
        title="Not sure which service you need?"
        description="Send photos and a short note—we’ll recommend the best starting point and pricing approach."
        buttonLabel="Request a Quote"
        buttonHref="/contact"
      />
    </>
  );
}
