import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <>
      <section className="container mx-auto py-4 md:py-20 ">
        <h3 className="text-[57px] font-fairplay text-center ">P - Menus</h3>
        <div className="w-5/6 md:w-2/3 mx-auto grid grid-cols-2 gap-4 md:gap-10 mt-10 ">
          <div className="col-span-1 ">
            <img src="FSM1.png" alt="" className="object-cover w-full"  />
            <div className="mt-4 text-[#707070] font-roboto text-[8px] md:text-[14px]">
              Opening Hours: 10:00 & Closing Hours:22:00
            </div>
            <div className="flex flex-col md:flex-row gap-[5px] font-poppins font-medium text-[16px] md:text-[28px] ">
            <div className="">
             F.S.M Bulvarı
            </div>
            <div>
            MENU
            </div>
            </div>
            <div className="py-3 hidden md:block font-poppins font-medium md:font-normal md:text-[#707070]">
              MENU</div>
              <div className="py-3 font-poppins font-medium md:font-normal text-[8px]  md:text-[16px]">
              Daha fazla /Read More
              </div>
          </div>
          <div className="col-span-1 ">
            <img src="podyumpark2.png" alt="" className="object-cover" />
            <div className="mt-4 text-[#707070] font-roboto text-[8px] md:text-[14px] ">
              Opening Hours: 10:00 & Closing Hours:22:00
            </div>
            <div className="flex flex-col md:flex-row gap-[5px] font-poppins font-medium text-[16px] md:text-[28px]">
              <div className="">
              PodyumPark 
              </div>
              <div>
              MENU
              </div>
            </div>
            <div className="py-3 hidden md:block font-poppins font-medium md:font-normal md:text-[#707070]">
              MENU
            </div>
              <div className="py-3 font-poppins font-medium md:font-normal text-[8px] md:text-[16px] ">
              Daha fazla /Read More
              </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Menu;
