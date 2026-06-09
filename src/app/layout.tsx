import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoffeeBoss Indonesia — Supplier & Exportir Green Coffee Beans",
  description:
    "Supplying selected Arabica and Robusta coffee beans sourced from the highlands of Temanggung, Central Java.",
  openGraph: {
    title: "CoffeeBoss Indonesia",
    description:
      "Green coffee beans supplier from Temanggung, Central Java.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
