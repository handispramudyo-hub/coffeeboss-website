"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

const products = [
  {
    name: "Robusta Grade I",
    short: "Green beans Natural Washed dari Temanggung. Screen 14–18, moisture 12–13%.",
    desc: "Central Java Temanggung. Process: Natural Washed. Altitude: 200–999 MASL. Shade plant: Avocado. Screen Size: 14–18. Moisture: 12–13%. Contact us for further information.",
    tags: ["Natural Washed", "Altitude 200–999 MASL", "Shade: Avocado", "Screen 14–18", "Moisture 12–13%"],
    image: "/images/Grade 1.jpg",
  },
  {
    name: "Robusta Grade II",
    short: "Dry Hulled robusta, strong & full-bodied. Elevation 600–900 MASL.",
    desc: "Robusta coffee beans Grade II Central Java Temanggung dried with the fruit intact, resulting in a coffee with a strong and full-bodied flavor profile, characterized by its bitterness and earthy notes. Post Harvest: Dry Hulled. Elevation: 600–900 MASL. Shade Plant: Avocado, Banana, Papaya. Screen Size: 14–18. Moisture: 12–13%. Processing Time: 30 days.",
    tags: ["Dry Hulled", "Elevation 600–900 MASL", "Shade: Avocado, Banana, Papaya", "Screen 14–18", "Moisture 12–13%", "Processing 30 Days"],
    image: "/images/Grade 2.jpg",
  },
  {
    name: "Specialty Arabica",
    short: "Arabica heavy body, low acidity. Altitude 1,200–1,500 MASL.",
    desc: "Specialty Arabica Central Java Temanggung — Arabica coffee beans dried with the fruit intact, resulting in a coffee with a heavy body, low acidity, and a unique flavor profile. Process: Dry Hulled, Natural, Washed. Altitude: 1,200–1,500 MASL. Moisture: 12–13%. Screen size: 15–18. Contact us for further information.",
    tags: ["Dry Hulled", "Natural", "Washed", "Altitude 1,200–1,500 MASL", "Moisture 12–13%", "Screen 15–18"],
    image: "/images/Speciality Arabica.jpg",
  },
  {
    name: "Robusta Cherry Red Pick",
    short: "Handpicked ripe cherries, bold flavor with earthy aroma.",
    desc: "Robusta Cherry Red Pick – Origin Temanggung. Sourced directly from our partnered farmers in Temanggung, these robusta cherries are handpicked only at peak ripeness. Each batch is carefully selected to ensure top quality—resulting in a bold flavor profile with distinctive earthy aroma.",
    tags: ["Cherry Red Pick", "Handpicked", "Peak Ripeness", "Bold Flavor", "Earthy Aroma"],
    image: "/images/redcherry.jpeg",
  },
];

export default function Products() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (i: number) => {
    setExpanded(expanded === i ? null : i);
  };

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

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group card overflow-hidden p-0"
            >
              <div className="img-placeholder h-44 sm:h-52">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="mb-3 text-lg font-semibold sm:text-xl">{product.name}</h3>
                <p className="text-xs leading-relaxed text-text-muted sm:text-sm">
                  {product.short}
                </p>

                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-xs leading-relaxed text-text-muted sm:text-sm">
                        {product.desc}
                      </p>
                      <div className="mb-3 mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                        {product.tags.map((tag) => (
                          <span key={tag} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => toggleExpand(i)}
                  className="mt-3 flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold-light"
                >
                  {expanded === i ? (
                    <>Show Less <ChevronUp size={16} /></>
                  ) : (
                    <>Request Details <ChevronDown size={16} /></>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
