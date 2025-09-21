import Section from "@/components/Section";
export default function DownloadsPage(){
  return (
    <Section title="التحميلات" desc="حمّل بروفايل الشركة والوثائق التعريفية.">
      <div className="grid gap-4 md:grid-cols-2">
        <a href="/docs/company-profile.pdf" className="card p-6 hover:shadow-lg transition">
          <h3 className="font-bold">بروفايل الشركة (PDF)</h3>
          <p className="text-slate-600 mt-2">عرض الخدمات والإنجازات الأساسية.</p>
          <span className="inline-block mt-4 text-brand font-medium">تحميل</span>
        </a>
        <a href="/docs/company-profile-ar.pdf" className="card p-6 hover:shadow-lg transition">
          <h3 className="font-bold">بروفايل الشركة (عربي)</h3>
          <p className="text-slate-600 mt-2">نسخة عربية مختصرة — (ضع الملف بنفس الاسم).</p>
          <span className="inline-block mt-4 text-brand font-medium">تحميل</span>
        </a>
      </div>
      <p className="text-sm text-slate-500 mt-3">ملاحظة: ضع ملفات PDF في <code>/public/docs</code>.</p>
    </Section>
  );
}
