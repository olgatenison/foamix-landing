import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const ContactSchema = z.object({
  firstName: z.string().min(2, "Вкажіть ім'я (мінімум 2 символи)"),
  lastName: z.string().min(2, "Вкажіть прізвище (мінімум 2 символи)"),
  phone: z
    .string()
    .min(7, "Вкажіть телефон")
    .max(30, "Занадто довгий телефон")
    .regex(/^[0-9+()\-\s]+$/, "Некоректний формат телефону"),
  email: z.string().email("Некоректна електронна пошта"),
  message: z.string().min(10, "Повідомлення має бути мінімум 10 символів"),
  // защита от спама (honeypot)
  website: z.string().optional().default(""),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = ContactSchema.parse(json);

    // honeypot: если заполнено — бот
    if (data.website && data.website.trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO_EMAIL,
      CONTACT_FROM_EMAIL,
    } = process.env;

    if (
      !SMTP_HOST ||
      !SMTP_PORT ||
      !SMTP_USER ||
      !SMTP_PASS ||
      !CONTACT_TO_EMAIL ||
      !CONTACT_FROM_EMAIL
    ) {
      return NextResponse.json(
        { ok: false, error: "Server mail config missing" },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // true для 465, иначе false
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const subject = `Foamix: нова заявка з сайту (${data.firstName} ${data.lastName})`;

    const text = [
      `Ім'я: ${data.firstName}`,
      `Прізвище: ${data.lastName}`,
      `Телефон: ${data.phone}`,
      `Email: ${data.email}`,
      ``,
      `Повідомлення:`,
      data.message,
    ].join("\n");

    const html = `
      <h2>Нова заявка з сайту Foamix</h2>
      <ul>
        <li><b>Ім'я:</b> ${escapeHtml(data.firstName)}</li>
        <li><b>Прізвище:</b> ${escapeHtml(data.lastName)}</li>
        <li><b>Телефон:</b> ${escapeHtml(data.phone)}</li>
        <li><b>Email:</b> ${escapeHtml(data.email)}</li>
      </ul>
      <p><b>Повідомлення:</b></p>
      <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
    `;

    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL, // например "Foamix <no-reply@foamix.com>"
      to: CONTACT_TO_EMAIL, // куда получать заявки
      replyTo: data.email, // чтобы можно было "ответить" клиенту
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, error: "Validation error", issues: err.issues },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { ok: false, error: "Mail send error" },
      { status: 500 },
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
