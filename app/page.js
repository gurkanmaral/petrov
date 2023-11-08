import Image from "next/image";
import Homepage from "../components/Homepage";
import Menu from "@/components/Menu";
import Hakkımızda from "@/components/Hakkımızda";
import MenuDetails from "@/components/MenuDetails";
import Banner from "@/components/Banner";
import Shop from "@/components/Shop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// yalandan comment
export default function Home() {
  return (
    <div className="flex flex-col flex-1 ">
      <Homepage />
      <Menu />
      <Hakkımızda />
      <MenuDetails />
      <Banner />
      <Shop />
      <div className="md:hidden">
        <Hakkımızda />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
