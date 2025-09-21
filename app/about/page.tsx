import Section from "@/components/Section";
import Image from "next/image";
export default function AboutPage(){
  return (
    <Section title="من نحن" desc="شركة 3RMCC للمقاولات – خبرة عملية وفريق هندسي محترف.">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="prose prose-slate max-w-none rtl:prose-p:text-right">
          <p>نقدّم حلول المقاولات والبناء من الدراسات الهندسية، إدارة المشاريع، التنفيذ، إلى التسليم النهائي. نلتزم بأعلى معايير الجودة والسلامة والالتزام بالمواعيد.</p>
          <ul className="list-disc pr-5 mt-4 text-slate-700">
            <li>إدارة مشاريع شاملة</li>
            <li>إشراف وتنفيذ بمعايير عالمية</li>
            <li>تجربة عملاء مرنة وواضحة</li>
          </ul>
        </div>
        <Image src="/images/about.jpg" alt="About" width={720} height={480} className="rounded-2xl shadow-soft w-full h-auto"/>
      </div>
    </Section>
  );
}
