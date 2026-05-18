"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, BarChart3, ShieldCheck, Star } from "lucide-react";

const stats = [
  {
    Icon: Calendar,
    value: 20,
    suffix: "+",
    label: "Años de Experiencia",
    sub: "Fundada en 2004",
    color: "#2196F3",
  },
  {
    Icon: BarChart3,
    value: 500,
    suffix: "+",
    label: "Proyectos Completados",
    sub: "Residencial y comercial",
    color: "#8B5CF6",
  },
  {
    Icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "Licenciado & Asegurado",
    sub: "Lic. #1105655 · CA",
    color: "#10B981",
  },
  {
    Icon: Star,
    value: 5,
    suffix: "★",
    label: "Rating en Google",
    sub: "Satisfacción garantizada",
    color: "#F59E0B",
  },
];

function Counter({ target, suffix, color }: { target: number; suffix: string; color: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="flex items-end gap-0.5">
      <span
        className="font-bold leading-none"
        style={{
          fontFamily: "var(--font-oswald)",
          fontSize: "clamp(40px, 4.5vw, 62px)",
          color,
          textShadow: `0 0 30px ${color}45`,
        }}
      >
        {count}
      </span>
      <span
        className="font-bold pb-1"
        style={{
          fontFamily: "var(--font-oswald)",
          fontSize: "clamp(22px, 2.5vw, 34px)",
          color,
          opacity: 0.9,
        }}
      >
        {suffix}
      </span>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#F8FAFC", paddingTop: "80px", paddingBottom: "100px" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(21,101,192,0.12), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(21,101,192,0.12), transparent)" }}
      />

      <div className="site-container" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl transition-all duration-400"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                padding: "36px 32px",
              }}
              whileHover={{
                y: -5,
                borderColor: `${s.color}28`,
                transition: { duration: 0.25 },
              }}
            >
              {/* Icon + label row */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `${s.color}16`,
                    border: `1px solid ${s.color}25`,
                  }}
                >
                  <s.Icon size={16} style={{ color: s.color }} strokeWidth={1.75} />
                </div>
                <div
                  className="text-xs font-semibold uppercase tracking-wider leading-tight"
                  style={{ color: "#64748B", fontFamily: "var(--font-oswald)", letterSpacing: "0.08em" }}
                >
                  {s.label}
                </div>
              </div>

              {/* Number */}
              <Counter target={s.value} suffix={s.suffix} color={s.color} />

              {/* Divider */}
              <div
                className="w-8 h-0.5 rounded-full my-3 transition-all duration-400 group-hover:w-12"
                style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }}
              />

              {/* Sub label */}
              <div
                className="text-xs"
                style={{ color: "#64748B", fontFamily: "var(--font-inter)" }}
              >
                {s.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
