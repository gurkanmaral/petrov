"use client";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Providers } from "@/app/providers";
import { useState } from "react";
import MainContextProvider from "@/app/context";
import SideBar from "@/components/admin/SideBar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    // <MainContextProvider value={{ isAdmin, setIsAdmin }}>
    //   <Providers>
        <div className="flex flex-col lg:flex-row lg:max-h-screen lg:h-screen">
          {pathname.includes("login") || pathname === "/admin" ? null : (
            <div className="lg:h-full">
              <SideBar />
            </div>
          )}
          <div className="lg:flex-grow">{children}</div>
        </div>
    //   </Providers>
    // </MainContextProvider>
  );
}
