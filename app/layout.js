'use client'
import Navbar from "../components/Navbar";
import Footer from "../components/BottomNav";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {/* <Navbar /> */}
        {children}

      </body>
      
    </html>
  );
}
