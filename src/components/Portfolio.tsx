"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ArrowUpRight, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const filters = ["Todos", "Driveways", "Pool Decks", "Patios", "Estampado", "Muros"];

const projects = [
  { id: 1,  category: "Driveways",  title: "Driveway Residencial",       desc: "Driveway de concreto liso con borde decorativo y juntas de expansión perfectas.",        img: "/concrete/unnamed.jpg" },
  { id: 2,  category: "Pool Decks", title: "Pool Deck Premium",           desc: "Terraza de piscina con concreto antideslizante y acabado premium en tono gris.",          img: "/concrete/unnamed (1).jpg" },
  { id: 3,  category: "Patios",     title: "Patio Trasero Moderno",       desc: "Patio exterior de concreto liso con diseño moderno y drenaje integrado.",                  img: "/concrete/unnamed (2).jpg" },
  { id: 4,  category: "Estampado",  title: "Concreto Estampado Madera",   desc: "Diseño estampado personalizado con textura de madera y colores premium.",                img: "/concrete/unnamed (3).jpg" },
  { id: 5,  category: "Driveways",  title: "Driveway Amplio",             desc: "Driveway de gran formato con juntas decorativas y acabado liso de alta durabilidad.",      img: "/concrete/unnamed (4).jpg" },
  { id: 6,  category: "Pool Decks", title: "Pool Deck Moderno",           desc: "Cubierta de piscina con acabado elegante y bordes curvados perfectamente ejecutados.",    img: "/concrete/unnamed (5).jpg" },
  { id: 7,  category: "Muros",      title: "Muro de Contención",          desc: "Muro estructural de concreto con refuerzo de acero para control de erosión.",             img: "/concrete/unnamed (6).jpg" },
  { id: 8,  category: "Patios",     title: "Patio & Jardín Integral",     desc: "Proyecto integral: patio más pool deck con diseño uniforme y acabado impecable.",         img: "/concrete/unnamed (7).jpg" },
  { id: 9,  category: "Estampado",  title: "Estampado Piedra Natural",    desc: "Patrón piedra con color personalizado. Terraza exterior de alto impacto visual.",         img: "/concrete/unnamed (8).jpg" },
  { id: 10, category: "Driveways",  title: "Driveway Premium Curvo",      desc: "Diseño curvo con borde redondo y acabado gris antracita. Resultado de lujo.",             img: "/concrete/unnamed (9).jpg" },
  { id: 11, category: "Pool Decks", title: "Pool Deck con Spa",           desc: "Cubierta completa alrededor de piscina y spa con concreto texturizado premium.",          img: "/concrete/unnamed (10).jpg" },
  { id: 12, category: "Muros",      title: "Retaining Wall Curvo",        desc: "Muro de contención curvo con diseño arquitectónico que maximiza el espacio útil.",        img: "/concrete/unnamed (11).jpg" },
  { id: 13, category: "Driveways",  title: "Driveway Grande — Concord",   desc: "Driveway de gran formato con juntas decorativas y borde redondeado de alta precisión.", img: "/concrete/unnamed (12).jpg" },
  { id: 14, category: "Patios",     title: "Patio Frontal — Antioch",     desc: "Proyecto integral: patio + pool deck de concreto liso con drenaje perimetral.",          img: "/concrete/unnamed (13).jpg" },
  { id: 15, category: "Estampado",  title: "Estampado Ladrillo",          desc: "Patrón ladrillo clásico con sello protector UV. Acabado duradero para exteriores.",      img: "/concrete/unnamed (14).jpg" },
  { id: 16, category: "Pool Decks", title: "Pool Deck Travertino",        desc: "Acabado tipo travertino alrededor de piscina. Alta resistencia al calor.",               img: "/concrete/unnamed (15).jpg" },
  { id: 17, category: "Muros",      title: "Muro Decorativo — Brentwood", desc: "Muro estructural con acabado liso y refuerzo de acero interno. Diseño limpio.",          img: "/concrete/unnamed (16).jpg" },
  { id: 18, category: "Driveways",  title: "Driveway Estampado",          desc: "Entrada estampada con patrón hexagonal y colorante integral terracota.",                  img: "/concrete/unnamed (17).jpg" },
  { id: 19, category: "Patios",     title: "Terraza Exterior",            desc: "Terraza de concreto de lujo con bordes biselados y acabado antideslizante.",              img: "/concrete/unnamed (18).jpg" },
  { id: 20, category: "Estampado",  title: "Estampado Pizarra",           desc: "Concreto estampado pizarra con tonos grises profundos. Alta precisión artesanal.",        img: "/concrete/unnamed (19).jpg" },
  { id: 21, category: "Pool Decks", title: "Pool Deck Kool Deck",         desc: "Revestimiento Kool Deck alrededor de piscina. Fresco al tacto y resistente al cloro.",   img: "/concrete/unnamed (20).jpg" },
  { id: 22, category: "Driveways",  title: "Driveway Articulado",         desc: "Concreto articulado con bordes decorativos y juntas de expansión en todo el perímetro.", img: "/concrete/unnamed (21).jpg" },
  { id: 23, category: "Patios",     title: "Patio con Fogata",            desc: "Patio de lujo con área de fogata integrada y concreto expuesto decorativo.",              img: "/concrete/unnamed (22).jpg" },
  { id: 24, category: "Muros",      title: "Block Retaining Wall",        desc: "Muro de bloques de concreto reforzado con drenaje francés integrado.",                    img: "/concrete/unnamed (23).jpg" },
  { id: 25, category: "Estampado",  title: "Estampado Europeo",           desc: "Patrón europeo cobblestone con colorantes en tono champagne. Exclusivo y elegante.",      img: "/concrete/unnamed (24).jpg" },
  { id: 26, category: "Driveways",  title: "Driveway Circular",           desc: "Entrada circular con medallón central estampado. Diseño arquitectónico premium.",         img: "/concrete/unnamed (25).jpg" },
  { id: 27, category: "Patios",     title: "Patio con Rampa",             desc: "Patio accesible con rampa integrada y acabado antideslizante según código ADA.",          img: "/concrete/unnamed (26).jpg" },
];

type Project = (typeof projects)[0];

export default function Portfolio() {
  const [active, setActive] = useState("Todos");
  const [selected, setSelected] = useState<Project | null>(null);
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "Todos" ? projects : projects.filter((p) => p.category === active);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + filtered.length) % filtered.length), [filtered.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % filtered.length), [filtered.length]);

  const visibleCount = 3;
  const getVisible = () => {
    const items: { project: Project; index: number }[] = [];
    for (let i = 0; i < visibleCount; i++) {
      const idx = (current + i) % filtered.length;
      items.push({ project: filtered[idx], index: i });
    }
    return items;
  };

  return (
    <section
      id="proyectos"
      className="relative overflow-hidden"
      style={{ background: "#FFFFFF", paddingTop: "120px", paddingBottom: "120px" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(21,101,192,0.15), transparent)" }} />

      <div className="site-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-tag mb-5 inline-flex">Portfolio de Proyectos</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mt-3">
            <h2
              className="leading-tight"
              style={{
                fontFamily: "var(--font-oswald)",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 700,
                color: "#0F172A",
              }}
            >
              NUESTRO{" "}
              <span className="gradient-text">TRABAJO</span>
            </h2>
            <p className="max-w-sm text-base leading-relaxed" style={{ color: "#64748B", fontFamily: "var(--font-inter)" }}>
              Cada proyecto refleja nuestro compromiso con la calidad y la precisión artesanal.
            </p>
          </div>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-3"
          style={{ marginBottom: "40px" }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => { setActive(f); setCurrent(0); }}
              className="rounded text-sm font-semibold transition-all duration-300"
              style={{
                fontFamily: "var(--font-oswald)",
                letterSpacing: "0.04em",
                padding: "12px 24px",
                background: active === f ? "linear-gradient(135deg, #1565C0, #1976D2)" : "#F1F5F9",
                color: active === f ? "white" : "#64748B",
                border: active === f ? "1px solid rgba(66,165,245,0.3)" : "1px solid #E2E8F0",
                boxShadow: active === f ? "0 4px 16px rgba(21,101,192,0.3)" : "none",
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
            <AnimatePresence mode="popLayout">
              {getVisible().map(({ project: p, index: i }) => (
                <motion.div
                  key={`${active}-${p.id}-${current}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer"
                  style={{ height: "360px", boxShadow: "0 4px 24px rgba(0,0,0,0.1)" }}
                  onClick={() => setSelected(p)}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=70"; }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.2) 55%, transparent 100%)" }} />

                  {/* Category badge */}
                  <div
                    className="absolute top-4 left-4 z-10 rounded-full text-xs font-bold tracking-wide"
                    style={{ padding: "8px 18px", background: "rgba(21,101,192,0.9)", backdropFilter: "blur(10px)", color: "white", fontFamily: "var(--font-oswald)", border: "1px solid rgba(66,165,245,0.3)" }}
                  >
                    {p.category}
                  </div>

                  {/* Zoom */}
                  <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}>
                    <ZoomIn size={16} className="text-white" />
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 z-10" style={{ padding: "36px 32px" }}>
                    <h3 className="text-white font-bold text-lg leading-snug" style={{ fontFamily: "var(--font-oswald)", marginBottom: "10px" }}>
                      {p.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontSize: "13px", lineHeight: "1.7", marginBottom: "16px" }}>
                      {p.desc}
                    </p>
                    <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: "#42A5F5", fontFamily: "var(--font-oswald)" }}>
                      Ver detalle <ArrowUpRight size={14} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-between" style={{ marginTop: "40px" }}>
            <div className="flex items-center" style={{ gap: "10px" }}>
              <button
                onClick={prev}
                className="rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                style={{ width: "40px", height: "40px", background: "#F1F5F9", border: "1px solid #E2E8F0", color: "#1565C0" }}
              >
                <ChevronLeft size={18} strokeWidth={2} />
              </button>
              <button
                onClick={next}
                className="rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                style={{ width: "40px", height: "40px", background: "#1565C0", border: "1px solid rgba(66,165,245,0.3)", color: "white", boxShadow: "0 4px 12px rgba(21,101,192,0.35)" }}
              >
                <ChevronRight size={18} strokeWidth={2} />
              </button>
              <span className="text-sm" style={{ color: "#94A3B8", fontFamily: "var(--font-inter)", marginLeft: "6px", fontSize: "13px" }}>
                {current + 1} — {filtered.length}
              </span>
            </div>

            {/* Dots */}
            <div className="hidden sm:flex items-center gap-2">
              {filtered.slice(0, Math.min(filtered.length, 9)).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === current % filtered.length ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background: i === current % filtered.length ? "#1565C0" : "#E2E8F0",
                  }}
                />
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-primary hidden sm:inline-flex items-center gap-2 rounded text-sm font-bold"
              style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.05em" }}
            >
              <span className="relative z-10">COTIZA TU PROYECTO</span>
              <ArrowUpRight size={16} className="relative z-10" />
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(10,22,40,0.95)", backdropFilter: "blur(20px)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
              style={{ background: "#FFFFFF", boxShadow: "0 32px 80px rgba(0,0,0,0.4)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={selected.img}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=70"; }}
                />
              </div>
              <div className="p-8">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                  style={{ background: "#EFF6FF", border: "1px solid rgba(21,101,192,0.2)", color: "#1565C0", fontFamily: "var(--font-oswald)" }}>
                  {selected.category}
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-oswald)", color: "#0F172A" }}>
                  {selected.title}
                </h3>
                <p style={{ color: "#475569", fontFamily: "var(--font-inter)" }}>{selected.desc}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
                style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(10px)" }}
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
