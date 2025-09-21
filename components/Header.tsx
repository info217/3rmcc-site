"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link href={href} className={`px-3 py-2 rounded-lg text-sm md:text-base transition ${active ? "bg-brand/10 text-brand" : "text-slate-700 hover:text-brand"}`}>
      {children}
    </Link>
  );
};
export default function Header(){
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.svg" alt="3RMCC" width={40} height={40}/>
          <span className="font-head text-xl font-bold">3RMCC</span>
        </Link>
        <nav className="flex items-center gap-1 md:gap-2">
          <NavLink href="/">الرئيسية</NavLink>
          <NavLink href="/about">من نحن</NavLink>
          <NavLink href="/projects">مشاريعنا</NavLink>
          <NavLink href="/downloads">التحميلات</NavLink>
          <NavLink href="/contact">تواصل معنا</NavLink>
        </nav>
      </div>
    </header>
  );
}
