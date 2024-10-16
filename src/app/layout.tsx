import Header from "./components/header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";
import HeaderTop from "./components/header1";

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

export const metadata: Metadata = {
  title: "Plan A Plant",
  description: "A beautifully designed e-commerce website for plant lovers. Explore a variety of plants, add them to your cart, and place orders with ease. Experience smooth animations and responsive design across all devices.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderTop/>
      <Header/>
       <div className="min-h-screen"> 
        {children}
        </div>
       <Footer/> 
      </body>
    </html>
  );
}
