"use client";
import { MainContext } from "@/app/context";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";

const Homepage = () => {
  const [sliders, setSliders] = useState([]);

  const context = useContext(MainContext);
  const { details } = context;
  const { firstTouch } = details;
  const { img, text } = firstTouch;

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = () => {
    axios.get("/api/site/sliders").then((res) => {
      setSliders(res.data);
    });
  };

  return (
    <section>
      {/* <div className="bg-white py-5 md:py-10">
        <div className="container sm:mx-auto">
          <div className="grid grid-cols-8 gap-5 items-center">
            <div className="col-span-4 md:col-span-2 flex items-center pl-4">
              <img
                src="/Petrov - Logo.png"
                alt=""
                className="h-10 object-cover"
              />
            </div>
            <div className="col-span-4 hidden md:block">
              <ul className="hidden md:flex justify-center items-center space-x-4 font-poppins text-[16px] gap-[30px]">
                <li>
                  <a href="#hakkimizda">Hakkımızda</a>
                </li>
                <li>
                  <a href="#menu">Menu</a>
                </li>
                <li>
                  <a href="#shop">Shop</a>
                </li>
                <li>
                  <a href="#iletisim">İletişim</a>
                </li>
              </ul>
            </div>
            <div className="col-span-4 md:hidden flex h-full justify-end items-center px-4">
              <img src="/Group 224.svg" className="object-cover h-5 " />
            </div>
            <div className="hidden md:block col-span-2"></div>
          </div>
        </div>
      </div> */}
      <div className="relative ">
        <Slider {...sliderSettings}>
          {sliders.map((slider) => (
            <div>
              <img
                src={slider.img}
                alt=""
                className="aspect-[1/1] md:aspect-[16/9] object-cover w-full"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Homepage;
