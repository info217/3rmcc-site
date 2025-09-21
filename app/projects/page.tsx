import Section from "@/components/Section";
import Image from "next/image";
const projects = Array.from({length:6}).map((_,i)=>({ title:`مشروع ${i+1}`, img:`/images/project-${(i%3)+1}.jpg`, desc:"وصف موجز للمشروع والخدمات المقدمة." }));
export default function ProjectsPage(){
  return (
    <Section title="مشاريعنا" desc="استعرض بعض أعمالنا المنجزة.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p,idx)=>(
          <div key={idx} className="card overflow-hidden">
            <Image src={p.img} alt={p.title} width={640} height={400} className="w-full h-48 object-cover"/>
            <div className="p-5">
              <h3 className="font-bold">{p.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
