"use client";
import { Inter } from "next/font/google";
import { useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MainContextProvider from "./context";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("fsm");
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainContextProvider
          value={{ isAdmin, setIsAdmin, currentMenu, setCurrentMenu }}
        >
          <Providers>{children}</Providers>
        </MainContextProvider>
      </body>
    </html>
  );
}
