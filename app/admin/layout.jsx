"use client";
import "@/app/globals.css";
import SideBar from "@/components/admin/SideBar";
import { checkUserInLocalStorage, login } from "@/utils/auth";
import { Spinner } from "@nextui-org/react";
import { Inter } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../context";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  const pathname = usePathname();
  const context = useContext(MainContext);
  const router = useRouter();
  const { user, setUser } = context;
  const [userChecked, setUserChecked] = useState(false);

  useEffect(() => {
    if (!user) {
      checkUserInLocalStorage
        .then((user) => {
          const { username, password } = user;
          login(username, password).then((res) => {
            setUser(res.accessToken);
            setUserChecked(true);
          });
        })
        .catch(() => {
          setUserChecked(true);
          router.replace("/admin/login");
        });
    }
  }, [pathname]);

  return (
    <>
      {userChecked ? (
        <div className="flex flex-col lg:flex-row lg:max-h-screen lg:h-screen">
          {pathname.includes("login") || pathname === "/admin" ? null : user ? (
            <div className="lg:h-full">
              <SideBar />
            </div>
          ) : null}
          <div className="lg:flex-grow">
            {(pathname.includes("login") || user) && children}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <Spinner color="primary" />
        </div>
      )}
    </>
  );
};

export default RootLayout;
