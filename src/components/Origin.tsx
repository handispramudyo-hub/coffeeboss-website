"use client";

import { motion } from "framer-motion";
import { Mountain, Thermometer, Droplets, MapPin } from "lucide-react";

const cards = [
  { icon: Mountain, label: "Ketinggian", value: "800–1.500 mdpl" },
  { icon: Thermometer, label: "Suhu", value: "17–24°C" },
  { icon: Droplets, label: "Tanah", value: "Volcanic Soil" },
  { icon: MapPin, label: "Lokasi", value: "Temanggung, Central Java" },
];

export default function Origin() {
  return (
    <section id="origin" className="bg-surface-light px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="gold-accent mb-4" />
            <h2 className="section-heading mb-6">
              Coffee from <span className="text-gold">Temanggung Highlands</span>
            </h2>
            <p className="section-subtitle mb-10">
              Temanggung merupakan salah satu daerah penghasil kopi di Jawa
              Tengah dengan kondisi alam yang mendukung pertumbuhan kopi
              berkualitas.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {cards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="rounded-lg border border-white/5 bg-surface p-4"
                  >
                    <Icon size={20} className="mb-2 text-gold" />
                    <p className="text-xs text-text-muted">{card.label}</p>
                    <p className="text-sm font-semibold">{card.value}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="img-placeholder h-[400px] rounded-xl lg:h-[500px]"
          >
            <img
              src="/images/tmg.jpeg"
              alt="Temanggung coffee highlands"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
