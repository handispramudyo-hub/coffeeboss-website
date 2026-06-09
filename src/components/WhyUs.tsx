"use client";

import { motion } from "framer-motion";
import { TreePine, MessageSquareText, Handshake, Target } from "lucide-react";

const points = [
  {
    icon: TreePine,
    title: "Direct Farm Sourcing",
    desc: "Sumber kopi dari area produksi Temanggung.",
  },
  {
    icon: MessageSquareText,
    title: "Transparent Communication",
    desc: "Informasi produk dan proses disampaikan secara terbuka.",
  },
  {
    icon: Handshake,
    title: "Flexible Partnership",
    desc: "Terbuka untuk kebutuhan buyer skala kecil maupun besar.",
  },
  {
    icon: Target,
    title: "Long-Term Focus",
    desc: "Berorientasi pada hubungan bisnis jangka panjang.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-surface-light px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="gold-accent mx-auto mb-4" />
          <h2 className="section-heading mb-6">
            Why Work With <span className="text-gold">CoffeeBoss</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card group"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-text-dark">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{point.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {point.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
