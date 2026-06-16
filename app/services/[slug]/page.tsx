import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { getRelatedServices, getServiceBySlug, services } from "@/data/services";
import styles from "./service-detail.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "Service" };
  }
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.relatedSlugs);

  return (
    <>
      <Hero
        variant="inner"
        title={service.title}
        subtitle={service.shortDescription}
        imageSrc={service.image}
        imageAlt={`${service.title} — Maple Property Maintenance`}
        primaryCta={{ href: "/contact", label: "Get a Free Quote" }}
        secondaryCta={{ href: "/services", label: "All Services" }}
      />

      <section className={styles.section} aria-labelledby="service-overview">
        <div className={styles.container}>
          <div className={styles.split}>
            <div>
              <h2 id="service-overview" className={styles.h2}>
                Service overview
              </h2>
              <p className={styles.lead}>{service.description}</p>
            </div>
            <div className={styles.media}>
              <div className={styles.mediaFrame}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 420px"
                  className={styles.mediaImg}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.muted}`} aria-labelledby="included-heading">
        <div className={styles.container}>
          <SectionHeader
            id="included-heading"
            eyebrow="Details"
            title="What’s included"
            subtitle="Exact scope can vary by property—your quote will spell out access, heights, and any add-ons."
          />
          <ul className={styles.list}>
            {service.included.map((item) => (
              <li key={item} className={styles.listItem}>
                <span className={styles.bullet} aria-hidden>
                  ●
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="benefits-heading">
        <div className={styles.container}>
          <SectionHeader
            id="benefits-heading"
            eyebrow="Benefits"
            title="Why this service matters"
            subtitle="Good exterior maintenance isn’t just about looks—it’s about protecting finishes, drainage, and long-term value."
          />
          <div className={styles.benefits}>
            {service.benefits.map((b) => (
              <div key={b} className={styles.benefitCard}>
                <p className={styles.benefitText}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready for ${service.title.toLowerCase()}?`}
        description="Share your address, photos, and timing preferences—we’ll respond with a clear plan."
        buttonLabel="Contact Us Today"
        buttonHref="/contact"
      />

      <section className={`${styles.section} ${styles.muted}`} aria-labelledby="related-heading">
        <div className={styles.container}>
          <SectionHeader
            id="related-heading"
            eyebrow="Related"
            title="Services often booked together"
            align="center"
          />
          <div className={styles.relatedGrid}>
            {related.map((s) => (
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
          <div className={styles.backRow}>
            <Link className={styles.backLink} href="/services">
              ← Back to all services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
