"use client";
import PageHeaderSection from "@/components/admin/PageHeaderSection";
import PageTitle from "@/components/admin/PageTitle";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { GoCheck, GoImage } from "react-icons/go";

export default function page() {
  const [photo, setPhoto] = useState("asd");

  const handleChangePhoto = (file) => {
    setIsFetching(true);
    const url = "https://cdn.filozofunmutfagi.com"; // Uygulamanın port numarasını uygun şekilde değiştirin

    const formData = new FormData();
    formData.append("image", file.target.files[0]);

    axios
      .post(url, formData)
      .then((response) => {
        setPhoto(response.data.url);
      })
      .catch((error) => {
        console.error("İstek başarısız!");
        console.error(error.response.data);
      })
      .finally(() => setIsFetching(false));
    // setPhoto(file.target.files[0]);
  };
  return (
    <div className="p-5">
      <PageHeaderSection>
        <PageTitle title={"Yeni Slider Ekle"} />
        {/* Yeşil bir slider ekle butonu */}
        <div className="flex space-x-2 items-stretch">
          <label
            htmlFor="file"
            className="inline-flex text-sm items-center space-x-2 cursor-pointer bg-primary-500 text-white py-2 px-4 rounded-xl transition-all duration-200 hover:bg-primary-600 border-none"
          >
            {photo ? (
              <>
                <GoImage size={20} />
                <span>Slider Fotoğrafını Düzenle</span>
              </>
            ) : (
              <>
                <GoImage size={20} />
                <span>Slider Fotoğrafı Yükle</span>
              </>
            )}
          </label>
          <Button
            color="success"
            className="text-white"
            size="small"
            startContent={<GoCheck size={20} />}
          >
            Slider Oluştur
          </Button>
          <input
            type="file"
            id="file"
            className="hidden"
            accept="image/*"
            onChange={handleChangePhoto}
          />
        </div>
      </PageHeaderSection>

      <div className="grid grid-cols-4 gap-5 items-stretch">
        <div className="col-span-4">
          <Input
            className="w-96"
            label="Slider Başlığı"
            placeholder="Bir slider başlığı girin"
          />
        </div>
        <div className="col-span-4">
          <div className="text-2xl font-medium">Fotoğraf</div>
          {photo ? (
            <img
              className="mt-4 w-full"
              src="https://via.placeholder.com/1600x600"
            />
          ) : (
            <div>Henüz fotoğraf eklenmemiş.</div>
          )}
        </div>
      </div>
    </div>
  );
}
