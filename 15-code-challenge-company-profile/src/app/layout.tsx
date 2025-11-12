import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "VIT Air Mineral Segar & Murni dari Sumber Alami",
  description:
    "Nikmati kesegaran alami setiap hari dengan VIT Air Mineral. Diproses higienis, terjamin mutunya, dan tersedia dalam berbagai kemasan untuk memenuhi kebutuhan hidrasi Anda.",
  keywords: [
    "VIT",
    "air mineral",
    "air minum",
    "minuman sehat",
    "air murni",
    "air kemasan",
    "hidrasi",
    "air minum dalam kemasan",
  ],
  authors: [{ name: "VIT Indonesia", url: "https://www.vit.co.id" }],
  openGraph: {
    title: "VIT Air Mineral – Segar & Murni dari Sumber Alami",
    description:
      "VIT Air Mineral menghadirkan kesegaran alami dari sumber pegunungan terbaik Indonesia. Pilihan tepat untuk menjaga hidrasi tubuh setiap saat.",
    url: "https://www.vit.co.id",
    siteName: "VIT Indonesia",
    images: [
      {
        url: "/VIT-homepage",
        width: 1200,
        height: 630,
        alt: "Botol VIT Air Mineral di atas meja dengan latar pegunungan",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIT Air Mineral Segar & Murni dari Sumber Alami",
    description:
      "VIT Air Mineral, pilihan cerdas untuk gaya hidup sehat dan aktif. Rasakan kesegarannya di setiap tegukan.",
    images: ["/VIT-homepage"],
    creator: "@vitindonesia",
  },
  metadataBase: new URL("https://www.vit.co.id"),
  alternates: {
    canonical: "https://www.vit.co.id",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
