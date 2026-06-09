"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Phone,
  Camera,
  Mail,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";

const contactChannels = [
  { icon: Phone, label: "WhatsApp", value: "+62 895-3056-5153", href: "https://wa.me/6289530565153" },
  { icon: Camera, label: "Instagram", value: "@coffeebosindonesia", href: "https://instagram.com/coffeebosindonesia" },
  { icon: Mail, label: "Email", value: "dianasamudraglobalpt@gmail.com", href: "mailto:dianasamudraglobalpt@gmail.com" },
  { icon: Mail, label: "Marketing", value: "Marketing@coffeebosindonesia.com", href: "mailto:Marketing@coffeebosindonesia.com" },
  { icon: MapPin, label: "Location", value: "Wonokerso, Kec. Pringsurat, Kab Temanggung, Jawa Tengah" },
];

const formSchema = z.object({
  name: z.string().min(2, "Nama lengkap minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  company: z.string().optional(),
  country: z.string().min(2, "Negara wajib diisi"),
  product: z.string().min(2, "Pilih produk yang diminati"),
  estimate: z.string().optional(),
  message: z.string().min(5, "Pesan minimal 5 karakter"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    const waText = [
      `*CoffeeBoss Inquiry*`,
      `Nama: ${data.name}`,
      `Email: ${data.email}`,
      data.company ? `Perusahaan: ${data.company}` : "",
      `Negara: ${data.country}`,
      `Produk: ${data.product}`,
      data.estimate ? `Estimasi: ${data.estimate}` : "",
      `Pesan: ${data.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/6289530565153?text=${encodeURIComponent(waText)}`,
      "_blank"
    );
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="bg-surface-light px-6 py-24 md:py-32">
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
            Let&apos;s Discuss Your <span className="text-gold">Coffee Needs</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              const content = (
                <div className="card flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">{channel.label}</p>
                    <p className="text-sm font-medium">{channel.value}</p>
                  </div>
                </div>
              );
              return channel.href ? (
                <a key={channel.label} href={channel.href} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={channel.label}>{content}</div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="card space-y-4">
              {submitted && (
                <div className="flex items-center gap-2 rounded-lg bg-gold/10 p-3 text-sm text-gold">
                  <CheckCircle size={16} />
                  Terkirim! Kami akan merespon melalui WhatsApp.
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <input
                    {...register("name")}
                    placeholder="Nama Lengkap *"
                    className="w-full rounded-lg border border-white/10 bg-surface p-3 text-sm text-white outline-none transition-colors placeholder:text-text-muted focus:border-gold"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email *"
                    className="w-full rounded-lg border border-white/10 bg-surface p-3 text-sm text-white outline-none transition-colors placeholder:text-text-muted focus:border-gold"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <input
                    {...register("company")}
                    placeholder="Perusahaan (Opsional)"
                    className="w-full rounded-lg border border-white/10 bg-surface p-3 text-sm text-white outline-none transition-colors placeholder:text-text-muted focus:border-gold"
                  />
                </div>
                <div>
                  <input
                    {...register("country")}
                    placeholder="Negara *"
                    className="w-full rounded-lg border border-white/10 bg-surface p-3 text-sm text-white outline-none transition-colors placeholder:text-text-muted focus:border-gold"
                  />
                  {errors.country && (
                    <p className="mt-1 text-xs text-red-400">{errors.country.message}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <select
                    {...register("product")}
                    className="w-full rounded-lg border border-white/10 bg-surface p-3 text-sm text-white outline-none transition-colors placeholder:text-text-muted focus:border-gold"
                  >
                    <option value="" className="bg-surface">Produk yang Diminati *</option>
                    <option value="Robusta Grade I" className="bg-surface">Robusta Grade I</option>
                    <option value="Robusta Grade II" className="bg-surface">Robusta Grade II</option>
                    <option value="Specialty Arabica" className="bg-surface">Specialty Arabica</option>
                  </select>
                  {errors.product && (
                    <p className="mt-1 text-xs text-red-400">{errors.product.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("estimate")}
                    placeholder="Estimasi Kebutuhan (Opsional)"
                    className="w-full rounded-lg border border-white/10 bg-surface p-3 text-sm text-white outline-none transition-colors placeholder:text-text-muted focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Pesan *"
                  className="w-full resize-none rounded-lg border border-white/10 bg-surface p-3 text-sm text-white outline-none transition-colors placeholder:text-text-muted focus:border-gold"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center text-base disabled:opacity-60"
              >
                <Send size={18} />
                {isSubmitting ? "Mengirim..." : "Send Inquiry"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
