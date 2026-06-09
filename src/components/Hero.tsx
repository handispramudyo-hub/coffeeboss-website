"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Supplier & Exportir Kopi Indonesia
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Green Coffee Beans
            <br />
            <span className="text-gold">from Temanggung</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            Supplying selected Arabica and Robusta coffee beans sourced from the
            highlands of Temanggung, Central Java.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-primary text-base"
            >
              Request Sample
            </button>
            <button
              onClick={() => scrollTo("#products")}
              className="btn-outline text-base"
            >
              View Products
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-text-muted">Scroll</span>
          <div className="h-8 w-[1px] bg-gold/50" />
        </div>
      </motion.div>
    </section>
  );
}
