/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}","./pages/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#10b981", 50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",
          500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"
        }
      },
      fontFamily: { head: ["var(--font-tajawal)"], body: ["var(--font-tajawal)"] },
      backgroundImage: {
        "grid-slate": "linear-gradient(to right, rgb(71 85 105 / .08) 1px, transparent 1px), linear-gradient(to bottom, rgb(71 85 105 / .08) 1px, transparent 1px)",
        "radial-fade": "radial-gradient(ellipse at top, rgba(16,185,129,.25), transparent 45%), radial-gradient(ellipse at bottom, rgba(14,165,233,.25), transparent 45%)"
      },
      backgroundSize: { "grid-sm": "24px 24px" },
      boxShadow: { soft: "0 10px 30px -10px rgba(2,6,23,0.25)" }
    }
  },
  plugins: []
};
