import Image from "next/image";
import Link from "next/link";
export default function Hero(){
  return (
    <section className="hero-bg">
      <div className="container grid md:grid-cols-2 items-center gap-10 py-16 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 bg-brand/10 text-brand rounded-full px-3 py-1 text-sm font-medium">خبرة + جودة</span>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">حلول مقاولات متكاملة<br/>لإنجاز مشاريعك بثقة</h1>
          <p className="mt-4 text-slate-600">من الدراسات الهندسية إلى الإشراف والتنفيذ، نقدّم خدمات شاملة بمعايير عالية.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/contact" className="btn">ابدأ مشروعك</Link>
            <Link href="/projects" className="btn-outline">مشاريعنا</Link>
          </div>
        </div>
        <div className="relative">
          <Image src="/images/hero-shape.svg" alt="Hero" width={720} height={480} className="w-full h-auto drop-shadow-xl"/>
        </div>
      </div>
    </section>
  );
}
