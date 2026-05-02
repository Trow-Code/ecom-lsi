import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import SearchOverlay from "@/components/SearchOverlay";
import Toast from "@/components/Toast";
import BackToTop from "@/components/BackToTop";

import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "LivingSpace — Premium Living Space Interiors",
  description: "Curated furniture and décor for spaces that feel like you. Crafted with intention, designed for life.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <CartProvider>
          {children}
          <MobileNav />
          <CartDrawer />
          <SearchOverlay />
          <Toast />
          <BackToTop />
        </CartProvider>
      </body>
    </html>
  );
}
