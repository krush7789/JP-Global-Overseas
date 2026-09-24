import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { SceneRoot } from "@/components/scene/SceneRoot";
import { SmoothScroll } from "@/lib/scroll/SmoothScroll";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "JM Global Overseas", template: "%s | JM Global Overseas" },
  description:
    "Explore international education, career and overseas opportunities across Russia, Europe and the Middle East with JM GLOBAL OVERSEAS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <SceneRoot />
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
