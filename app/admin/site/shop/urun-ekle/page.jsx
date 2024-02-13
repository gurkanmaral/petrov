"use client";
import PageHeaderSection from "@/components/admin/PageHeaderSection";
import PageTitle from "@/components/admin/PageTitle";
import { Button, Card, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import { GoCheck, GoImage } from "react-icons/go";

const AddProductPage = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("asd");
  const [productPrice, setProductPrice] = useState("");

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };

  const handleProductImageChange = (e) => {
    setProductImage(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform necessary operations to save the product here
    console.log("Product Name:", productName);
    console.log("Product Description:", productDescription);
    console.log("Product Image:", productImage);
    console.log("Product Price:", productPrice);
  };

  return (
    <div className="p-5">
      <PageHeaderSection>
        <PageTitle title={"Yeni Ürün Ekle"} />
        <Button
          startContent={<GoCheck size={20} strokeWidth={1} />}
          color="success"
          className="text-white"
          onClick={handleSubmit}
        >
          Ürünü Ekle
        </Button>
      </PageHeaderSection>
      <Card className="p-4 grid grid-cols-4 items-stretch gap-4">
        <div className="col-span-4 lg:col-span-1">
          {productImage && (
            <img
              className="mb-2 rounded-xl aspect-[1/1] object-cover"
              src="https://www.kevserinmutfagi.com/wp-content/uploads/2014/09/limon_tuzu2.jpg"
              alt=""
            />
          )}
          <input type="file" id="file" className="hidden" accept="image/*" />
          <label
            htmlFor="file"
            className={`flex w-full ${
              productImage ? null : "h-full"
            } text-sm items-center justify-center space-x-2 cursor-pointer bg-gray-500 text-white py-2 px-4 rounded-xl transition-all duration-200 hover:bg-primary-600 border-none`}
          >
            {productImage ? (
              <>
                <GoImage size={30} />
                <span className="text-center">Fotoğrafı Düzenle</span>
              </>
            ) : (
              <>
                <GoImage size={20} />
                <span>Ürün Fotoğrafı Yükle</span>
              </>
            )}
          </label>
        </div>

        <div className="col-span-4 lg:col-span-3 space-y-2">
          <div className="col-span-3 flex space-between space-x-2">
            <Input
              type="text"
              value={productName}
              onChange={handleProductNameChange}
              label="Ürün adı"
            />
            <Input
              type="text"
              value={productPrice}
              onChange={handleProductPriceChange}
              label="Fiyat"
            />
          </div>
          <Textarea
            type="text"
            value={productDescription}
            onChange={handleProductDescriptionChange}
            label="Ürün Açıklaması"
          />
        </div>
      </Card>
    </div>
  );
};

export default AddProductPage;
