"use client";

// Footer component — no animation imports needed

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Origin", href: "#origin" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-surface px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-gold">Coffee</span>
              <span className="text-white">Boss</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              CoffeeBoss Indonesia — Supplier green coffee beans dari
              Temanggung, Jawa Tengah.
            </p>
            <p className="mt-2 text-xs text-text-muted">
              Jl. Jatirunggo Pringapus, Kec. Pringapus, Kabupaten Semarang, Jawa Tengah 50214
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm text-text-muted transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Informasi
            </h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>Kemasan: 60 Kg Jute Bag</li>
              <li>MOQ: Menyesuaikan kebutuhan</li>
              <li>Pengiriman: Domestik &amp; Internasional</li>
              <li>WhatsApp: +62 813-3825-6185</li>
              <li>Email: dianasamudraglobalpt@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-text-muted">
          &copy; {new Date().getFullYear()} CoffeeBoss Indonesia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
