import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Image from "next/image";
export default function HomePage(){
  return (<>
    <Hero/>
    <Section title="خدماتنا" desc="باقة متكاملة لتغطية دورة المشروع من الفكرة حتى التسليم.">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { t:"إدارة المشاريع", d:"تخطيط، توقيت، ومتابعة مؤشرات الأداء.", i:"/images/icon-1.svg" },
          { t:"التنفيذ والإشراف", d:"فرق متخصصة، ومعايير سلامة وجودة.", i:"/images/icon-2.svg" },
          { t:"التشطيب والتسليم", d:"تشطيبات دقيقة وتسليم ضمن المدة.", i:"/images/icon-3.svg" }
        ].map((f,idx)=>(
          <div key={idx} className="card p-6">
            <Image src={f.i} alt="" width={40} height={40}/>
            <h3 className="mt-4 font-bold text-lg">{f.t}</h3>
            <p className="text-slate-600 mt-2">{f.d}</p>
          </div>
        ))}
      </div>
    </Section>
    <Section title="نماذج من أعمالنا">
      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map(n => (
          <div key={n} className="card overflow-hidden">
            <Image src={`/images/project-${n}.jpg`} alt={`مشروع ${n}`} width={640} height={400} className="w-full h-48 object-cover"/>
            <div className="p-5">
              <h4 className="font-bold">مشروع {n}</h4>
              <p className="text-slate-600 mt-1 text-sm">وصف مختصر عن المشروع والخدمات المقدّمة.</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
    <Section title="جاهز للبدء؟" desc="تواصل معنا لنساعدك في إطلاق مشروعك.">
      <div className="card p-6 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
        <p className="text-slate-700">استشر فريقنا واحصل على عرض تفصيلي.</p>
        <a href="/contact" className="btn">تواصل الآن</a>
      </div>
    </Section>
  </>);
}
