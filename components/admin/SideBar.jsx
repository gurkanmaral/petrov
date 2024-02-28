import { MainContext } from "@/app/context";
import { Button, Divider } from "@nextui-org/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { RiMenu3Line } from "react-icons/ri";
import MenuSelect from "./MenuSelect";

export default function SideBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const context = useContext(MainContext);
  const { setUser } = context;

  useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  const RenderNavItem = ({ title, route }) => {
    return (
      <div
        onClick={() => router.push(route)}
        className="flex items-center space-x-1 hover:bg-[#00999c] transition-all duration-50 hover:text-white py-1.5 cursor-pointer rounded-lg"
      >
        <GoChevronRight />
        <div className="font-normal text-sm">{title}</div>
      </div>
    );
  };

  const RenderNavHeader = ({ title }) => {
    return <div className="text-sm font-medium text-gray-500">{title}</div>;
  };
  return (
    <div className="bg-white border-r border-gray-200 h-full p-5 w-full lg:w-80 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <Link href="/admin">
            <img className="w-36" src="/Petrov - Logo.png" />
          </Link>
          <div
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="block lg:hidden cursor-pointer pl-2 py-2"
          >
            <RiMenu3Line size={30} />
          </div>
        </div>
        <div className="block lg:hidden mt-4">
          <MenuSelect />
        </div>
        {/* Menu */}
        <div
          className={`mt-5 pt-5 space-y-4 border-t ${
            showMobileMenu ? "block" : "hidden"
          } lg:!block`}
        >
          {/* Site yönetimi */}
          <div className="space-y-0">
            <RenderNavHeader title={"Site Yönetimi"} />
            <RenderNavItem
              title={"Slider Yönetimi"}
              route={"/admin/site/slider"}
            />
            <RenderNavItem
              title={"Hakkımızda"}
              route={"/admin/site/hakkimizda"}
            />
            <RenderNavItem title={"Shop"} route={"/admin/site/shop"} />
            <RenderNavItem title={"İletişim"} route={"/admin/site/iletisim"} />
            <RenderNavItem title={"İletişim Formları"} route={"/admin/site/iletisim-formlar"} />
            <RenderNavItem title={"Franchising Formları"} route={"/admin/site/franchising-formlar"} />
            <RenderNavItem
              title={"Franchising"}
              route={"/admin/site/franchising"}
            />
            <RenderNavItem title={"Detaylar"} route={"/admin/site/detaylar"} />
          </div>
          <Divider />
          {/* Site yönetimi */}
          <div className="space-y-0">
            <div className="text-sm font-medium text-gray-500">
              Menü Yönetimi
            </div>

            <RenderNavItem
              title={"Kategoriler"}
              route={"/admin/menu/kategoriler"}
            />
            <RenderNavItem title={"Ürünler"} route={"/admin/menu/urunler"} />
            <RenderNavItem
              title={"Öne Çıkan Ürünler"}
              route={"/admin/menu/one-cikan-urunler"}
            />
            <div className="hidden lg:block !mt-4">
              <MenuSelect />
            </div>
            <Button
            className="!mt-4 w-full"
              onClick={() => {
                if (typeof window !== "undefined") {
                  localStorage.removeItem("token");
                }

                let token;
                setTimeout(() => {
                  if (typeof window !== "undefined") {
                    token = localStorage.getItem("token");
                  }
                  setUser(null);
                  router.push("/admin/login");
                }, 500);
              }}
            >
              Çıkış Yap
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="text-xs text-gray-600">crafted by</div>
        <img className="h-6" src="/furkraft.png" alt="" />
      </div>
    </div>
  );
}
