"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleError = () => {
    if (videoRef.current) videoRef.current.style.display = "none";
  };

  return (
    <section id="home" className="relative flex min-h-dvh items-center overflow-hidden bg-surface">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/tmg.jpeg"
        onError={handleError}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/images/vid1.MOV" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-3 inline-block text-[10px] font-medium uppercase tracking-[0.25em] text-gold sm:text-xs sm:tracking-[0.3em]">
            Supplier & Exportir Kopi Indonesia
          </span>
          <h1 className="mb-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-6xl lg:text-7xl">
            Green Coffee Beans
            <br />
            <span className="text-gold">from Temanggung</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base md:text-lg">
            Supplying selected Arabica and Robusta coffee beans sourced from the
            highlands of Temanggung, Central Java.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-primary w-full text-sm sm:w-auto sm:text-base"
            >
              Request Sample
            </button>
            <button
              onClick={() => scrollTo("#products")}
              className="btn-outline w-full text-sm sm:w-auto sm:text-base"
            >
              View Products
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <span className="text-[10px] text-text-muted sm:text-xs">Scroll</span>
          <div className="h-6 w-px bg-gold/50 sm:h-8" />
        </div>
      </motion.div>
    </section>
  );
}
