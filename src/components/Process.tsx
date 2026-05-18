"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, Ruler, Wrench, ClipboardCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    Icon: MessageSquare,
    title: "Consulta Gratuita",
    desc: "Te visitamos, evaluamos el proyecto, medimos el área y entendemos exactamente lo que necesitas.",
    tag: "Día 1",
    color: "#2196F3",
  },
  {
    num: "02",
    Icon: Ruler,
    title: "Diseño & Cotización",
    desc: "Plan detallado con materiales, tiempos y costo total. Sin costos ocultos ni sorpresas.",
    tag: "Día 2–3",
    color: "#8B5CF6",
  },
  {
    num: "03",
    Icon: Wrench,
    title: "Instalación Experta",
    desc: "Nuestro equipo ejecuta con precisión y supervisión constante en cada etapa del proceso.",
    tag: "Variable",
    color: "#10B981",
  },
  {
    num: "04",
    Icon: ClipboardCheck,
    title: "Inspección Final",
    desc: "Revisión completa del trabajo terminado. Tu aprobación es la prioridad. Garantía incluida.",
    tag: "Último día",
    color: "#F59E0B",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="proceso"
      className="relative overflow-hidden"
      style={{ paddingTop: "100px", paddingBottom: "80px" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/concrete/process-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(3,8,16,0.88) 0%, rgba(10,22,55,0.82) 100%)" }}
      />

      <div className="site-container relative z-10" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: "88px" }}
        >
          <span className="section-tag inline-flex" style={{ marginBottom: "20px" }}>Nuestro Proceso</span>
          <h2
            className="leading-none"
            style={{
              fontFamily: "var(--font-oswald)",
              fontSize: "clamp(40px, 6vw, 76px)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: "#FFFFFF",
              marginTop: "12px",
            }}
          >
            NUESTRO PROCESO{" "}
            <span className="gradient-text">DE TRABAJO</span>
          </h2>
          <p
            className="max-w-lg mx-auto text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-inter)", marginTop: "24px", textAlign: "center" }}
          >
            Un proceso simple y transparente, diseñado para que tu experiencia sea
            totalmente sin estrés de inicio a fin.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.14 }}
              className="group flex flex-col items-center text-center rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                padding: "40px 32px 36px",
              }}
            >
              {/* Icon */}
              <div className="relative" style={{ marginBottom: "24px" }}>
                <div
                  className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle, ${s.color}18, transparent 70%)` }}
                />
                <div
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${s.color}25, ${s.color}10)`,
                    border: `1.5px solid ${s.color}40`,
                    boxShadow: `0 8px 32px ${s.color}20`,
                  }}
                >
                  <s.Icon size={24} style={{ color: s.color }} strokeWidth={1.75} />
                </div>
                <div
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{
                    background: s.color,
                    color: "white",
                    fontFamily: "var(--font-oswald)",
                    fontSize: "11px",
                    fontWeight: 700,
                    boxShadow: `0 4px 12px ${s.color}50`,
                  }}
                >
                  {i + 1}
                </div>
              </div>

              {/* Tag */}
              <span
                className="inline-block rounded-full text-xs font-semibold"
                style={{
                  padding: "6px 14px",
                  marginBottom: "16px",
                  background: `${s.color}14`,
                  border: `1px solid ${s.color}28`,
                  color: s.color,
                  fontFamily: "var(--font-oswald)",
                  letterSpacing: "0.06em",
                }}
              >
                {s.tag}
              </span>

              {/* Title */}
              <h3
                className="text-xl font-bold"
                style={{
                  fontFamily: "var(--font-oswald)",
                  letterSpacing: "0.02em",
                  color: "#FFFFFF",
                  marginBottom: "12px",
                }}
              >
                {s.title}
              </h3>

              {/* Divider */}
              <div
                className="w-8 h-0.5 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${s.color}, transparent)`,
                  marginBottom: "16px",
                }}
              />

              {/* Description */}
              <p
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-inter)", lineHeight: 1.75 }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="rounded-2xl overflow-hidden"
          style={{ marginTop: "32px", border: "1px solid rgba(21,101,192,0.2)" }}
        >
          <div
            className="flex flex-col items-center text-center"
            style={{ background: "#1565C0", gap: "16px", padding: "32px 40px" }}
          >
            {/* Icon */}
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1.5px solid rgba(255,255,255,0.3)",
              }}
            >
              <ClipboardCheck size={36} style={{ color: "white" }} strokeWidth={1.5} />
            </div>

            {/* Text */}
            <div>
              <h3
                className="text-white font-bold"
                style={{
                  fontFamily: "var(--font-oswald)",
                  letterSpacing: "0.02em",
                  fontSize: "clamp(20px, 3vw, 30px)",
                  marginBottom: "12px",
                }}
              >
                GARANTÍA DE SATISFACCIÓN TOTAL
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-inter)" }}
              >
                Si no estás 100% satisfecho, regresamos y lo corregimos sin costo adicional.
                Más de 20 años de excelencia respaldan nuestra garantía.
              </p>
            </div>

            {/* CTA */}
            <a
              href="tel:9252385488"
              className="btn-primary shrink-0 flex items-center gap-3 rounded font-bold"
              style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.06em", whiteSpace: "nowrap" }}
            >
              <span className="relative z-10">EMPEZAR HOY</span>
              <ArrowRight size={16} className="relative z-10" strokeWidth={2.5} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
