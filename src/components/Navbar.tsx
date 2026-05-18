"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const LOGO_URL = "/concrete/logo.png";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.5s ease",
          backgroundColor: scrolled ? "rgba(255,255,255,0.98)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid #E2E8F0" : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="site-container h-20 flex items-center justify-between">

          {/* Logo */}
          <motion.button
            onClick={() => handleNav("#inicio")}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-800/60 group-hover:ring-blue-500/60 transition-all duration-300">
              <Image
                src={LOGO_URL}
                alt="D&E Concrete Inc Logo"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div
                className="font-bold text-base leading-tight tracking-wide"
                style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.06em", color: scrolled ? "#0F172A" : "white" }}
              >
                D&amp;E CONCRETE
              </div>
              <div
                className="text-xs font-medium tracking-widest"
                style={{ color: "#42A5F5", letterSpacing: "0.12em" }}
              >
                INC · LIC. #1105655
              </div>
            </div>
          </motion.button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={scrolled ? "menu-item" : "menu-item-light"}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: phone + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:9252385488"
              className="flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: scrolled ? "#1565C0" : "rgba(255,255,255,0.9)", fontFamily: "var(--font-inter)" }}
            >
              <Phone size={14} strokeWidth={2} />
              (925) 238-5488
            </a>
            <button
              onClick={() => handleNav("#contacto")}
              className="btn-primary relative flex items-center gap-2 rounded text-sm font-bold"
              style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.06em" }}
            >
              <span className="relative z-10">COTIZACIÓN GRATIS</span>
              <ArrowRight size={15} className="relative z-10" strokeWidth={2.5} />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: scrolled ? "#0F172A" : "white" }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col pt-20"
            style={{ background: "rgba(3,8,16,0.98)", backdropFilter: "blur(24px)" }}
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-9 px-8">
              {links.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNav(link.href)}
                  className="text-white text-4xl font-bold tracking-widest transition-colors hover:text-blue-400"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                href="tel:9252385488"
                className="mt-2 btn-primary flex items-center gap-3 rounded text-xl font-bold"
                style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.06em" }}
              >
                <Phone size={20} strokeWidth={2} />
                <span className="relative z-10">(925) 238-5488</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
