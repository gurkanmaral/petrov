"use client";
import Image from "next/image";
import React, { useState } from "react";

const Homepage = () => {
  const [open, setOpen] = useState(true);

  console.log(open);

  return (
    <section>
      <div className="bg-white py-5 md:py-20  ">
        <div className="container sm:mx-auto  ">
          <div className="grid grid-cols-8 gap-5 items-center   ">
            <div className="col-span-2 pl-4" >
              <img src="/Petrov - Logo.png" alt="" 
              className="object-cover"
              />
            </div>
            <div className="col-span-4">
              <ul className="hidden md:flex justify-center items-center space-x-4 font-poppins text-[16px] gap-[30px]">
                <li>Hakkımızda</li>
                <li>Menu</li>
                <li>Shop</li>
                <li>İletişim</li>
              </ul>
            </div>
            <div className="col-span-2 md:hidden flex h-full justify-end  px-4">
              <img  src="/Group 224.svg" 
              className="object-cover "
              />
            </div>
            <div className="hidden md:block col-span-2"></div>
          </div>
        </div>
      </div>
      <div className="relative ">
        <img src="/Image.png" alt="" className="hidden md:block" />
        <img src="eating.png" alt="" className="md:hidden w-full  object-cover" />
       {open && <div className="absolute inset-0 items-end md:items-center justify-center  flex ">
          <div className="relative w-2/3  md:w-1/4 md:p-10 rounded-xl">
            <div className="absolute right-[-10px] md:right-5 top-[-10px] md:top-6">
             <img 
             src="/X Button.png"
             alt=""
             className="cursor-pointer"
            onClick={()=> setOpen(false)}    
             />
            </div>
            <div>
              <img src="/coffe.png" alt="" className="object-cover" />
            </div>
            <div className="bg-white w-full font-poppins  font-medium    items-center justify-center flex  py-3 md:py-6 rounded-b-xl">
              <span className="text-center text-[12px] md:text-[18px]  ">
                MERHABA! SENİ GÖRMEK ÇOK GÜZEL
              </span>
            </div>
          </div>
        </div>}
      </div>
    </section>
  );
};

export default Homepage;
