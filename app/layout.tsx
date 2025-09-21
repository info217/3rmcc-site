import type { Metadata } from "next";
import "./globals.css";
import { Tajawal } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tajawal = Tajawal({ subsets:["arabic","latin"], weight:["400","500","700"], display:"swap", variable:"--font-tajawal" });

export const metadata: Metadata = {
  title: "3RMCC | شركة الهدى للمقاولات",
  description: "حلول هندسية متكاملة للمقاولات والبناء.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body className="font-body min-h-dvh bg-slate-50 selection:bg-brand/20 selection:text-slate-900">
        <div className="relative bg-radial-fade">
          <Header />
          <main className="min-h-[70dvh]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
