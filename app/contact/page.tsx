"use client";
import Section from "@/components/Section";
import { useState } from "react";
export default function ContactPage(){
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState<string|null>(null);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setLoading(true); setDone(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(f.entries())),
        headers: { "Content-Type": "application/json" }
      });
      const data = await res.json();
      setDone(data.ok ? "تم الإرسال بنجاح" : "حدث خطأ في الإرسال");
    } catch { setDone("تعذر الإرسال، حاول مرة أخرى"); }
    finally { setLoading(false); }
  }
  return (
    <Section title="تواصل معنا" desc="يسعدنا استقبال استفسارك.">
      <form onSubmit={onSubmit} className="card p-6 grid gap-4 max-w-2xl">
        <div className="grid md:grid-cols-2 gap-4">
          <input name="name" required placeholder="الاسم" className="rounded-xl border border-slate-300 px-4 py-3"/>
          <input name="email" required type="email" placeholder="الإيميل" className="rounded-xl border border-slate-300 px-4 py-3"/>
        </div>
        <input name="subject" placeholder="الموضوع" className="rounded-xl border border-slate-300 px-4 py-3"/>
        <textarea name="message" required placeholder="نص الرسالة" rows={5} className="rounded-xl border border-slate-300 px-4 py-3"/>
        <button className="btn w-fit" disabled={loading}>{loading ? "جارٍ الإرسال..." : "إرسال"}</button>
        {done && <p className="text-sm text-slate-600">{done}</p>}
      </form>
    </Section>
  );
}
