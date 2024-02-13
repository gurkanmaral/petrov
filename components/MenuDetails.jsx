"use client";
import { Card } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Slider from "react-slick";

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

const MenuItems2 = [
  {
    img: "/Image - 3.png",
    title: "Smoothie Bowl",
    desc: "Muz, çilek, granola, orman meyveleri ve kabak çekirdeğil ile.",
    price: "280,00 ₺",
  },
  {
    img: "/Image - 3.png",
    title: "PineApple Bowl",
    desc: "Muz, çilek, granola, orman meyveleri ve kabak çekirdeğil ile.",
    price: "280,00 ₺",
  },
  {
    img: "/Image - 3.png",
    title: "Yeşil Bowl",
    desc: "Muz, çilek, granola, orman meyveleri ve kabak çekirdeğil ile.",
    price: "280,00 ₺",
  },
  {
    img: "/Image - 3.png",
    title: "Breakfast Bowl",
    desc: "Muz, çilek, granola, orman meyveleri ve kabak çekirdeğil ile.",
    price: "280,00 ₺",
  },
];
const MenuDetails = () => {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 2,
  };

  const RenderFeaturedProduct = ({ product }) => {
    const { title, desc, price, img } = product;
    return (
      <Card className="mx-2 shadow-lg mb-4 mt-2 p-4">
        <div className="flex flex-col space-y-4">
          <img
            className="aspect-[1/1] w-full object-cover rounded-lg"
            src={img}
            alt=""
          />
          <div className="flex flex-col space-y-1">
            <div className="font-bold text-sm">{title}</div>
            <div className="text-gray-600 text-xs">{desc}</div>
            <div className="font-semibold text-sm !mt-2">{price}</div>
          </div>
        </div>
      </Card>
    );
  };
  const router = useRouter();
  return (
    <>
      <section className="container mx-auto py-10 md:py-20 px-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => router.back()}>
            <svg
              viewBox="0 0 24 24"
              width="36"
              height="36"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="css-i6dzq1"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>

          <div className="flex items-center space-x-4 justify-center">
            <img
              className="h-10 border-r border-black px-4"
              src="./petrov-p.png"
              alt=""
            />
            <div className="text-center text-[24px] font-fairplay">MENU</div>
          </div>
          <div className="w-10"></div>
        </div>

        <div className="text-xl font-semibold !mt-8">Öne Çıkan Ürünlerimiz</div>

        <Slider {...sliderSettings} className="-mx-2">
          {MenuItems2.map((product) => {
            return <RenderFeaturedProduct product={product} />;
          })}
        </Slider>

        <div className="text-xl font-semibold !mt-8">Kategoriler</div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pb-10 pt-4">
          {MenuItems.map((item) => {
            const { img, title, header } = item;
            return (
              <div className="col-span-1 " key={item.title}>
                <img className="w-full object-cover" src={img} alt="" />
                <div className="mt-4">
                  <div className="font-poppins font-medium text-[18px] md:text-[28px]">
                    {title}
                  </div>
                  <div className="text-[14px] font-poppins">{header}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full md:w-1/3 mx-auto">
          <div className="grid grid-cols-1 gap-[20px]  ">
            {MenuItems2.map((item, index) => {
              const { img, title, desc, price } = item;
              return (
                <div
                  key={item.title}
                  className={`col-span-1 flex space-x-4   ${
                    index !== 3 ? "border-b-2" : ""
                  }`}
                >
                  <div className="w-1/3 flex items-center">
                    <img src={img} alt="" className="object-cover w-full" />
                  </div>
                  <div className="w-2/3 flex flex-col  py-3 ">
                    <p className="font-poppins font-semibold text-[18px] md:text-[24px]">
                      {title}
                    </p>
                    <div className="">
                      <p className="text-[14px] font-poppins">{desc}</p>
                      <p className="text-[16px] font-medium text-gray-500">
                        {price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuDetails;
