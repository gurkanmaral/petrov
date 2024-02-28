"use client";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hakkımızda from "@/components/Hakkımızda";
import Menu from "@/components/Menu";
import Shop from "@/components/Shop";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";
import Homepage from "../components/Homepage";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  // cihazın genişliği 768px den büyükse true döner
  const isDesktop = window.innerWidth > 768;

  return (
    <div className="flex flex-col ">
      <Navbar
        className="py-2 md:py-4 w-full bg-white"
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      >
        <div className="container mx-auto flex items-center">
          <NavbarContent>
            <NavbarBrand>
              <img src="/Petrov - Logo.png" alt="" className="h-10" />
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-6" justify="center">
            <NavbarItem>
              <Link className="text-lg" color="foreground" href="#hakkimizda">
                Hakkımızda
              </Link>
            </NavbarItem>
            <NavbarItem color="foreground">
              <Link className="text-lg" color="foreground" href="#menu">
                Menu
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="text-lg" color="foreground" href="#shop">
                Shop
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className="text-lg" color="foreground" href="#iletisim">
                İletişim
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex"></NavbarItem>
            <NavbarItem>
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden p-4"
              />
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu className="py-10 flex flex-col justify-between">
            <div className="space-y-2.5">
              <a
                href="#hakkimizda"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-medium block"
              >
                HAKKIMIZDA
              </a>
              <a
                href="#menu"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-medium block"
              >
                MENU
              </a>
              <a
                href="#shop"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-medium block"
              >
                SHOP
              </a>
              <a
                href="#iletisim"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-medium block"
              >
                İLETİŞİM
              </a>
            </div>
          </NavbarMenu>
        </div>
      </Navbar>
      <Homepage />
      <Menu />
      {isDesktop && <Hakkımızda />}
      {/* <MenuDetails /> */}
      <Banner />
      <Shop />
      {!isDesktop && <Hakkımızda />}
      <Contact />
      <Footer />
    </div>
  );
}
