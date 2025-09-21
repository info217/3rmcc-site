export default function Section({ title, desc, children }:{ title:string; desc?:string; children: React.ReactNode }){
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
          {desc && <p className="text-slate-600 mb-8">{desc}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
