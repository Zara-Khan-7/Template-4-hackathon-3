'use client'
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import store from "./store/store";
import { Provider } from "react-redux";

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

// // Set up metadata for SEO and accessibility
// export const metadata: Metadata = {
//   title: "Hekto",
//   description: "A modern and responsive website built with Next.js."
// };

// // Set up viewport
// const viewportMeta = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   
    <Provider store={store}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Provider>
    
  );
}
