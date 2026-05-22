import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import SearchOverlay from "@/components/SearchOverlay";
import Toast from "@/components/Toast";
import BackToTop from "@/components/BackToTop";
import MobileNav from "@/components/MobileNav";
import { Forum, Urbanist, Pinyon_Script } from "next/font/google";

const forum = Forum({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-forum",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon",
});

export const metadata: Metadata = {
  title: "LivingSpace — Ultra Luxury Living Spaces",
  description: "Curated furniture and décor for spaces that feel like you. Crafted with intention, designed for life.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${forum.variable} ${urbanist.variable} ${pinyon.variable}`}>
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
