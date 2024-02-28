"use client";
import { Spinner } from "@nextui-org/react";
import axios from "axios";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MainContextProvider from "./context";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(true);
  const [details, setDetails] = useState({});
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState(false);
  const [contact, setContact] = useState({
    addresses: [],
    phones: [],
    emails: [],
  });
  const [currentMenu, setCurrentMenu] = useState("fsm");
  const [currentCategory, setCurrentCategory] = useState(null);

  const getContactInfos = () => {
    axios.get("/api/site/iletisim").then((res) => {
      const { contacts } = res.data;
      setContact(contacts);
    });
  };

  const getDetails = () => {
    axios.get("/api/site/details").then((res) => {
      setDetails(res.data.details.content);
      setReady(true);
    });
  };
  useEffect(() => {
    getDetails();
    getContactInfos();
  }, []);

  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  // axios.interceptors.response.use(
  //   function (response) {
  //     console.log("--response", response);
  //     return response;
  //   },
  //   function (error) {
  //     console.log("--error var", error);
  //     // Any status codes that falls outside the range of 2xx cause this function to trigger
  //     // Do something with response error
  //     return Promise.reject(error);
  //   }
  // );

  return (
    <html lang="en">
      <body className={inter.className}>
        <MainContextProvider
          value={{
            user,
            setUser,
            currentMenu,
            setCurrentMenu,
            contact,
            details,
            currentCategory,
            setCurrentCategory,
          }}
        >
          <Providers>
            {ready ? (
              <motion.main
                variants={variants}
                initial="hidden"
                animate="enter"
                transition={{ type: "linear" }}
              >
                {open && (
                  <div className="fixed bg-black/60 inset-0 items-center h-screen md:items-center justify-center flex z-10">
                    <div className="relative w-4/5 md:w-2/5 md:p-10 rounded-xl">
                      <div className="absolute right-[-10px] md:right-5 top-[-10px] md:top-6">
                        <img
                          src="/X Button.png"
                          alt=""
                          className="cursor-pointer"
                          onClick={() => setOpen(false)}
                        />
                      </div>
                      <div>
                        <img
                          src={details.firstTouch.img}
                          alt=""
                          className="object-cover"
                        />
                      </div>
                      <div className="bg-white w-full font-poppins  font-medium    items-center justify-center flex  py-3 md:py-6 rounded-b-xl">
                        <span className="text-center text-[12px] md:text-[18px]  ">
                          {details.firstTouch.text}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                {children}
              </motion.main>
            ) : (
              <div className="flex justify-center items-center h-screen">
                <Spinner color="primary" />
              </div>
            )}
          </Providers>
        </MainContextProvider>
      </body>
    </html>
  );
}
