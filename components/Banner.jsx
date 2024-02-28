"use client"
import { MainContext } from "@/app/context";
import { useContext } from "react";

const Banner = () => {
  const context = useContext(MainContext);
  const { details } = context;
  const { banner } = details;
  return (
    <div className="w-full md:py-20 z-1">
      <div className="relative hidden md:block">
        <img className="w-full" src={banner.img} alt="" />
      </div>
      <div className="relative md:hidden w-full">
        <img
          src={banner.img}
          alt=""
          className="aspect-[1/1] object-cover w-full"
        />
      </div>
    </div>
  );
};

export default Banner;
