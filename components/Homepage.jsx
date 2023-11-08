"use client";
import Image from "next/image";
import React, { useState } from "react";

const Homepage = () => {
  const [open, setOpen] = useState(true);

  console.log(open);

  return (
    <section>
      {/*  */}
      <div className="bg-white py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-8 gap-5 items-center">
            <div className="col-span-2">
              <img src="/Petrov - Logo.png" alt="" />
            </div>
            <div className="col-span-4">
              <ul className="flex justify-center items-center space-x-4">
                <li>Ana Sayfa</li>
                <li>Hakkımızda</li>
                <li>İletişim</li>
                <li>Menü</li>
              </ul>
            </div>
            <div className="col-span-2"></div>
          </div>
        </div>
      </div>

      <div className="relative">
        <img src="https://via.placeholder.com/1600x900" alt="" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative bg-white w-1/2 p-5 rounded-xl">
            <div className="absolute right-0 top-0 text-4xl">
              {/* buraya icon gelecek */}X
            </div>
            <img src="https://via.placeholder.com/1600x900" alt="" />
            <span className="text-center">Merhaba seni görmek güzel</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
