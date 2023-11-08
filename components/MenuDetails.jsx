import Image from "next/image";
import React from "react";

const MenuItems = [
  {
    img: "/Image - 1.png",
    title: "Günaydın Petrov",
    header: "Good Morning Petrov",
  },
  {
    img: "/Image - 2.png",
    title: "Ekmek Üstü",
    header: "Bread Top",
  },
  {
    img: "/Image - 3.png",
    title: "Bowls",
    header: "Bowls",
  },
  {
    img: "/Image - 4.png",
    title: "Petrov Basic",
    header: "Basic",
  },
];
const MenuDetails = () => {
  return (
    <>
      <section className="container mx-auto py-20">
        <div className="text-center text-[57px] font-fairplay">P | İçerik</div>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-5 gap-y-10">
          {MenuItems.map((item) => {
            const { img, title, header } = item;
            return (
              <div className="col-span-1">
                <img className="w-full object-cover" src={img} alt="" />
                <div className="text-xl font-semibold mt-4">{title}</div>
                <div className="text-base text-gray-700">{header}</div>
              </div>
            );
          })}
        </div>
      </section>
      {/* <section className="hidden  flex-col  items-center mt-[100px]">
        <div className="flex w-full">
          <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-5">
              <div className="col-span-1"></div>
            </div>
          </div>
          <p className="flex text-center font-fairplay text-[57px]">
            P | İçerik
          </p>
        </div>
        <div className="w-[90%] h-[456px]  md:w-[704px] md:h-[787px] flex flex-col   mt-[80px] ">
          {Menu2.map((item, index) => (
            <div
              key={item.title}
              className={`h-[114px] md:h-[196px]  flex ${
                index === 0
                  ? "items-start md:items-center"
                  : index === Menu2.length - 1
                  ? "items-end"
                  : "items-center"
              } ${
                index !== Menu2.length - 1 ? "border-b border-[#8E8E8E]" : ""
              } gap-[20px]`}
            >
              <div className="flex gap-[20px] md:gap-[50px]">
                <div className="relative w-[84px] md:w-[114px] h-[84px] md:h-[114px]">
                  <Image fill src={item.img} alt="" />
                </div>
                <div className="flex flex-col ">
                  <p className="font-poppins font-semibold text-[18px] md:text-[28px]">
                    {item.title}
                  </p>
                  <div className="w-[181px] md:w-[516px] h-auto">
                    <p className="text-[8px] md:text-[16px] font-semibold font-poppins">
                      {item.desc}
                    </p>
                    <p className="text-[8px] md:text-[16px] text-[#868686]">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </>
  );
};

export default MenuDetails;
