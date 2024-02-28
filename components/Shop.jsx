"use client";

import { Button, Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("inside");
  const [products, setProducts] = useState([]);
  const searchParams = useSearchParams();
  const showShop = searchParams.get("shop");

  const getShopProducts = () => {
    axios.get("/api/site/shop").then((res) => {
      setProducts(res.data);
    });
  };

  useEffect(() => {
    getShopProducts();
  }, []);

  useEffect(() => {
    if (showShop) {
      setTimeout(() => {
        scrolltoHash();
      }, 1000);
    }
  }, [showShop]);

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

  const handleItemClick = (index) => {
    setSelected(index);
  };

  const scrolltoHash = function () {
    const element = document.getElementById("shop");
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };
  return (
    <section id="shop">
      <div className="container mx-auto py-10 md:py-20 ">
        <div className="mx-auto px-5">
          <div className="text-center ">
            <div className="flex items-center space-x-4 justify-center">
              <img
                className="h-10 border-r border-black px-4"
                src="./petrov-p.png"
                alt=""
              />
              <div className="text-center text-[24px] md:text-[48px] font-fairplay">
                SHOP
              </div>
            </div>
          </div>
          <div className="py-5 md:py-20">
            <div className="py-2 grid grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((item) => {
                const { name, description, price, img, _id } = item;
                return (
                  <div
                    key={`shop-product-${_id}`}
                    className="col-span-1 mt-[22px] cursor-pointer"
                    onClick={() => {
                      setSelectedProduct(item);
                      onOpen();
                    }}
                  >
                    <div className="relative ">
                      <img src={img} alt="" className="w-full object-cover aspect-[1/1] " />
                    </div>
                    <div className=" flex flex-col py-4">
                      <p className="font-poppins font-medium text-base">
                        {name}
                      </p>
                      <p className="text-sm text-gray-500">{description}</p>
                      <div className="">
                        <p className="font-poppins font-medium text-lg mt-2 text-gray-700">
                          {price} ₺
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Ürün detay modal */}
      <Modal
        scrollBehavior={scrollBehavior}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
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
    </section>
  );
};

export default Shop;
