"use client";

import { useMemo, useState } from "react";
import { COMPANY, services } from "@/data/services";
import styles from "./ContactForm.module.css";

type ContactFormProps = {
  id?: string;
  heading?: string;
  intro?: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm({
  id = "contact-form",
  heading = "Send us a message",
  intro = "Tell us what you need—we’ll reply with next steps and a clear quote outline.",
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const options = useMemo(
    () => services.map((s) => ({ value: s.slug, label: s.title })),
    [],
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          service: formData.get("service"),
          message: formData.get("message"),
          _hp: formData.get("_hp"),
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Failed to send your message.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or contact us directly.",
      );
    }
  }

  return (
    <div
      className={styles.root}
      role="region"
      aria-labelledby={`${id}-heading`}
    >
      <div className={styles.card}>
        <div className={styles.copy}>
          <h2 id={`${id}-heading`} className={styles.title}>
            {heading}
          </h2>
          <p className={styles.intro}>{intro}</p>
        </div>
        {status === "success" ? (
          <div className={styles.success} role="status">
            <h3 className={styles.successTitle}>Thank you—your request was sent</h3>
            <p className={styles.successText}>
              We received your message and will get back to you within one business day. If
              it&apos;s urgent, call{" "}
              <a className={styles.inlineLink} href={COMPANY.phoneHref}>
                {COMPANY.phone}
              </a>{" "}
              or email{" "}
              <a className={styles.inlineLink} href={COMPANY.emailHref}>
                {COMPANY.email}
              </a>
              .
            </p>
            <button
              type="button"
              className={styles.reset}
              onClick={() => setStatus("idle")}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form id={id} className={styles.form} onSubmit={onSubmit} noValidate>
            <input
              type="text"
              name="_hp"
              className={styles.honeypot}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              defaultValue=""
            />
            {status === "error" ? (
              <p className={styles.error} role="alert">
                {errorMessage}
              </p>
            ) : null}
            <div className={styles.row}>
              <label className={styles.label} htmlFor={`${id}-name`}>
                Name
              </label>
              <input
                className={styles.input}
                id={`${id}-name`}
                name="name"
                type="text"
                autoComplete="name"
                required
                disabled={status === "loading"}
                placeholder="Your full name"
              />
            </div>
            <div className={styles.row}>
              <label className={styles.label} htmlFor={`${id}-phone`}>
                Phone
              </label>
              <input
                className={styles.input}
                id={`${id}-phone`}
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                disabled={status === "loading"}
                placeholder="(604) 555-0142"
              />
            </div>
            <div className={styles.row}>
              <label className={styles.label} htmlFor={`${id}-email`}>
                Email
              </label>
              <input
                className={styles.input}
                id={`${id}-email`}
                name="email"
                type="email"
                autoComplete="email"
                required
                disabled={status === "loading"}
                placeholder="you@example.com"
              />
            </div>
            <div className={styles.row}>
              <label className={styles.label} htmlFor={`${id}-service`}>
                Service needed
              </label>
              <select
                className={styles.select}
                id={`${id}-service`}
                name="service"
                defaultValue=""
                required
                disabled={status === "loading"}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
                <option value="other">Other / not sure</option>
              </select>
            </div>
            <div className={styles.row}>
              <label className={styles.label} htmlFor={`${id}-message`}>
                Message
              </label>
              <textarea
                className={styles.textarea}
                id={`${id}-message`}
                name="message"
                rows={5}
                required
                disabled={status === "loading"}
                placeholder="Property address, photos link (optional), timing, and any access notes."
              />
            </div>
            <button
              type="submit"
              className={styles.submit}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending…" : "Submit request"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
