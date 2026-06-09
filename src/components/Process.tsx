"use client";

import { motion } from "framer-motion";
import { Hand, Factory, Filter, Package } from "lucide-react";

const steps = [
  {
    icon: Hand,
    step: "01",
    title: "Selective Harvesting",
    desc: "Buah kopi dipilih berdasarkan tingkat kematangan.",
  },
  {
    icon: Factory,
    step: "02",
    title: "Processing",
    desc: "Proses dapat disesuaikan: Natural, Honey, Wet Hulling.",
  },
  {
    icon: Filter,
    step: "03",
    title: "Sorting",
    desc: "Penyortiran untuk menjaga kualitas dan konsistensi.",
  },
  {
    icon: Package,
    step: "04",
    title: "Packaging",
    desc: "Pengemasan karung kopi standar sebelum pengiriman.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-surface px-6 py-24 md:py-32">
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
            How We <span className="text-gold">Prepare Coffee</span>
          </h2>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="card relative text-center"
              >
                <span className="mb-2 block text-5xl font-bold text-gold/20">
                  {step.step}
                </span>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Icon size={28} />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
