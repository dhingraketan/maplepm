import nodemailer from "nodemailer";

export type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

function getSmtpConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  const port = Number(process.env.SMTP_PORT || 587);
  const secure =
    process.env.SMTP_SECURE === "true" ||
    (port === 465 && process.env.SMTP_SECURE !== "false");

  return { host, port, secure, user, pass };
}

function getFromAddress(mailbox: string): string {
  const displayName =
    process.env.SMTP_FROM_NAME?.trim() || "Maple Property Maintenance";
  return `"${displayName}" <${mailbox}>`;
}

export async function sendContactEmail(
  payload: ContactPayload,
  serviceLabel: string,
): Promise<void> {
  const smtp = getSmtpConfig();
  if (!smtp) {
    throw new Error(
      "Email is not configured. Add SMTP settings to .env.local and restart the dev server.",
    );
  }

  const to = process.env.CONTACT_TO?.trim() || smtp.user;
  const from = getFromAddress(smtp.user);

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    requireTLS: smtp.port === 587,
    auth: {
      user: smtp.user,
      pass: smtp.pass,
    },
    tls: {
      minVersion: "TLSv1.2",
    },
  });

  await transporter.verify();

  const text = [
    "New contact form submission",
    "",
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    `Service: ${serviceLabel}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></p>
    <p><strong>Service:</strong> ${escapeHtml(serviceLabel)}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap;">${escapeHtml(payload.message)}</p>
  `;

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject: `Quote request: ${serviceLabel} — ${payload.name}`,
    text,
    html,
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
