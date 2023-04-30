'use client'
import Navbar from "../components/Navbar";
import Footer from "../components/BottomNav";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { StateContext } from "./context/store";
import { useReducer } from "react";
import { initialState, reducer } from "./context/reducer";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateContext.Provider value={useReducer(reducer,initialState)}>
        {/* <Navbar /> */}
        {children}
        </StateContext.Provider>
      </body>
      
    </html>
  );
}
