"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, Star, MapPin } from "lucide-react";

const words = ["DRIVEWAYS", "POOL DECKS", "PATIOS", "FOUNDATIONS", "RETAINING WALLS"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter
  useEffect(() => {
    const word = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.3,
        a: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(66, 165, 245, ${p.a})`;
        ctx.fill();
      });
      // Draw connecting lines
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(21, 101, 192, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollDown = () => {
    const el = document.querySelector("#servicios");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: "#0A1628",
        backgroundImage: "url(/concrete/gsggsbaba.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(10,22,40,0.82) 0%, rgba(10,22,40,0.72) 60%, rgba(10,22,40,0.88) 100%)" }} />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.5 }} />

      {/* Orbs */}
      <div
        className="orb-1"
        style={{ width: 700, height: 700, top: "-20%", left: "-10%", opacity: 0.10 }}
      />
      <div
        className="orb-2"
        style={{ width: 600, height: 600, bottom: "-20%", right: "-10%", opacity: 0.07 }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(21,101,192,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(21,101,192,0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 site-container pt-40 pb-28 w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="section-tag" style={{ color: "#90CAF9", background: "rgba(21,101,192,0.18)", borderColor: "rgba(66,165,245,0.3)" }}>
            <Shield size={13} />
            Lic. #1105655 · Antioch, CA
          </span>
          <span className="flex items-center gap-1 text-yellow-400 text-sm font-medium">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={13} fill="currentColor" />
            ))}
            <span className="text-slate-400 ml-1">5.0 Rating</span>
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white leading-none tracking-tight mb-2"
            style={{
              fontFamily: "var(--font-oswald)",
              fontSize: "clamp(56px, 9vw, 130px)",
              fontWeight: 700,
            }}
          >
            BUILT TO
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="leading-none tracking-tight gradient-text mb-2"
            style={{
              fontFamily: "var(--font-oswald)",
              fontSize: "clamp(56px, 9vw, 130px)",
              fontWeight: 700,
            }}
          >
            LAST.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-oswald)",
              fontSize: "clamp(28px, 5vw, 64px)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            EXPERT{" "}
            <span style={{ color: "#42A5F5" }}>
              {displayed}
              <span
                style={{
                  display: "inline-block",
                  width: "3px",
                  height: "1em",
                  background: "#42A5F5",
                  marginLeft: "2px",
                  verticalAlign: "middle",
                  animation: "borderGlow 0.8s ease-in-out infinite",
                }}
              />
            </span>
          </motion.div>
        </div>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 text-lg max-w-xl leading-relaxed"
          style={{ color: "rgba(226, 232, 240, 0.6)", fontFamily: "var(--font-inter)" }}
        >
          20+ años transformando propiedades en el{" "}
          <span style={{ color: "#90CAF9" }}>Bay Area de California</span> con concreto de
          alta calidad. Residencial y comercial.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-amber flex items-center gap-2 rounded text-base font-bold"
            style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.05em" }}
          >
            COTIZACIÓN GRATIS
            <ArrowRight size={18} />
          </a>
          <a
            href="#proyectos"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#proyectos")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-ghost flex items-center gap-2 rounded text-base font-semibold"
            style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.05em", color: "white", borderColor: "rgba(255,255,255,0.35)" }}
          >
            VER PROYECTOS
            <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Info row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap items-center gap-8 mt-14"
        >
          <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(148,163,184,0.8)" }}>
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "#4ADE80", boxShadow: "0 0 8px #4ADE80" }}
            />
            Disponible · Inglés & Español
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(148,163,184,0.8)" }}>
            <MapPin size={14} style={{ color: "#42A5F5" }} />
            Antioch, CA · Todo el Bay Area
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(148,163,184,0.8)" }}>
            <Shield size={14} style={{ color: "#42A5F5" }} />
            100% Licenciado y Asegurado
          </div>
        </motion.div>
      </div>

      {/* Ticker bar — sits BELOW hero content, not overlapping */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 overflow-hidden"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(3,8,16,0.92)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div
          className="animate-ticker flex items-center gap-20 whitespace-nowrap"
          style={{ width: "max-content", paddingTop: "14px", paddingBottom: "14px" }}
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-20">
              {[
                "20+ AÑOS DE EXPERIENCIA",
                "500+ PROYECTOS COMPLETADOS",
                "100% LICENCIADO Y ASEGURADO",
                "SERVICIO EN TODO EL BAY AREA",
                "INGLÉS Y ESPAÑOL",
                "COTIZACIONES GRATUITAS",
                "SATISFACCIÓN GARANTIZADA",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                  style={{ color: "rgba(148,163,184,0.65)", fontFamily: "var(--font-oswald)", fontSize: "12px", letterSpacing: "0.1em" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "#1565C0" }}
                  />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollDown}
        className="absolute bottom-20 right-8 flex flex-col items-center gap-2 text-xs tracking-widest"
        style={{ color: "rgba(148,163,184,0.45)", fontFamily: "var(--font-oswald)" }}
        whileHover={{ scale: 1.1 }}
      >
        SCROLL
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
