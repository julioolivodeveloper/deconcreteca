import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "D&E Concrete Inc | Bay Area Concrete Contractor",
  description:
    "D&E Concrete Inc — 20+ years of expert concrete work in the Bay Area. Driveways, pool decks, patios, stamped concrete, retaining walls. Lic #1105655. Call (925) 238-5488.",
  keywords:
    "concrete contractor, Bay Area, driveways, pool decks, patios, stamped concrete, retaining walls, Antioch, California",
  openGraph: {
    title: "D&E Concrete Inc | Bay Area Concrete Contractor",
    description: "20+ Years of Concrete Excellence in the Bay Area. Fully Licensed & Insured. Free Estimates.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
