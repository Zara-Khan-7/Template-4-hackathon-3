import localFont from "next/font/local";
import "./globals.css";
import CartProvider from "./components/CartProvider";
import { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SessionProviderWrapper from "./components/SessionProviderWrapper";

// Load custom fonts with variable definitions for easy reference in CSS
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Set up metadata for SEO and accessibility
export const metadata: Metadata = {
  title: "Hekto",
  description: "A modern and responsive website built with Next.js.",
};

// Layout component
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SessionProviderWrapper>
          <CartProvider>
            <ToastContainer autoClose={2000} />
            {children}
          </CartProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
};

export default Layout;
