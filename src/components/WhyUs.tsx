"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award, BadgeCheck, Globe, Target, Timer, Tag,
  Phone, Mail, MapPin,
} from "lucide-react";

const features = [
  {
    Icon: Award,
    title: "20+ Años de Experiencia",
    desc: "Desde 2004 ejecutando proyectos de concreto en el Bay Area con el más alto estándar de calidad.",
    stat: "20+",
    statLabel: "años",
    color: "#2196F3",
  },
  {
    Icon: BadgeCheck,
    title: "Totalmente Licenciado",
    desc: "Lic. Estatal #1105655. Completamente asegurado y bonded para cada proyecto que tomamos.",
    stat: "Lic.",
    statLabel: "#1105655",
    color: "#10B981",
  },
  {
    Icon: Globe,
    title: "Inglés & Español",
    desc: "Servimos a toda la comunidad del Bay Area en ambos idiomas, con comunicación clara desde el inicio.",
    stat: "2",
    statLabel: "idiomas",
    color: "#8B5CF6",
  },
  {
    Icon: Target,
    title: "Precisión Artesanal",
    desc: "Cada corte, cada junta, cada acabado — ejecutado con el más alto estándar. Sin mediocridad.",
    stat: "100%",
    statLabel: "calidad",
    color: "#F59E0B",
  },
  {
    Icon: Timer,
    title: "Entregas a Tiempo",
    desc: "Respetamos tu tiempo y tu propiedad. Llegamos cuando decimos y terminamos cuando prometemos.",
    stat: "500+",
    statLabel: "proyectos",
    color: "#0EA5E9",
  },
  {
    Icon: Tag,
    title: "Precios Transparentes",
    desc: "Sin costos ocultos. Cotizamos con detalle y respetamos el precio acordado siempre.",
    stat: "$0",
    statLabel: "costos ocultos",
    color: "#EF4444",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="nosotros"
      className="relative overflow-hidden"
      style={{ background: "#FFFFFF", paddingTop: "140px", paddingBottom: "140px" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(21,101,192,0.12), transparent)" }} />

      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{
          fontFamily: "var(--font-oswald)",
          fontSize: "clamp(140px, 22vw, 320px)",
          fontWeight: 900,
          color: "rgba(21,101,192,0.04)",
          letterSpacing: "-0.05em",
        }}
      >
        D&amp;E
      </div>

      <div className="site-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 items-start" style={{ gap: "80px" }}>

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <span className="section-tag inline-flex" style={{ marginBottom: "24px" }}>Por Qué Elegirnos</span>

            <h2
              className="leading-none"
              style={{
                fontFamily: "var(--font-oswald)",
                fontSize: "clamp(40px, 5.5vw, 70px)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: "#0F172A",
                marginTop: "12px",
                marginBottom: "28px",
              }}
            >
              LA DIFERENCIA
              <br />
              <span className="gradient-text">D&amp;E CONCRETE</span>
            </h2>

            <p
              className="text-lg leading-relaxed"
              style={{ color: "#475569", fontFamily: "var(--font-inter)", lineHeight: 1.8, marginBottom: "40px" }}
            >
              No somos solo contratistas — somos artesanos del concreto.
              Cada proyecto es una oportunidad de demostrar por qué el Bay Area
              nos elige desde hace más de dos décadas.
            </p>

            {/* Slogan card */}
            <div
              className="rounded-2xl"
              style={{
                padding: "32px 36px",
                marginBottom: "40px",
                background: "#EFF6FF",
                border: "1px solid rgba(21,101,192,0.2)",
                borderLeft: "3px solid #1565C0",
              }}
            >
              <p
                className="text-xl font-bold italic leading-relaxed"
                style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.01em", color: "#0F172A", marginBottom: "10px" }}
              >
                &ldquo;Let&apos;s create something solid together.&rdquo;
              </p>
              <p className="text-sm" style={{ color: "#64748B", fontFamily: "var(--font-inter)" }}>
                — D&amp;E Concrete Inc · Antioch, CA
              </p>
            </div>

            {/* Contact info */}
            <div className="flex flex-col" style={{ gap: "24px" }}>
              {[
                { Icon: Phone, label: "Teléfono", value: "(925) 238-5488", href: "tel:9252385488", color: "#2196F3" },
                { Icon: Mail, label: "Email", value: "concreteincll2023@gmail.com", href: "mailto:concreteincll2023@gmail.com", color: "#8B5CF6" },
                { Icon: MapPin, label: "Ubicación", value: "Antioch, CA 94531 · Bay Area", href: "#", color: "#10B981" },
              ].map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center group"
                  style={{ gap: "18px" }}
                >
                  <div
                    className="rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
                    style={{
                      width: "48px",
                      height: "48px",
                      background: `${info.color}15`,
                      border: `1px solid ${info.color}25`,
                    }}
                  >
                    <info.Icon size={20} style={{ color: info.color }} strokeWidth={1.75} />
                  </div>
                  <div>
                    <div
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "#94A3B8", fontFamily: "var(--font-inter)", marginBottom: "4px" }}
                    >
                      {info.label}
                    </div>
                    <div
                      className="text-sm font-medium transition-colors duration-200 group-hover:text-blue-700"
                      style={{ color: "#334155", fontFamily: "var(--font-inter)" }}
                    >
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right column: feature grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2"
            style={{ gap: "20px" }}
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.25 + i * 0.08 }}
                className="group relative rounded-2xl transition-all duration-300"
                style={{
                  padding: "32px 28px",
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
                whileHover={{
                  y: -5,
                  borderColor: `${f.color}25`,
                  transition: { duration: 0.25 },
                }}
              >
                <div
                  className="absolute top-0 left-4 right-4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${f.color}, transparent)` }}
                />

                {/* Icon */}
                <div
                  className="rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                  style={{
                    width: "48px",
                    height: "48px",
                    background: `${f.color}15`,
                    border: `1px solid ${f.color}28`,
                    marginBottom: "20px",
                  }}
                >
                  <f.Icon size={22} style={{ color: f.color }} strokeWidth={1.75} />
                </div>

                {/* Title */}
                <h4
                  className="font-semibold leading-tight"
                  style={{
                    fontFamily: "var(--font-oswald)",
                    letterSpacing: "0.03em",
                    color: "#0F172A",
                    fontSize: "15px",
                    marginBottom: "10px",
                  }}
                >
                  {f.title}
                </h4>

                {/* Description */}
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "#475569", fontFamily: "var(--font-inter)", lineHeight: 1.7, marginBottom: "20px" }}
                >
                  {f.desc}
                </p>

                {/* Stat */}
                <div
                  className="flex items-baseline"
                  style={{ gap: "6px", paddingTop: "16px", borderTop: "1px solid #E2E8F0" }}
                >
                  <span
                    className="font-bold text-base gradient-text"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    {f.stat}
                  </span>
                  <span className="text-xs" style={{ color: "#94A3B8", fontFamily: "var(--font-inter)" }}>
                    {f.statLabel}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
