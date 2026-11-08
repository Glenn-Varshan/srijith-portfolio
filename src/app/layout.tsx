
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Srijith Poosarla | Mandolin Artist",
  description:
    "Official portfolio of Srijith Poosarla. Explore his musical journey, projects, performances and press resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#151512] text-[#eee8dc] antialiased">
          <Navbar />
            <PageTransition>{children}</PageTransition>
          <Footer />
      </body>
    </html>
  );
}
