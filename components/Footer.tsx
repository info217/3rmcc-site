import Link from "next/link";
export default function Footer(){
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="font-bold text-lg mb-3">شركة 3RMCC</h4>
          <p className="text-slate-600">حلول هندسية متكاملة للمقاولات، الإشراف، والتنفيذ بجودة عالمية.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-3">روابط سريعة</h4>
          <ul className="space-y-2 text-slate-600">
            <li><Link href="/about" className="hover:text-brand">من نحن</Link></li>
            <li><Link href="/projects" className="hover:text-brand">مشاريعنا</Link></li>
            <li><Link href="/downloads" className="hover:text-brand">الملفات</Link></li>
            <li><Link href="/contact" className="hover:text-brand">تواصل</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-3">التواصل</h4>
          <p className="text-slate-600">info@3rmcc.com</p>
          <p className="text-slate-600">+966-..-....</p>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} 3RMCC. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
