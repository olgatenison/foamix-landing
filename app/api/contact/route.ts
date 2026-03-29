// app\api\contact\route.ts
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
  website: z.string().optional().default(""),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = ContactSchema.parse(json);

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
      COMPANY_SITE_URL,
      COMPANY_PHONE,
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
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.verify();

    const adminSubject = `Foamix: нова заявка з сайту (${data.firstName} ${data.lastName})`;

    const adminText = [
      `Ім'я: ${data.firstName}`,
      `Прізвище: ${data.lastName}`,
      `Телефон: ${data.phone}`,
      `Email: ${data.email}`,
      ``,
      `Повідомлення:`,
      data.message,
    ].join("\n");

    const adminHtml = `
      <h2>Нова заявка з сайту Foamix</h2>
      <ul>
        <li><b>Ім'я:</b> ${escapeHtml(data.firstName)}</li>
        <li><b>Прізвище:</b> ${escapeHtml(data.lastName)}</li>
        <li><b>Телефон:</b> ${escapeHtml(data.phone)}</li>
        <li><b>Email:</b> ${escapeHtml(data.email)}</li>
      </ul>
      <p><b>Повідомлення:</b></p>
      <p style="white-space: pre-wrap;">${escapeHtml(data.message)}</p>
    `;

    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: data.email,
      subject: adminSubject,
      text: adminText,
      html: adminHtml,
    });

    const siteUrl = COMPANY_SITE_URL || "foamix.com.ua";
    const companyPhone = COMPANY_PHONE || "+380770120077";

    const userSubject = "Foamix — вашу заявку отримано";

    const userText = [
      `Вітаємо, ${data.firstName}!`,
      ``,
      `Дякуємо, ви надіслали заявку до Foamix.`,
      `Ми отримали ваше повідомлення та зв'яжемося з вами найближчим часом.`,
      ``,
      `Наш сайт: ${siteUrl}`,
      `Телефон: ${companyPhone}`,
      ``,
      `Якщо ваше питання термінове, можете зателефонувати нам напряму.`,
      ``,
      `З повагою,`,
      `Команда Foamix`,
    ].join("\n");

    const userHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin-bottom: 16px;">Вітаємо, ${escapeHtml(data.firstName)}!</h2>
        <p>Дякуємо, ви надіслали заявку до <b>Foamix</b>.</p>
        <p>Ми отримали ваше повідомлення та зв'яжемося з вами <b>найближчим часом</b>.</p>
        <p>
          <b>Сайт:</b> <a href="${escapeHtml(siteUrl)}">${escapeHtml(siteUrl)}</a><br />
          <b>Телефон:</b> <a href="tel:${escapeHtml(companyPhone)}">${escapeHtml(companyPhone)}</a>
        </p>
        <p>Якщо ваше питання термінове, можете зателефонувати нам напряму.</p>
        <p style="margin-top: 24px;">
          З повагою,<br />
          <b>Команда Foamix</b>
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL,
      to: data.email,
      subject: userSubject,
      text: userText,
      html: userHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT_API_ERROR", err);

    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, error: "Validation error", issues: err.issues },
        { status: 400 },
      );
    }

    const message =
      err instanceof Error ? err.message : "Unknown mail send error";

    return NextResponse.json({ ok: false, error: message }, { status: 500 });
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
