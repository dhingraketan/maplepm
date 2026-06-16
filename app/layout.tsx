import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const heading = Lora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const defaultDescription =
  "Professional property maintenance, exterior cleaning, roof cleaning, gutter cleaning, pressure washing, and lawn maintenance services in the Lower Mainland.";

export const metadata: Metadata = {
  metadataBase: new URL("https://maplepm.ca"),
  title: {
    default: "Maple Property Maintenance",
    template: "%s | Maple Property Maintenance",
  },
  description: defaultDescription,
  openGraph: {
    title: "Maple Property Maintenance",
    description: defaultDescription,
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${heading.variable} ${body.variable}`}>
      <body className={body.className}>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
