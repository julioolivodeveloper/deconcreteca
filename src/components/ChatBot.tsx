"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, ChevronLeft, ArrowRight, Send } from "lucide-react";

type ChatState = "closed" | "menu" | "answer";

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    id: 1,
    question: "¿Cuánto cuesta un driveway?",
    answer: "El costo varía según el tamaño y acabado. Un driveway residencial típico en el Bay Area oscila entre $6 y $12 por pie cuadrado. Ofrecemos cotizaciones 100% gratuitas — el precio exacto depende del área, tipo de concreto y preparación del terreno.",
  },
  {
    id: 2,
    question: "¿Cuánto tiempo tarda el trabajo?",
    answer: "Un driveway estándar tarda 2–3 días (preparación, vaciado y curado inicial). Patios o pool decks más grandes pueden tomar 3–5 días. El concreto alcanza resistencia total en 28 días, pero puedes usarlo a los 7 días con precaución.",
  },
  {
    id: 3,
    question: "¿Están licenciados y asegurados?",
    answer: "Sí. Somos contratistas con licencia del estado de California — Licencia #1105655. Contamos con seguro de responsabilidad civil y compensación laboral. Podemos enviarte los documentos antes de iniciar cualquier trabajo.",
  },
  {
    id: 4,
    question: "¿En qué áreas trabajan?",
    answer: "Trabajamos en todo el Bay Area: Antioch, Brentwood, Concord, Walnut Creek, Oakland, Danville, Pleasant Hill, Orinda, Martinez, Pittsburg y ciudades cercanas. ¿No ves tu ciudad? Llámanos y verificamos cobertura.",
  },
  {
    id: 5,
    question: "¿Hacen cotizaciones gratis?",
    answer: "¡Sí, 100% gratuitas y sin compromiso! Visitamos tu propiedad, evaluamos el proyecto y te entregamos un presupuesto detallado. Respondemos en menos de 24 horas.",
  },
  {
    id: 6,
    question: "¿Hablan español?",
    answer: "¡Claro que sí! Todo nuestro equipo habla español e inglés con fluidez. Nos comunicamos en el idioma que prefieras — desde la cotización hasta la finalización del proyecto.",
  },
  {
    id: 7,
    question: "¿Qué servicios ofrecen?",
    answer: "Ofrecemos: Driveways, Pool decks, Patios y exteriores, Concreto estampado (piedra, madera, ladrillo), Muros de contención, y Cimentaciones residenciales y comerciales. ¡20+ años de experiencia en el Bay Area!",
  },
];

export default function ChatBot() {
  const [chatState, setChatState] = useState<ChatState>("closed");
  const [activeFaq, setActiveFaq] = useState<FAQ | null>(null);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [actionsVisible, setActionsVisible] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [typedText, isTyping, chatState]);

  const handleSelectFaq = useCallback((faq: FAQ) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setActiveFaq(faq);
    setChatState("answer");
    setTypedText("");
    setActionsVisible(false);
    setIsTyping(true);

    timeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      let i = 0;
      intervalRef.current = setInterval(() => {
        i++;
        setTypedText(faq.answer.slice(0, i));
        if (i >= faq.answer.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setActionsVisible(true);
        }
      }, 22);
    }, 900);
  }, []);

  const handleBackToMenu = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setChatState("menu");
    setActiveFaq(null);
    setTypedText("");
    setIsTyping(false);
    setActionsVisible(false);
  };

  const handleScrollToContact = () => {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
    setChatState("closed");
  };

  const handleToggle = () =>
    setChatState((s) => (s === "closed" ? "menu" : "closed"));

  const isOpen = chatState !== "closed";

  return (
    <>
      {/* ── Chat Panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "fixed",
              bottom: "88px",
              right: "16px",
              width: "min(360px, calc(100vw - 32px))",
              maxHeight: "min(520px, 80vh)",
              zIndex: 60,
              borderRadius: "16px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
              background: "#030810",
            }}
          >
            {/* Header */}
            <div
              style={{
                background: "linear-gradient(135deg, #1565C0 0%, #1E88E5 100%)",
                padding: "16px 18px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  border: "2px solid rgba(255,255,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MessageCircle size={18} color="white" strokeWidth={2} />
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "var(--font-oswald)",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "white",
                    letterSpacing: "0.04em",
                  }}
                >
                  D&amp;E CONCRETE INC
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "3px" }}>
                  <div
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "#4ADE80",
                      boxShadow: "0 0 6px #4ADE80",
                    }}
                  />
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-inter)" }}>
                    Disponible · Responde rápido
                  </span>
                </div>
              </div>
              <button
                onClick={handleToggle}
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "none",
                  borderRadius: "8px",
                  padding: "6px",
                  cursor: "pointer",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X size={16} strokeWidth={2.5} />
              </button>
            </div>

            {/* Body */}
            <div
              ref={bodyRef}
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <AnimatePresence mode="wait">
                {/* ── MENU ── */}
                {chatState === "menu" && (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "flex", flexDirection: "column", gap: "10px" }}
                  >
                    {/* Bot welcome bubble */}
                    <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #1565C0, #42A5F5)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        <MessageCircle size={13} color="white" strokeWidth={2} />
                      </div>
                      <div
                        style={{
                          background: "#0B1D35",
                          border: "1px solid rgba(21,101,192,0.25)",
                          borderRadius: "0 12px 12px 12px",
                          padding: "12px 14px",
                          maxWidth: "calc(100% - 40px)",
                        }}
                      >
                        <p style={{ color: "rgba(226,232,240,0.9)", fontSize: "13px", lineHeight: 1.6, fontFamily: "var(--font-inter)" }}>
                          ¡Hola! Soy el asistente de D&E Concrete. ¿En qué puedo ayudarte hoy?
                        </p>
                      </div>
                    </div>

                    {/* FAQ buttons */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "4px" }}>
                      {faqs.map((faq, i) => (
                        <motion.button
                          key={faq.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05, duration: 0.2 }}
                          onClick={() => handleSelectFaq(faq)}
                          style={{
                            background: "rgba(21,101,192,0.1)",
                            border: "1px solid rgba(21,101,192,0.25)",
                            borderRadius: "10px",
                            padding: "10px 14px",
                            cursor: "pointer",
                            color: "#90CAF9",
                            fontSize: "13px",
                            fontFamily: "var(--font-inter)",
                            textAlign: "left",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "8px",
                            transition: "all 0.2s ease",
                          }}
                          whileHover={{ backgroundColor: "rgba(21,101,192,0.2)", x: 2 }}
                        >
                          <span>{faq.question}</span>
                          <ArrowRight size={14} strokeWidth={2} style={{ flexShrink: 0 }} />
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* ── ANSWER ── */}
                {chatState === "answer" && activeFaq && (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "flex", flexDirection: "column", gap: "10px" }}
                  >
                    {/* Back button */}
                    <button
                      onClick={handleBackToMenu}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#64748B",
                        fontSize: "12px",
                        fontFamily: "var(--font-inter)",
                        padding: "4px 0",
                        marginBottom: "2px",
                      }}
                    >
                      <ChevronLeft size={14} strokeWidth={2.5} />
                      Volver al menú
                    </button>

                    {/* User bubble */}
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                      <div
                        style={{
                          background: "linear-gradient(135deg, #1565C0, #1976D2)",
                          borderRadius: "12px 12px 0 12px",
                          padding: "10px 14px",
                          maxWidth: "85%",
                        }}
                      >
                        <p style={{ color: "rgba(255,255,255,0.95)", fontSize: "13px", lineHeight: 1.5, fontFamily: "var(--font-inter)" }}>
                          {activeFaq.question}
                        </p>
                      </div>
                    </div>

                    {/* Bot response */}
                    <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #1565C0, #42A5F5)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        <MessageCircle size={13} color="white" strokeWidth={2} />
                      </div>
                      <div
                        style={{
                          background: "#0B1D35",
                          border: "1px solid rgba(21,101,192,0.25)",
                          borderRadius: "0 12px 12px 12px",
                          padding: "12px 14px",
                          maxWidth: "calc(100% - 40px)",
                          minHeight: "44px",
                        }}
                      >
                        {/* Typing dots */}
                        {isTyping && (
                          <div style={{ display: "flex", gap: "4px", alignItems: "center", padding: "4px 0" }}>
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                animate={{ y: [0, -4, 0] }}
                                transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                                style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#42A5F5" }}
                              />
                            ))}
                          </div>
                        )}
                        {/* Typed answer */}
                        {!isTyping && (
                          <p style={{ color: "rgba(226,232,240,0.9)", fontSize: "13px", lineHeight: 1.65, fontFamily: "var(--font-inter)" }}>
                            {typedText}
                            {typedText.length < activeFaq.answer.length && (
                              <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 0.7, repeat: Infinity }}
                                style={{ display: "inline-block", width: "2px", height: "12px", background: "#42A5F5", marginLeft: "2px", verticalAlign: "middle" }}
                              />
                            )}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <AnimatePresence>
                      {actionsVisible && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ display: "flex", gap: "8px", marginTop: "4px" }}
                        >
                          <a
                            href="tel:9252385488"
                            style={{
                              flex: 1,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "6px",
                              background: "linear-gradient(135deg, #1565C0, #1E88E5)",
                              borderRadius: "10px",
                              padding: "11px 12px",
                              color: "white",
                              fontSize: "12px",
                              fontFamily: "var(--font-oswald)",
                              fontWeight: 600,
                              letterSpacing: "0.04em",
                              textDecoration: "none",
                              boxShadow: "0 4px 12px rgba(21,101,192,0.4)",
                            }}
                          >
                            <Phone size={13} strokeWidth={2} />
                            LLAMAR
                          </a>
                          <button
                            onClick={handleScrollToContact}
                            style={{
                              flex: 1,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "6px",
                              background: "rgba(21,101,192,0.12)",
                              border: "1px solid rgba(21,101,192,0.35)",
                              borderRadius: "10px",
                              padding: "11px 12px",
                              color: "#90CAF9",
                              fontSize: "12px",
                              fontFamily: "var(--font-oswald)",
                              fontWeight: 600,
                              letterSpacing: "0.04em",
                              cursor: "pointer",
                            }}
                          >
                            <Send size={13} strokeWidth={2} />
                            COTIZACIÓN
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div
              style={{
                padding: "10px 16px",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                background: "rgba(0,0,0,0.3)",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "10px", color: "#475569", fontFamily: "var(--font-inter)" }}>
                D&amp;E Concrete Inc · Lic. #1105655 · Bay Area, CA
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Button ── */}
      <div style={{ position: "fixed", bottom: "24px", right: "16px", zIndex: 60 }}>
        {/* Pulse ring when closed */}
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.7], opacity: [0.45, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: "#1565C0",
              pointerEvents: "none",
            }}
          />
        )}
        <motion.button
          onClick={handleToggle}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? "Cerrar chat" : "Abrir asistente"}
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: isOpen
              ? "linear-gradient(135deg, #334155, #1E293B)"
              : "linear-gradient(135deg, #1565C0 0%, #1E88E5 60%, #42A5F5 100%)",
            border: "2px solid rgba(255,255,255,0.15)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            boxShadow: isOpen
              ? "0 4px 20px rgba(0,0,0,0.4)"
              : "0 4px 24px rgba(21,101,192,0.5)",
            position: "relative",
          }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} strokeWidth={2.5} />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle size={24} strokeWidth={2} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}
