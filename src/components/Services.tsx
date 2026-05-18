"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Route, Waves, TreePine, Palette, Layers, HardHat,
  ArrowUpRight, Check, Phone,
} from "lucide-react";

const services = [
  {
    num: "01",
    Icon: Route,
    title: "Driveways de Concreto",
    desc: "Entradas residenciales y comerciales con acabados de alta precisión. Diseños que incrementan el valor de tu propiedad.",
    features: ["Acabado liso premium", "Estampado decorativo", "Concreto colorido", "Juntas de expansión"],
    accent: "#2196F3",
    img: "/concrete/service-driveways.jpg",
  },
  {
    num: "02",
    Icon: Waves,
    title: "Pool Decks & Surrounds",
    desc: "Terrazas alrededor de piscinas con superficies antideslizantes, durables y estéticamente impecables.",
    features: ["Superficie antideslizante", "Resistente al calor", "Drenaje integrado", "Múltiples texturas"],
    accent: "#0EA5E9",
    img: "/concrete/service-pooldecks.jpg",
  },
  {
    num: "03",
    Icon: TreePine,
    title: "Patios & Exteriores",
    desc: "Transformamos espacios al aire libre en extensiones de lujo de tu hogar con concreto de primera calidad.",
    features: ["Patios amplios", "Bordes decorativos", "Integración paisajística", "Drenaje perimetral"],
    accent: "#10B981",
    img: "/concrete/service-patios.jpg",
  },
  {
    num: "04",
    Icon: Palette,
    title: "Concreto Estampado",
    desc: "Texturas y patrones personalizados — madera, piedra, ladrillo — con colorantes premium y acabado sellado.",
    features: ["Patrón madera", "Patrón piedra", "Patrón ladrillo", "Colorantes premium"],
    accent: "#8B5CF6",
    img: "/concrete/service-estampado.jpg",
  },
  {
    num: "05",
    Icon: Layers,
    title: "Muros de Contención",
    desc: "Estructuras sólidas que controlan la erosión y crean niveles funcionales en terrenos con desnivel.",
    features: ["Refuerzo de acero", "Drenaje correcto", "Alta resistencia", "Diseño estructural"],
    accent: "#F59E0B",
    img: "/concrete/service-muros.jpg",
  },
  {
    num: "06",
    Icon: HardHat,
    title: "Cimentaciones & Comercial",
    desc: "Proyectos de cimentación a gran escala para edificios residenciales y comerciales en todo el Bay Area.",
    features: ["Cimientos profundos", "Losas industriales", "Refuerzo con acero", "Código de edificación"],
    accent: "#EF4444",
    img: "/concrete/service-cimentaciones.jpg",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="servicios"
      className="relative overflow-hidden"
      style={{ background: "#F8FAFC", paddingTop: "140px", paddingBottom: "140px" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(21,101,192,0.12), transparent)" }} />

      <div className="site-container" ref={ref}>

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end" style={{ marginBottom: "96px" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag inline-flex" style={{ marginBottom: "24px" }}>
              Servicios Especializados
            </span>
            <h2
              className="mt-0 leading-none"
              style={{
                fontFamily: "var(--font-oswald)",
                fontSize: "clamp(40px, 6vw, 76px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: "#0F172A",
              }}
            >
              NUESTROS
              <br />
              <span className="gradient-text">SERVICIOS</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg leading-relaxed lg:mb-3"
            style={{ color: "#475569", fontFamily: "var(--font-inter)" }}
          >
            Desde driveways residenciales hasta cimentaciones comerciales — ejecutamos
            cada proyecto con precisión artesanal y materiales certificados de primera calidad.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Image banner */}
              <div className="relative overflow-hidden" style={{ height: "200px" }}>
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, rgba(10,22,40,0.15) 0%, rgba(10,22,40,0.55) 100%)" }}
                />
                {/* Accent overlay strip */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: `linear-gradient(90deg, ${s.accent}, ${s.accent}88)` }}
                />
                {/* Number badge */}
                <span
                  className="absolute top-4 right-4 font-bold leading-none"
                  style={{ fontFamily: "var(--font-oswald)", fontSize: "36px", color: "rgba(255,255,255,0.35)" }}
                >
                  {s.num}
                </span>
              </div>

              {/* Card content */}
              <div style={{ padding: "36px 40px" }}>
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className="relative w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${s.accent}22, ${s.accent}0a)`,
                      border: `1px solid ${s.accent}33`,
                    }}
                  >
                    <s.Icon size={22} style={{ color: s.accent }} strokeWidth={1.5} />
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ boxShadow: `0 0 20px ${s.accent}50`, background: `${s.accent}08` }}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-xl mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-oswald)", fontWeight: 600, letterSpacing: "0.02em", color: "#0F172A" }}
                >
                  {s.title}
                </h3>

                {/* Divider */}
                <div
                  className="w-10 h-0.5 mb-4 rounded-full transition-all duration-300 group-hover:w-16"
                  style={{ background: `linear-gradient(90deg, ${s.accent}, transparent)` }}
                />

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-7"
                  style={{ color: "#475569", fontFamily: "var(--font-inter)", lineHeight: 1.7 }}
                >
                  {s.desc}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-3" style={{ marginBottom: "32px" }}>
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: `${s.accent}18`, border: `1px solid ${s.accent}30` }}
                      >
                        <Check size={11} style={{ color: s.accent }} strokeWidth={2.5} />
                      </div>
                      <span className="text-sm" style={{ color: "#475569", fontFamily: "var(--font-inter)" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA link */}
                <div
                  className="inline-flex items-center gap-2 text-sm font-bold rounded transition-all duration-300"
                  style={{
                    padding: "14px 28px",
                    color: s.accent,
                    fontFamily: "var(--font-oswald)",
                    letterSpacing: "0.05em",
                    background: `${s.accent}0f`,
                    border: `1px solid ${s.accent}22`,
                  }}
                >
                  SOLICITAR COTIZACIÓN
                  <ArrowUpRight size={14} strokeWidth={2} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-20 rounded-2xl flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left"
          style={{
            background: "linear-gradient(135deg, #EFF6FF, #DBEAFE)",
            border: "1px solid rgba(21,101,192,0.2)",
            padding: "48px 56px",
          }}
        >
          <div className="flex-1">
            <h3
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.02em", color: "#0F172A" }}
            >
              ¿NO VES LO QUE NECESITAS?
            </h3>
            <p style={{ color: "#475569", fontFamily: "var(--font-inter)", fontSize: "15px" }}>
              Llevamos 20+ años en el negocio. Si lo imaginas en concreto, lo podemos construir.
            </p>
          </div>
          <a
            href="tel:9252385488"
            className="btn-primary shrink-0 flex items-center gap-3 rounded font-bold"
            style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.06em", whiteSpace: "nowrap" }}
          >
            <Phone size={16} className="relative z-10" strokeWidth={2} />
            <span className="relative z-10">LLAMAR: (925) 238-5488</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
