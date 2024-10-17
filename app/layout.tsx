import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_sections/navbar";
import Footer from "./_sections/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
      <body>
        <Navbar />

        <main className="flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
