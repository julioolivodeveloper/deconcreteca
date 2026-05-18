"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Carlos Mendoza",
    location: "Antioch, CA",
    rating: 5,
    date: "Marzo 2024",
    service: "Driveway",
    text: "Increíble trabajo. D&E Concrete transformó nuestra entrada completamente. El acabado es perfecto, sin grietas, sin irregularidades. El equipo llegó a tiempo, limpió todo al terminar y el precio fue exactamente lo acordado. 100% los recomiendo.",
    avatar: "CM",
    avatarColor: "#2196F3",
  },
  {
    id: 2,
    name: "Jennifer Rodriguez",
    location: "Brentwood, CA",
    rating: 5,
    date: "Enero 2024",
    service: "Pool Deck",
    text: "Contratamos a D&E para el pool deck y quedamos impresionados. El concreto estampado que eligimos quedó exactamente como en las muestras. La superficie antideslizante es perfecta para los niños. Ya llevamos un año y se ve igual que el primer día.",
    avatar: "JR",
    avatarColor: "#8B5CF6",
  },
  {
    id: 3,
    name: "Michael Thompson",
    location: "Walnut Creek, CA",
    rating: 5,
    date: "Febrero 2024",
    service: "Patio & Driveway",
    text: "We hired D&E for both our driveway and backyard patio. Eduardo and his team were professional, communicative, and delivered exceptional quality. The stamped concrete pattern on the patio is stunning. Our neighbors keep asking who did the work. Highly recommend!",
    avatar: "MT",
    avatarColor: "#10B981",
  },
  {
    id: 4,
    name: "Ana Lucía Vásquez",
    location: "Concord, CA",
    rating: 5,
    date: "Diciembre 2023",
    service: "Concreto Estampado",
    text: "El trabajo que hicieron en nuestro patio trasero superó todas mis expectativas. El patrón de piedra que seleccionamos quedó espectacular. Eduardo explicó todo el proceso, usaron materiales de primera calidad y el resultado es verdaderamente artesanal. Vale cada centavo.",
    avatar: "AV",
    avatarColor: "#F59E0B",
  },
  {
    id: 5,
    name: "Robert & Lisa Kim",
    location: "Pleasant Hill, CA",
    rating: 5,
    date: "Noviembre 2023",
    service: "Muro de Contención",
    text: "We had a serious erosion problem on our sloped backyard. D&E Concrete built a beautiful retaining wall that solved the problem completely. The work was done efficiently, the cleanup was perfect, and they stayed within budget. Best contractor experience we've had.",
    avatar: "RK",
    avatarColor: "#EF4444",
  },
  {
    id: 6,
    name: "Patricia Flores",
    location: "Oakland, CA",
    rating: 5,
    date: "Octubre 2023",
    service: "Driveway",
    text: "Llevaba años con el driveway en mal estado y finalmente lo hice con D&E. La diferencia es como el día y la noche. El equipo es muy profesional, hablan español e inglés lo cual me facilitó mucho la comunicación. El trabajo quedó impecable. ¡Gracias!",
    avatar: "PF",
    avatarColor: "#0EA5E9",
  },
  {
    id: 7,
    name: "David & Maria Garcia",
    location: "Danville, CA",
    rating: 5,
    date: "Septiembre 2023",
    service: "Pool Deck & Patio",
    text: "D&E completó nuestro pool deck y patio trasero en tiempo récord. La calidad del trabajo es excepcional — el concreto texturizado del pool deck es perfecto para caminar descalzo. Han pasado más de 6 meses y no hay ninguna fisura ni defecto. ¡Excelente empresa!",
    avatar: "DG",
    avatarColor: "#8B5CF6",
  },
  {
    id: 8,
    name: "Steve Nakamura",
    location: "Martinez, CA",
    rating: 5,
    date: "Agosto 2023",
    service: "Fundación Comercial",
    text: "We used D&E for a commercial foundation project at our warehouse. The team was punctual, professional, and handled the large-scale job flawlessly. Eduardo kept us informed at every stage. The concrete work passed all inspections on the first try. Will definitely use them again.",
    avatar: "SN",
    avatarColor: "#10B981",
  },
];

const VISIBLE = 3;

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [start, setStart] = useState(0);

  const prev = () => setStart((s) => (s - 1 + reviews.length) % reviews.length);
  const next = () => setStart((s) => (s + 1) % reviews.length);

  const visible = Array.from({ length: VISIBLE }, (_, i) => reviews[(start + i) % reviews.length]);

  const avgRating = 5.0;
  const totalReviews = 87;

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#F8FAFC", paddingTop: "120px", paddingBottom: "120px" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(21,101,192,0.15), transparent)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(rgba(21,101,192,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="site-container relative z-10" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: "72px" }}
        >
          <span className="section-tag mb-5 inline-flex">Reseñas de Clientes</span>
          <h2
            className="mt-3 leading-none"
            style={{
              fontFamily: "var(--font-oswald)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700,
              color: "#0F172A",
            }}
          >
            LO QUE DICEN{" "}
            <span className="gradient-text">NUESTROS CLIENTES</span>
          </h2>

          {/* Rating summary */}
          <div className="flex items-center justify-center gap-10 mt-10 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="text-5xl font-bold" style={{ fontFamily: "var(--font-oswald)", color: "#0F172A" }}>
                {avgRating.toFixed(1)}
              </div>
              <div className="flex flex-col">
                <div className="flex gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <span className="text-sm" style={{ color: "#64748B", fontFamily: "var(--font-inter)" }}>
                  {totalReviews} reseñas verificadas
                </span>
              </div>
            </div>

            <div className="h-12 w-px hidden sm:block" style={{ background: "#E2E8F0" }} />

            <div className="flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                <path fill="none" d="M0 0h48v48H0z"/>
              </svg>
              <div>
                <div className="font-bold text-sm" style={{ color: "#0F172A", fontFamily: "var(--font-inter)" }}>Google Reviews</div>
                <div className="text-xs" style={{ color: "#64748B" }}>Verificado · 5.0 ★</div>
              </div>
            </div>

            <div className="h-12 w-px hidden sm:block" style={{ background: "#E2E8F0" }} />

            <div className="text-center">
              <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-oswald)", color: "#1565C0" }}>100%</div>
              <div className="text-xs" style={{ color: "#64748B", fontFamily: "var(--font-inter)" }}>Recomendarían D&E</div>
            </div>
          </div>
        </motion.div>

        {/* Cards carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" style={{ marginBottom: "32px" }}>
          <AnimatePresence mode="popLayout">
            {visible.map((r, i) => (
              <motion.div
                key={`${r.id}-${start}`}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -32 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative rounded-2xl flex flex-col"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  padding: "40px 36px",
                }}
              >
                {/* Quote icon */}
                <div
                  className="absolute top-8 right-8 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "#EFF6FF", border: "1px solid rgba(21,101,192,0.12)" }}
                >
                  <Quote size={20} style={{ color: "#1565C0" }} />
                </div>

                {/* Stars */}
                <motion.div
                  className="flex gap-1.5"
                  style={{ marginBottom: "16px" }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.15 }}
                >
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </motion.div>

                {/* Service tag */}
                <motion.span
                  className="inline-block self-start"
                  style={{
                    padding: "6px 14px",
                    borderRadius: "100px",
                    fontSize: "11px",
                    fontWeight: 600,
                    marginBottom: "20px",
                    background: "#EFF6FF",
                    color: "#1565C0",
                    border: "1px solid rgba(21,101,192,0.15)",
                    fontFamily: "var(--font-oswald)",
                    letterSpacing: "0.06em",
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.22 }}
                >
                  {r.service}
                </motion.span>

                {/* Review text */}
                <motion.p
                  className="flex-1"
                  style={{
                    color: "#475569",
                    fontFamily: "var(--font-inter)",
                    fontSize: "14px",
                    lineHeight: 1.85,
                    marginBottom: "28px",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                >
                  &ldquo;{r.text}&rdquo;
                </motion.p>

                {/* Divider */}
                <motion.div
                  style={{ height: "1px", background: "#F1F5F9", marginBottom: "24px" }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.38 }}
                />

                {/* Author */}
                <motion.div
                  className="flex items-center"
                  style={{ gap: "14px" }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.42 }}
                >
                  <div
                    className="rounded-full flex items-center justify-center text-white font-bold shrink-0"
                    style={{
                      width: "48px",
                      height: "48px",
                      fontSize: "14px",
                      background: `linear-gradient(135deg, ${r.avatarColor}, ${r.avatarColor}99)`,
                      fontFamily: "var(--font-oswald)",
                    }}
                  >
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-bold" style={{ fontSize: "14px", color: "#0F172A", fontFamily: "var(--font-inter)", marginBottom: "3px" }}>
                      {r.name}
                    </div>
                    <div style={{ fontSize: "12px", color: "#94A3B8", fontFamily: "var(--font-inter)" }}>
                      {r.location} · {r.date}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation */}
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
              style={{ width: "40px", height: "40px", background: "#1565C0", color: "white", boxShadow: "0 4px 12px rgba(21,101,192,0.35)" }}
            >
              <ChevronRight size={18} strokeWidth={2} />
            </button>
            <span style={{ fontSize: "13px", color: "#94A3B8", fontFamily: "var(--font-inter)", marginLeft: "6px" }}>
              {start + 1} — {reviews.length}
            </span>
          </div>

          {/* Dots */}
          <div className="hidden sm:flex items-center gap-2.5">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setStart(i)}
                className="transition-all duration-300"
                style={{
                  width: i === start ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: i === start ? "#1565C0" : "#E2E8F0",
                }}
              />
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://g.page/r/review"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 font-semibold transition-colors hover:underline"
            style={{ fontSize: "14px", color: "#1565C0", fontFamily: "var(--font-inter)" }}
          >
            Ver todas en Google
            <Star size={15} fill="#F59E0B" color="#F59E0B" />
          </a>
        </div>
      </div>
    </section>
  );
}
