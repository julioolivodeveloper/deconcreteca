"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const serviceLinks = [
  "Driveways de Concreto",
  "Pool Decks & Surrounds",
  "Patios & Exteriores",
  "Concreto Estampado",
  "Muros de Contención",
  "Cimentaciones Comerciales",
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#030810", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(21,101,192,0.5), transparent)" }}
      />

      {/* Main content */}
      <div className="site-container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "56px" }}>

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center" style={{ gap: "16px", marginBottom: "24px" }}>
              <div
                className="rounded-full flex items-center justify-center font-bold text-white"
                style={{
                  width: "56px",
                  height: "56px",
                  fontSize: "18px",
                  background: "linear-gradient(135deg, #1565C0, #0D47A1)",
                  border: "2px solid rgba(66,165,245,0.4)",
                  fontFamily: "var(--font-oswald)",
                  flexShrink: 0,
                }}
              >
                D&amp;E
              </div>
              <div>
                <div
                  className="text-white font-bold leading-none"
                  style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.05em", fontSize: "18px", marginBottom: "4px" }}
                >
                  D&amp;E CONCRETE
                </div>
                <div className="text-xs font-medium" style={{ color: "#42A5F5", letterSpacing: "0.08em" }}>
                  INC.
                </div>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(148,163,184,0.65)", fontFamily: "var(--font-inter)", marginBottom: "28px", lineHeight: 1.75 }}
            >
              20+ años creando fundaciones duraderas en el Bay Area.
              Expertos en concreto residencial y comercial.
              Lic. #1105655.
            </p>

            <div className="flex flex-col" style={{ gap: "16px" }}>
              <a
                href="tel:9252385488"
                className="flex items-center group"
                style={{ gap: "12px", color: "rgba(148,163,184,0.7)" }}
              >
                <Phone size={15} style={{ color: "#42A5F5", flexShrink: 0 }} />
                <span className="text-sm group-hover:text-white transition-colors" style={{ fontFamily: "var(--font-inter)" }}>
                  (925) 238-5488
                </span>
              </a>
              <a
                href="mailto:concreteincll2023@gmail.com"
                className="flex items-center group"
                style={{ gap: "12px", color: "rgba(148,163,184,0.7)" }}
              >
                <Mail size={15} style={{ color: "#42A5F5", flexShrink: 0 }} />
                <span className="text-sm group-hover:text-white transition-colors" style={{ fontFamily: "var(--font-inter)" }}>
                  concreteincll2023@gmail.com
                </span>
              </a>
              <div className="flex items-center" style={{ gap: "12px", color: "rgba(148,163,184,0.7)" }}>
                <MapPin size={15} style={{ color: "#42A5F5", flexShrink: 0 }} />
                <span className="text-sm" style={{ fontFamily: "var(--font-inter)" }}>Antioch, CA 94531</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest"
              style={{ fontFamily: "var(--font-oswald)", marginBottom: "28px" }}
            >
              Navegación
            </h4>
            <ul className="flex flex-col" style={{ gap: "16px" }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm transition-colors hover:text-white text-left"
                    style={{ color: "rgba(148,163,184,0.65)", fontFamily: "var(--font-inter)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest"
              style={{ fontFamily: "var(--font-oswald)", marginBottom: "28px" }}
            >
              Servicios
            </h4>
            <ul className="flex flex-col" style={{ gap: "16px" }}>
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNav("#servicios")}
                    className="text-sm text-left transition-colors hover:text-white"
                    style={{ color: "rgba(148,163,184,0.65)", fontFamily: "var(--font-inter)" }}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Box */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest"
              style={{ fontFamily: "var(--font-oswald)", marginBottom: "28px" }}
            >
              ¿Listo para empezar?
            </h4>
            <div
              className="rounded-2xl"
              style={{
                padding: "28px 32px",
                marginBottom: "16px",
                background: "linear-gradient(135deg, rgba(21,101,192,0.15), rgba(11,29,53,0.8))",
                border: "1px solid rgba(66,165,245,0.18)",
              }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(148,163,184,0.75)", fontFamily: "var(--font-inter)", marginBottom: "24px", lineHeight: 1.7 }}
              >
                Cotizaciones gratuitas · Respuesta en 24hrs · Inglés y Español
              </p>
              <a
                href="tel:9252385488"
                className="btn-primary w-full rounded flex items-center justify-center font-bold"
                style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.05em", gap: "10px", fontSize: "14px" }}
              >
                <Phone size={15} className="relative z-10" strokeWidth={2} />
                <span className="relative z-10">LLAMAR AHORA</span>
              </a>
            </div>

            <div
              className="flex items-center rounded-xl"
              style={{
                padding: "14px 18px",
                gap: "12px",
                background: "rgba(16,185,129,0.07)",
                border: "1px solid rgba(16,185,129,0.15)",
              }}
            >
              <div
                className="rounded-full shrink-0"
                style={{ width: "8px", height: "8px", background: "#4ADE80", boxShadow: "0 0 8px #4ADE80" }}
              />
              <span className="text-xs" style={{ color: "rgba(148,163,184,0.65)", fontFamily: "var(--font-inter)" }}>
                Disponible · Lun–Sáb 7am–6pm
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="site-container flex flex-col sm:flex-row items-center justify-between" style={{ paddingTop: "24px", paddingBottom: "24px", gap: "12px" }}>
          <p
            className="text-xs text-center sm:text-left"
            style={{ color: "rgba(148,163,184,0.4)", fontFamily: "var(--font-inter)" }}
          >
            © 2024 D&amp;E Concrete Inc. Todos los derechos reservados. · Lic. #1105655 · Antioch, CA
          </p>
          <motion.button
            onClick={scrollTop}
            className="flex items-center transition-colors hover:text-white"
            style={{ color: "rgba(148,163,184,0.4)", fontFamily: "var(--font-inter)", fontSize: "12px", gap: "8px" }}
            whileHover={{ y: -2 }}
          >
            Volver al inicio <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
