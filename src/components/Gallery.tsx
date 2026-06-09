"use client";

import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&q=80",
    alt: "Kebun kopi",
  },
  {
    src: "https://images.unsplash.com/photo-1611854779393-1b2da9d4001c?w=500&q=80",
    alt: "Green beans",
  },
  {
    src: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=500&q=80",
    alt: "Proses panen",
  },
  {
    src: "https://images.unsplash.com/photo-1608023136031-c9e5e39fa49e?w=500&q=80",
    alt: "Sortasi kopi",
  },
  {
    src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&q=80",
    alt: "Pengemasan",
  },
  {
    src: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=500&q=80",
    alt: "Kopi specialty",
  },
];

export default function Gallery() {
  return (
    <section className="bg-surface px-6 py-24 md:py-32">
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
            Coffee <span className="text-gold">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Dokumentasi perjalanan kopi dari kebun hingga siap dikirim.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="img-placeholder aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
