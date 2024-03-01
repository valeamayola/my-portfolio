import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Portfolio - Valentina",
  description: "Portfolio Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/memoji4.png" />
      <body className={poppins.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
