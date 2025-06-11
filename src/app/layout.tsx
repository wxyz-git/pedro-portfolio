import type { Metadata } from "next";
import { Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Pedro Heras | Blockchain Developer & Security Specialist",
  description: "Personal portfolio of Pedro Heras, a Blockchain Developer and Security Specialist with expertise in Rust, Solidity, and Web3 technologies.",
  keywords: ["Blockchain Developer", "Security Specialist", "Rust", "Solidity", "Web3", "Smart Contracts", "DeFi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto.variable} ${playfair.variable} font-sans bg-white`}>
        {children}
      </body>
    </html>
  );
}
