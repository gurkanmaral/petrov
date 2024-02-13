"use client";
import PageHeaderSection from "@/components/admin/PageHeaderSection";
import PageTitle from "@/components/admin/PageTitle";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { GoCheck, GoImage } from "react-icons/go";

export default function page() {
  const [photo, setPhoto] = useState("");

  const handleChangePhoto = (file) => {
    // setIsFetching(true);
    // const url = "https://cdn.filozofunmutfagi.com"; // Uygulamanın port numarasını uygun şekilde değiştirin
    // const formData = new FormData();
    // formData.append("image", file.target.files[0]);
    // axios
    //   .post(url, formData)
    //   .then((response) => {
    //     setPhoto(response.data.url);
    //   })
    //   .catch((error) => {
    //     console.error("İstek başarısız!");
    //     console.error(error.response.data);
    //   })
    //   .finally(() => setIsFetching(false));
    // setPhoto(file.target.files[0]);
  };
  return (
    <div className="p-5">
      <PageHeaderSection>
        <PageTitle title={"Banner Yönetimi"} />
        {/* Yeşil bir slider ekle butonu */}
        <div className="flex space-x-2 items-stretch">
          <input
            type="file"
            id="file"
            className="hidden"
            accept="image/*"
            onChange={handleChangePhoto}
          />
          <label
            htmlFor="file"
            className="inline-flex text-sm items-center space-x-2 cursor-pointer bg-green-500 text-white py-2 px-4 rounded-xl transition-all duration-200 hover:bg-primary-600 border-none"
          >
            {photo ? (
              <>
                <GoImage size={20} />
                <span>Banner Fotoğrafını Düzenle</span>
              </>
            ) : (
              <>
                <GoImage size={20} />
                <span>Banner Fotoğrafı Yükle</span>
              </>
            )}
          </label>
        </div>
      </PageHeaderSection>

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
  );
}
