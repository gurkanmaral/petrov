"use client";

import Image from "next/image";
import React, { useState } from "react";

const Shop = () => {
  const Menu3 = [
    {
      img: "/Img 05.png",
      title: "Kenya AB Karimikui #026",
      price: "280,00 ₺",
    },
    {
      img: "/Img 05.png",
      title: "Kenya AB Karimikui #026",
      price: "280,00 ₺",
    },
    {
      img: "/Img 05.png",
      title: "Kenya AB Karimikui #026",
      price: "280,00 ₺",
    },
    {
      img: "/Img 05.png",
      title: "Kenya AB Karimikui #026",
      price: "280,00 ₺",
    },
    {
      img: "/Img 05.png",
      title: "Kenya AB Karimikui #026",
      price: "280,00 ₺",
    },
    {
      img: "/Img 05.png",
      title: "Kenya AB Karimikui #026",
      price: "280,00 ₺",
    },
  ];

  const Menu4 = [
    {
      title: "Kahve",
    },
    {
      title: "Kahve Ekipmanları ",
    },
    {
      title: "Petrov Special",
    },
    {
      title: "All",
    },
  ];

  const [selected, setSelected] = useState(Menu4.length - 1);

  const handleItemClick = (index) => {
    setSelected(index);
  };

  return (
    <section>
      <div className="container mx-auto  py-10 md:py-20 ">
        <div className="mx-auto px-5">
          <div className="text-center ">
            <div className="flex items-center space-x-4 justify-center">
              <img
                className="h-10 border-r border-black px-4"
                src="./petrov-p.png"
                alt=""
              />
              <div className="text-center text-[24px] md:text-[48px] font-fairplay">SHOP</div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-5 md:border-b-2 mt-[40px]">
            {Menu4.map((item, index) => (
              <div
                key={item.title}
                className={`col-span-1 py-1 md:py-5 cursor-pointer ${
                  selected === index
                    ? "text-[black] md:border-b-2 border-black"
                    : "text-[#707070] "
                }`}
                onClick={() => handleItemClick(index)}
              >
                <div className="">
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="py-5 md:py-20">
            <div className="font-poppins text-[22px] xl:text-[33px] md:font-medium   font-medium">
              <h3>Kahve</h3>
            </div>
            <div className="py-5 grid grid-cols-2 lg:grid-cols-3 gap-5">
              {Menu3.map((item) => (
                <div key={item.title} className=" col-span-1 mt-[22px]">
                  <div className="relative ">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full object-cover "
                    />
                  </div>
                  <div className=" flex flex-col md:gap-[15px] py-7 ">
                    <div className=" ">
                      <p className="font-poppins font-medium text-[16px]">
                        {item.title}
                      </p>
                    </div>
                    <div className="">
                      <p className="font-poppins font-medium text-[16px] text-[#868686]">
                        {item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
