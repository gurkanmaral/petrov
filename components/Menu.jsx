import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <>
      <section className="container mx-auto py-20">
        <h3 className="text-[57px] font-fairplay text-center">P - Menus</h3>
        <div className="w-full md:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mt-10">
          <div className="col-span-1 ">
            <img src="https://via.placeholder.com/1600x900" alt="" />
            <div>Opening hours</div>
            <div>fsm bulvarı menu</div>
            <div>MENU</div>
          </div>
          <div className="col-span-1">
            <img src="https://via.placeholder.com/1600x900" alt="" />
            <div>Opening hours</div>
            <div>fsm bulvarı menu</div>
            <div>MENU</div>
          </div>
        </div>
      </section>
      <section className="relative  flex  items-center justify-center md:mt-[20px] flex-1 border  ">
        <div className="gap-[20px] md:gap-[140px] flex flex-col  w-[283px] md:w-[1200px] border border-blue-400 h-[346px] md:h-[706px]  mt-[20px] items-center ">
          <div className="text-center w-[208px]   md:w-[294px] h-[32px] md:h-[76px]  ">
            <p className="text-[22px] md:text-[57px] font-fairplay ">
              P - Menus
            </p>
          </div>
          <div className="flex w-full justify-center h-[290px] gap-[10px] md:gap-[45px]  ">
            <div className="flex flex-col gap-[10px] md:gap-[20px] md:w-[450px] md:h-[491px]">
              <div className="relative w-[134px] md:w-full h-[197px] md:h-[300px] ">
                <Image src="/FSM.png" alt="" className="object-cover" fill />
              </div>
              <div className="flex flex-col w-[134px] md:w-[450px]  h-[87px] md:h-[169px]   ">
                <span className="text-[6px] md:text-[14px] text-[#707070] font-roboto">
                  Opening Hours: 10:00 & Closing Hours:22:00
                </span>
                <p className="font-poppins font-medium text-[16px] md:text-[28px] md:mt-[-7px]">
                  F.S.M. Bulvarı MENU
                </p>
                <p className="hidden md:block font-poppins font-medium text-[16px] md:font-normal md:text-[#707070]">
                  MENU
                </p>
                <div className="flex mt-auto">
                  <p className="font-poppins  text-[8px] md:text-[16px] ">
                    Daha Fazla / Read More
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] md:gap-[20px] md:w-[450px] md:h-[491px]">
              <div className="relative w-[134px] md:w-full h-[197px] md:h-[300px] ">
                <Image src="/coffe.png" alt="" className="object-cover" fill />
              </div>
              <div className="flex flex-col w-[134px] md:w-[450px]  h-[87px] md:h-[169px]  ">
                <span className="text-[6px] md:text-[14px] text-[#707070] font-roboto">
                  Opening Hours: 10:00 & Closing Hours:22:00
                </span>
                <p className="font-poppins font-medium text-[16px] md:text-[28px] md:mt-[-7px]">
                  PodyumPark MENU
                </p>
                <p className="hidden md:block font-poppins font-medium text-[16px] md:font-normal md:text-[#707070]">
                  MENU
                </p>
                <div className="flex mt-auto">
                  <p className="font-poppins  text-[8px] md:text-[16px] ">
                    Daha Fazla / Read More
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
