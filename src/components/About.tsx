"use client";

import { motion } from "framer-motion";
import { Sprout, Search, Package, MessageCircle } from "lucide-react";

const highlights = [
  {
    icon: Sprout,
    title: "Local Sourcing",
    desc: "Bekerja sama dengan petani kopi Temanggung.",
  },
  {
    icon: Search,
    title: "Quality Selection",
    desc: "Sortasi dan grading dilakukan sebelum pengiriman.",
  },
  {
    icon: Package,
    title: "Flexible Supply",
    desc: "Melayani kebutuhan volume kecil hingga besar.",
  },
  {
    icon: MessageCircle,
    title: "Responsive Communication",
    desc: "Respon cepat untuk konsultasi dan penawaran.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-surface-light px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="gold-accent mb-4" />
          <h2 className="section-heading mb-6">
            From Local Farms to <span className="text-gold">Your Business</span>
          </h2>
          <p className="section-subtitle">
            CoffeeBoss Indonesia bekerja sama dengan petani kopi lokal di
            Temanggung untuk menyediakan green coffee beans yang siap dipasarkan
            ke berbagai kebutuhan bisnis kopi. Kami berfokus pada kualitas bahan
            baku, komunikasi yang responsif, dan kemitraan jangka panjang dengan
            buyer.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card group"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-text-dark">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
