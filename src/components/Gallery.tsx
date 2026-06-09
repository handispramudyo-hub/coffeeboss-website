"use client";

import { motion } from "framer-motion";

const videos = [
  { src: "/images/vid2.mp4", alt: "Proses sortasi kopi" },
  { src: "/images/vid3.mp4", alt: "Pengemasan kopi" },
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

        <div className="grid gap-6 sm:grid-cols-2">
          {videos.map((vid, i) => (
            <motion.div
              key={vid.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="overflow-hidden rounded-lg"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="h-full w-full object-cover"
              >
                <source src={vid.src} type="video/mp4" />
              </video>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
