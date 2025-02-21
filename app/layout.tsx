import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_sections/navbar";
import Footer from "./_sections/footer";
import { Toaster } from "sonner";
import { CartProvider } from "./hooks/cart-context";

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
    <CartProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main className="flex min-h-fit flex-col items-center justify-between">
            {children}
          </main>
          <Footer />
          <Toaster />
        </body>
      </html>
    </CartProvider>
  );
}
