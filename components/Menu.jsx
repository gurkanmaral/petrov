"use client";
import { MainContext } from "@/app/context";
import Link from "next/link";
import { useContext } from "react";

const Menu = () => {
  const context = useContext(MainContext);
  const { details } = context;
  const { fsm, podyumpark } = details;
  return (
    <>
      <section id="menu" className="container mx-auto py-10 md:py-20">
        <div className="flex items-center space-x-4 justify-center">
          <img
            className="h-10 border-r border-black px-4"
            src="./petrov-p.png"
            alt=""
          />
          <div className="text-center text-[24px] md:text-[48px] font-fairplay">
            MENU
          </div>
        </div>
        <div className="w-full px-5 lg:px-0 md:w-2/3 mx-auto grid grid-cols-2 gap-4 md:gap-10 mt-10 ">
          <Link href={`/menu?sube=fsm`}>
            <div className="col-span-1">
              <img src={fsm?.img} alt="" className="object-cover w-full" />
              <div className="mt-4 text-[#707070] font-roboto text-[12px] md:text-[14px]">
                {fsm?.time}
              </div>
              <div className="flex flex-col md:flex-row gap-[5px] font-poppins font-medium text-[16px] md:text-[28px] ">
                <div className="">{fsm?.name}</div>
              </div>
              <div className="py-3 hidden md:block font-poppins font-medium md:font-normal md:text-[#707070]">
                MENU
              </div>
            </div>
          </Link>

          <Link href="/menu?sube=podyumpark">
            <div className="col-span-1 ">
              <img src={podyumpark?.img} alt="" className="object-cover" />
              <div className="mt-4 text-[#707070] font-roboto text-[12px] md:text-[14px] ">
                {podyumpark?.time}
              </div>
              <div className="flex flex-col md:flex-row gap-[5px] font-poppins font-medium text-[16px] md:text-[28px]">
                <div className="">{podyumpark?.name}</div>
              </div>
              <div className="py-3 hidden md:block font-poppins font-medium md:font-normal md:text-[#707070]">
                MENU
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Menu;
