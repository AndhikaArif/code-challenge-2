import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/context/theme-context";
import PageTransition from "@/components/page-transition";

export const metadata: Metadata = {
  title: "Andhika Arif Gilang | Portfolio",
  description: "Personal portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {" "}
          <header className="sticky z-50 top-0">
            <Navbar />
          </header>
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
