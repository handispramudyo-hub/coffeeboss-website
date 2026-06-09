"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Arabica Temanggung",
    desc: "Arabica yang tumbuh di dataran tinggi Temanggung dengan karakter rasa yang kompleks dan aroma yang khas.",
    tags: ["Arabica", "Honey", "Natural", "Wet Hulling"],
    image:
      "https://images.unsplash.com/photo-1608023136031-c9e5e39fa49e?w=600&q=80",
  },
  {
    name: "Robusta Temanggung",
    desc: "Robusta dengan body yang kuat dan cocok untuk kebutuhan blend maupun industri.",
    tags: ["Robusta", "Full Body", "Commercial Use"],
    image:
      "https://images.unsplash.com/photo-1611854779393-1b2da9d4001c?w=600&q=80",
  },
  {
    name: "Custom Request",
    desc: "Diskusikan kebutuhan spesifikasi kopi sesuai kebutuhan bisnis Anda.",
    tags: ["Custom Grade", "Custom Packaging", "Flexible Quantity"],
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-surface px-6 py-24 md:py-32">
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
            Available <span className="text-gold">Coffee Beans</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group card overflow-hidden p-0"
            >
              <div className="img-placeholder h-52">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold">{product.name}</h3>
                <p className="mb-4 text-sm leading-relaxed text-text-muted">
                  {product.desc}
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => {
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-light"
                >
                  Request Details <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
