"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Robusta Grade I",
    desc: "Central Java Temanggung. Process: Natural Washed. Altitude: 200–999 MASL. Shade plant: Avocado. Screen Size: 14–18. Moisture: 12–13%. Contact us for further information.",
    tags: ["Natural Washed", "Altitude 200–999 MASL", "Shade: Avocado", "Screen 14–18", "Moisture 12–13%"],
    image: "/images/Grade 1.jpg",
  },
  {
    name: "Robusta Grade II",
    desc: "Robusta coffee beans Grade II Central Java Temanggung dried with the fruit intact, resulting in a coffee with a strong and full-bodied flavor profile, characterized by its bitterness and earthy notes. Post Harvest: Dry Hulled. Elevation: 600–900 MASL. Shade Plant: Avocado, Banana, Papaya. Screen Size: 14–18. Moisture: 12–13%. Processing Time: 30 days.",
    tags: ["Dry Hulled", "Elevation 600–900 MASL", "Shade: Avocado, Banana, Papaya", "Screen 14–18", "Moisture 12–13%", "Processing 30 Days"],
    image: "/images/Grade 2.jpg",
  },
  {
    name: "Specialty Arabica",
    desc: "Specialty Arabica Central Java Temanggung — Arabica coffee beans dried with the fruit intact, resulting in a coffee with a heavy body, low acidity, and a unique flavor profile. Process: Dry Hulled, Natural, Washed. Altitude: 1,200–1,500 MASL. Moisture: 12–13%. Screen size: 15–18. Contact us for further information.",
    tags: ["Dry Hulled", "Natural", "Washed", "Altitude 1,200–1,500 MASL", "Moisture 12–13%", "Screen 15–18"],
    image: "/images/Speciality Arabica.jpg",
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
