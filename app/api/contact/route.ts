import { NextResponse } from "next/server";
export const runtime = "nodejs";
export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();
    const nodemailer = await import("nodemailer").then(m => m.default);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
    await transporter.sendMail({
      from: `"3RMCC Website" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: subject || "رسالة جديدة من الموقع",
      text: `الاسم: ${name}\nالإيميل: ${email}\n\n${message}`
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
