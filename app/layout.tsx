import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DOAK - Your Source for a Variety of Drinks",
  description:
    "Explore a wide range of drinks at DOAK. Buy your favorite beverages online.",
  keywords: "DOAK drinks, buy drinks online, variety of drinks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
