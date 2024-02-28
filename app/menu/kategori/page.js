"use client";
import { MainContext } from "@/app/context";
import { Button, Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const CategoryDetails = () => {
  const context = useContext(MainContext);
  const { currentCategory } = context;
  const [products, setProducts] = useState(currentCategory.products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("inside");

  const router = useRouter();

  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="enter"
        transition={{ type: "linear" }}
        variants={variants}
      >
        <section className="container mx-auto py-5 md:py-20 px-4">
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
                className="h-6 border-r border-black px-4"
                src="/petrov-p.png"
                alt=""
              />
              <div className="text-center text-[24px] font-fairplay">MENU</div>
            </div>
            <div className="w-10"></div>
          </div>

          <div className="text-xl font-semibold mt-8 mb-4">
            {currentCategory.name}
          </div>

          <div className="w-full md:w-1/3 mx-auto">
            <div className="grid grid-cols-1">
              {products.map((item, index) => {
                const { img, name, description, price } = item;
                return (
                  <div
                    key={item.name}
                    className={`col-span-1 grid grid-cols-9 space-x-4 py-3 border-b border-gray-100 last:border-b-0 cursor-pointer`}
                    onClick={() => {
                      setSelectedProduct(item);
                      onOpen();
                    }}
                  >
                    <div className="col-span-2 flex items-center">
                      <img
                        src={img}
                        alt=""
                        className="object-cover w-full rounded-lg"
                      />
                    </div>
                    <div className="col-span-7 flex flex-col justify-between space-y-2">
                      <div>
                        <p className="font-poppins text-base font-medium md:text-[24px]">
                          {name}
                        </p>
                        <p className="text-xs text-gray-600 line-clamp-2">
                          {description}
                        </p>
                      </div>

                      <p className="font-medium text-primary">{price} ₺</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

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
      </motion.div>
    </>
  );
};

export default CategoryDetails;
