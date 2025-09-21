"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);

    const form = e.currentTarget;
    const body = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      (form as HTMLFormElement).reset();
      setMsg("تم إرسال رسالتك بنجاح.");
    } else {
      setMsg("تعذّر الإرسال، حاول مرة أخرى.");
    }
    setLoading(false);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-xl">
      <input name="name" placeholder="الاسم" required className="w-full border rounded p-2" />
      <input name="email" type="email" placeholder="البريد" required className="w-full border rounded p-2" />
      <input name="phone" placeholder="الجوال" className="w-full border rounded p-2" />
      <textarea name="message" rows={5} placeholder="الرسالة" required className="w-full border rounded p-2" />
      <button disabled={loading} className="px-5 py-3 rounded bg-red-600 text-white">
        {loading ? "جارٍ الإرسال..." : "إرسال"}
      </button>
      {msg && <p className="text-sm mt-2">{msg}</p>}
    </form>
  );
}