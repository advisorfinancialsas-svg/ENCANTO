import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const siteUrl = "https://encantoconfeccionesmc.com";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Encanto Confecciones MC | Maquila y confección en Bogotá", template: "%s | Encanto Confecciones MC" },
  description: "Maquila y confección para terceros y marcas. Diseño, desarrollo de prendas, patronaje, corte y confección en Bogotá, Colombia.",
  keywords: ["maquila de confección Bogotá", "confección para marcas", "patronaje", "corte y confección", "fabricación de prendas Colombia"],
  openGraph: { type: "website", locale: "es_CO", url: siteUrl, siteName: "Encanto Confecciones MC", title: "Encanto Confecciones MC — Damos forma a tus ideas", description: "Servicios de maquila, desarrollo y confección para marcas.", images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630, alt: "Encanto Confecciones MC" }] },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};
export const viewport: Viewport = { themeColor: "#f7f3ee", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const org = { "@context": "https://schema.org", "@type": "ClothingStore", name: "Encanto Confecciones MC", url: siteUrl, email: "encanto.confeccioness@gmail.com", telephone: "+573203053960", address: { "@type": "PostalAddress", streetAddress: "Cl 49 C Sur No. 87 J - 08", addressLocality: "Bogotá", addressCountry: "CO" }, areaServed: "Colombia", description: "Maquila, desarrollo y confección de prendas para terceros y marcas." };
  return <html lang="es-CO"><head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} /></head><body><a className="skip-link" href="#contenido">Saltar al contenido</a><SiteHeader /><main id="contenido">{children}</main><SiteFooter /><WhatsAppFloat /></body></html>;
}
