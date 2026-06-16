import { NextResponse } from "next/server";
import { getServiceBySlug } from "@/data/services";
import { sendContactEmail, type ContactPayload } from "@/lib/mail";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function getServiceLabel(slug: string): string {
  if (slug === "other") return "Other / not sure";
  const service = getServiceBySlug(slug);
  return service?.title ?? slug;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload> & {
      _hp?: string;
    };

    if (typeof body._hp === "string" && body._hp.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    if (
      !isNonEmptyString(body.name) ||
      !isNonEmptyString(body.phone) ||
      !isNonEmptyString(body.email) ||
      !isNonEmptyString(body.service) ||
      !isNonEmptyString(body.message)
    ) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (!EMAIL_RE.test(body.email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const payload: ContactPayload = {
      name: body.name.trim(),
      phone: body.phone.trim(),
      email: body.email.trim(),
      service: body.service.trim(),
      message: body.message.trim(),
    };

    await sendContactEmail(payload, getServiceLabel(payload.service));

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown email error";
    console.error("Contact form error:", message, error);

    const hint =
      process.env.NODE_ENV === "development"
        ? message
        : "We could not send your message right now. Please call us or email info@maplepm.ca directly.";

    return NextResponse.json({ error: hint }, { status: 500 });
  }
}
