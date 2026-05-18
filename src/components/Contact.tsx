"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";

const services = [
  "Driveway", "Pool Deck", "Patio", "Concreto Estampado",
  "Muro de Contención", "Cimentación", "Trabajo Comercial", "Otro",
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "", zip: "", message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const contactItems = [
    { Icon: Phone, label: "Teléfono", value: "(925) 238-5488", href: "tel:9252385488", color: "#2196F3" },
    { Icon: Mail, label: "Email", value: "concreteincll2023@gmail.com", href: "mailto:concreteincll2023@gmail.com", color: "#8B5CF6" },
    { Icon: MapPin, label: "Ubicación", value: "Antioch, CA 94531", href: "#", color: "#10B981" },
    { Icon: Clock, label: "Horario", value: "Lun–Sáb: 7am – 6pm", href: "#", color: "#F59E0B" },
  ];

  const cities = [
    "Antioch", "Brentwood", "Concord", "Walnut Creek",
    "Oakland", "Danville", "Pleasant Hill", "Orinda",
    "Martinez", "Pittsburg", "Todo el Bay Area",
  ];

  return (
    <section
      id="contacto"
      className="relative overflow-hidden"
      style={{ paddingTop: "140px", paddingBottom: "140px" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/concrete/contact-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(3,8,16,0.85) 0%, rgba(10,22,55,0.80) 100%)" }}
      />

      <div className="site-container relative z-10" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: "72px" }}
        >
          <span
            className="inline-flex"
            style={{
              marginBottom: "20px",
              padding: "8px 20px",
              borderRadius: "100px",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              fontFamily: "var(--font-oswald)",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(10px)",
            }}
          >
            CONTACTO
          </span>
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
            HABLEMOS DE{" "}
            <span className="gradient-text">TU PROYECTO</span>
          </h2>
          <p
            className="max-w-lg mx-auto text-lg"
            style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-inter)", marginTop: "20px", textAlign: "center" }}
          >
            Cotizaciones gratuitas y sin compromiso. Respondemos en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5" style={{ gap: "56px" }}>

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col"
            style={{ gap: "20px" }}
          >
            {/* Contact card */}
            <div
              className="rounded-2xl"
              style={{
                padding: "36px 40px",
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <h3
                className="font-bold tracking-wide"
                style={{
                  fontFamily: "var(--font-oswald)",
                  letterSpacing: "0.04em",
                  color: "#0F172A",
                  fontSize: "16px",
                  marginBottom: "28px",
                }}
              >
                INFORMACIÓN DE CONTACTO
              </h3>
              <div className="flex flex-col" style={{ gap: "24px" }}>
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center group"
                    style={{ gap: "18px" }}
                  >
                    <div
                      className="rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: `${item.color}14`,
                        border: `1px solid ${item.color}25`,
                      }}
                    >
                      <item.Icon size={20} style={{ color: item.color }} strokeWidth={1.75} />
                    </div>
                    <div>
                      <div
                        className="text-xs uppercase tracking-widest"
                        style={{ color: "#94A3B8", fontFamily: "var(--font-inter)", marginBottom: "4px" }}
                      >
                        {item.label}
                      </div>
                      <div
                        className="text-sm font-medium transition-colors group-hover:text-blue-700"
                        style={{ color: "#334155", fontFamily: "var(--font-inter)" }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Service area */}
            <div
              className="rounded-2xl"
              style={{
                padding: "32px 36px",
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <h3
                className="font-bold text-sm uppercase tracking-widest"
                style={{ fontFamily: "var(--font-oswald)", color: "#0F172A", marginBottom: "20px" }}
              >
                Área de Servicio
              </h3>
              <div className="flex flex-wrap" style={{ gap: "8px" }}>
                {cities.map((city) => (
                  <span
                    key={city}
                    className="rounded-full text-xs font-medium"
                    style={{
                      padding: "6px 14px",
                      background: "#EFF6FF",
                      border: "1px solid rgba(21,101,192,0.15)",
                      color: "#1565C0",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* License badge */}
            <div
              className="rounded-2xl flex items-center"
              style={{
                padding: "24px 28px",
                gap: "18px",
                background: "rgba(16,185,129,0.06)",
                border: "1px solid rgba(16,185,129,0.2)",
              }}
            >
              <div
                className="rounded-xl flex items-center justify-center shrink-0"
                style={{
                  width: "48px",
                  height: "48px",
                  background: "rgba(16,185,129,0.12)",
                  border: "1px solid rgba(16,185,129,0.25)",
                }}
              >
                <ShieldCheck size={22} style={{ color: "#10B981" }} strokeWidth={1.75} />
              </div>
              <div>
                <div
                  className="font-bold text-sm"
                  style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.03em", color: "#FFFFFF", marginBottom: "4px" }}
                >
                  LICENCIADO & ASEGURADO
                </div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-inter)" }}>
                  Contratista de California · Lic. #1105655
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-2xl"
              style={{
                padding: "44px 48px",
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center"
                  style={{ padding: "48px 0" }}
                >
                  <div
                    className="rounded-2xl flex items-center justify-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "rgba(16,185,129,0.15)",
                      border: "1.5px solid rgba(16,185,129,0.3)",
                      marginBottom: "28px",
                    }}
                  >
                    <ShieldCheck size={40} style={{ color: "#10B981" }} strokeWidth={1.5} />
                  </div>
                  <h3
                    className="font-bold"
                    style={{ fontFamily: "var(--font-oswald)", color: "#0F172A", fontSize: "24px", marginBottom: "12px" }}
                  >
                    ¡MENSAJE ENVIADO!
                  </h3>
                  <p style={{ color: "#475569", fontFamily: "var(--font-inter)", lineHeight: 1.7 }}>
                    Te contactaremos en menos de 24 horas.
                    <br />También puedes llamarnos directamente al{" "}
                    <a href="tel:9252385488" style={{ color: "#42A5F5", fontWeight: 600 }}>
                      (925) 238-5488
                    </a>
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: "28px" }}>
                  <div>
                    <h3
                      className="font-bold tracking-wide"
                      style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.03em", color: "#0F172A", fontSize: "20px", marginBottom: "8px" }}
                    >
                      SOLICITAR COTIZACIÓN GRATUITA
                    </h3>
                    <p className="text-sm" style={{ color: "#64748B", fontFamily: "var(--font-inter)" }}>
                      Sin compromiso · Respuesta en 24 horas · Inglés y Español
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "20px" }}>
                    <div>
                      <label className="block text-xs uppercase tracking-wider" style={{ color: "#64748B", fontFamily: "var(--font-inter)", marginBottom: "10px" }}>
                        Nombre completo *
                      </label>
                      <input name="name" value={form.name} onChange={handleChange} required
                        placeholder="Tu nombre" className="contact-input" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider" style={{ color: "#64748B", fontFamily: "var(--font-inter)", marginBottom: "10px" }}>
                        Teléfono *
                      </label>
                      <input name="phone" value={form.phone} onChange={handleChange} required
                        type="tel" placeholder="(925) 000-0000" className="contact-input" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "20px" }}>
                    <div>
                      <label className="block text-xs uppercase tracking-wider" style={{ color: "#64748B", fontFamily: "var(--font-inter)", marginBottom: "10px" }}>
                        Email
                      </label>
                      <input name="email" value={form.email} onChange={handleChange}
                        type="email" placeholder="tu@email.com" className="contact-input" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider" style={{ color: "#64748B", fontFamily: "var(--font-inter)", marginBottom: "10px" }}>
                        ZIP Code
                      </label>
                      <input name="zip" value={form.zip} onChange={handleChange}
                        placeholder="94531" className="contact-input" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider" style={{ color: "#64748B", fontFamily: "var(--font-inter)", marginBottom: "10px" }}>
                      Tipo de Servicio *
                    </label>
                    <select name="service" value={form.service} onChange={handleChange} required className="contact-input">
                      <option value="">Seleccionar servicio...</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider" style={{ color: "#64748B", fontFamily: "var(--font-inter)", marginBottom: "10px" }}>
                      Descripción del Proyecto
                    </label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="Describe tu proyecto: área aproximada, tipo de acabado deseado, fecha estimada..."
                      className="contact-input resize-none" />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-primary w-full rounded font-bold flex items-center justify-center"
                    style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.06em", fontSize: "15px", gap: "12px" }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className="relative z-10">SOLICITAR COTIZACIÓN GRATIS</span>
                    <Send size={17} className="relative z-10" strokeWidth={2} />
                  </motion.button>

                  <p className="text-xs text-center" style={{ color: "#94A3B8", fontFamily: "var(--font-inter)" }}>
                    Al enviar aceptas que te contactemos. Sin spam ni compromisos.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
