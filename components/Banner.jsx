import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full md:py-20">
      <div className="relative hidden md:block">
        <img className="w-full" src="/banner.png" alt="" />
      </div>
      <div className="relative md:hidden w-full">
        <img
          src="/banner-small.png"
          alt=""
          className="aspect-[1/1] object-cover w-full"
        />
      </div>
    </div>
  );
};

export default Banner;
