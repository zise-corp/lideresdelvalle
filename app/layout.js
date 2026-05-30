import { Archivo, Newsreader } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata = {
  title: "Líderes del Valle — Jóvenes que transforman su comunidad",
  description:
    "Proyecto educativo de liderazgo, democracia y participación ciudadana para jóvenes de Cochabamba, Bolivia.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${archivo.variable} ${newsreader.variable}`}>
      <head>
        {/* Si JS está desactivado, mostrar todo el contenido revelado */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
