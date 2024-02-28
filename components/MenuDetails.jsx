"use client";
import { MainContext } from "@/app/context";
import {
  Button,
  Card,
  Modal,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import axios from "axios";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";

const MenuDetails = () => {
  const context = useContext(MainContext);
  const { currentMenu, setCurrentCategory } = context;
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [menu, setMenu] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("inside");

  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  const getFeaturedProducts = () => {
    console.log("--currentMenu", currentMenu);

    axios
      .get(`/api/menu/featured-products?menuKey=${currentMenu}`)
      .then((res) => {
        setFeaturedProducts(res.data.featuredProducts);
      });
  };

  const getCategoryAndProducts = () => {
    console.log("--currentMenu", currentMenu);

    axios.get(`/api/menu/categories?menuKey=${currentMenu}`).then((res) => {
      setMenu(res.data.categories);
    });
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 2.5,
    slidesToScroll: 2,
  };

  const RenderFeaturedProduct = ({ product }) => {
    const { name, description, price, img } = product;
    return (
      <div
        className="cursor-pointer"
        onClick={() => {
          setSelectedProduct(product);
          onOpen();
        }}
      >
        <Card className="mx-1.5 shadow-lg mb-4 mt-2">
          <div className="flex flex-col space-y-0">
            <img
              className="aspect-[1/1] w-full object-cover rounded-t-lg"
              src={img}
              alt=""
            />
            <div className="flex flex-col space-y-0.5 p-2.5">
              <div className="font-medium text-sm line-clamp-1">{name}</div>
              <div className="text-gray-600 text-xs line-clamp-1">
                {description}
              </div>
              <div className="font-semibold text-sm !mt-2">{price} ₺</div>
            </div>
          </div>
        </Card>
      </div>
    );
  };
  const router = useRouter();

  useEffect(() => {
    if (featuredProducts.length === 0 || menu.length === 0) {
      getFeaturedProducts();
      getCategoryAndProducts();
    }
  }, []);

  return (
    <>
      <section id="menu" className="container mx-auto py-5 md:py-20">
        {/* Header */}
        <div className="flex items-center justify-between px-4">
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
              className="h-6 border-r border-black px-4"
              src="./petrov-p.png"
              alt=""
            />
            <div className="text-center text-[24px] font-fairplay">MENU</div>
          </div>
          <div className="w-10"></div>
        </div>

        {/* Featured Products */}
        <div className="pl-4">
          <div className="text-xl font-light !mt-8">Öne Çıkan Ürünlerimiz</div>

          {featuredProducts.length > 0 && (
            <motion.div
              variants={variants}
              initial="hidden"
              animate="enter"
              transition={{ type: "linear" }}
            >
              <Slider {...sliderSettings} className="-ml-2">
                {featuredProducts.map((product, index) => {
                  return (
                    <RenderFeaturedProduct key={index} product={product} />
                  );
                })}
              </Slider>
            </motion.div>
          )}
        </div>

        {/* Ürün detay modal */}
        <Modal
          scrollBehavior={scrollBehavior}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="bottom"
        >
          <ModalContent>
            {(onClose) => (
              <div className="p-4">
                <div className="relative">
                  <img
                    src={selectedProduct.img}
                    alt=""
                    className="w-full object-cover rounded"
                  />
                </div>
                <div className=" flex flex-col py-4">
                  <p className="font-poppins font-medium text-base">
                    {selectedProduct.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {selectedProduct.description}
                  </p>
                  <div className="">
                    <p className="font-poppins font-medium text-lg mt-2 text-gray-700">
                      {selectedProduct.price} ₺
                    </p>
                  </div>
                </div>
                <Button className="w-full" color="primary" onClick={onClose}>
                  Kapat
                </Button>
              </div>
            )}
          </ModalContent>
        </Modal>

        {/* Categories */}
        <div className="px-4">
          <div className="text-xl font-light !mt-8">Kategoriler</div>

          {menu.length > 0 && (
            <motion.div
              variants={variants}
              initial="hidden"
              animate="enter"
              transition={{ type: "linear" }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10 pt-4">
                {menu.map((item) => {
                  const { img, name, description } = item;
                  return (
                    <div
                      onClick={() => {
                        setCurrentCategory(item);
                        router.push("/menu/kategori");
                      }}
                      className="col-span-1"
                      key={item.name}
                    >
                      <img className="w-full object-cover" src={img} alt="" />
                      <div className="mt-2">
                        <div className="font-poppins font-medium text-base md:text-[28px]">
                          {name}
                        </div>
                        <div className="text-[14px] text-gray-600">
                          {description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default MenuDetails;
