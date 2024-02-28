"use client";
import { Button } from "@nextui-org/react";
import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import HTMLRenderer from "react-html-renderer";

const page = () => {
  // franchising detaylarını getirir
  const getFranchising = () => {
    axios.get("/api/site/franchising").then((res) => {
      setContent(res.data.content);
    });
  };

  const [content, setContent] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      birthdate: "",
      phone: "",
      job: "",
      city: "",
      location: "",
    },
    onSubmit: (values) => {
      postForm(values);
    },
  });

  const postForm = async (e) => {
    e.preventDefault();
    axios.post("/api/site/franchising-form", formik.values).then((res) => {
      formik.resetForm();
      alert(
        "Mesajınız bize ulaştı. En kısa sürede size dönüş sağlayacağız. Teşekkürler!"
      );
      // api/site/mail route.js dosyasında belirtilen mail adresine formik.values içerisindeki verileri post eder.
      axios
        .post("/api/site/mail", { from: "franchising", ...formik.values })
        .then((res) => {
          console.log(res);
        });
    });
  };

  useEffect(() => {
    getFranchising();
  }, []);

  return (
    <section className=" mx-auto">
      <div className="relative">
        <img
          className="aspect-[16/6] object-cover"
          src="/banner-2.png"
          alt=""
        />
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-5 py-10 md:py-20 gap-10">
          <div className="col-span-1 xl:col-span-2 gap-5 flex flex-col font-poppins  text-[14px] ">
            {content && <HTMLRenderer html={content} />}
          </div>

          {/* contact form */}
          <div className="col-span-1">
            <form onSubmit={postForm} className="grid grid-cols-1 gap-5">
              <div className="flex flex-col">
                <div>
                  Ad Soyad <span className="text-red-500">*</span>
                </div>
                <input
                  name="name"
                  type="text"
                  className="border-gray-300 border rounded-[5px] p-2"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  required
                />
              </div>
              <div className="flex flex-col">
                <div>
                  Doğum Tarihi <span className="text-red-500">*</span>
                </div>
                <input
                  type="date"
                  name="birthdate"
                  className="border-gray-300 border rounded-[5px] p-2"
                  onChange={formik.handleChange}
                  value={formik.values.birthdate}
                  required
                />
              </div>
              <div className="flex flex-col">
                <div>
                  Telefon <span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  name="phone"
                  className="border-gray-300 border rounded-[5px] p-2"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  required
                />
              </div>
              <div className="flex flex-col">
                <div>
                  Meslek <span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  name="job"
                  className="border-gray-300 border rounded-[5px] p-2"
                  onChange={formik.handleChange}
                  value={formik.values.job}
                  required
                />
              </div>
              <div className="flex flex-col">
                <div>
                  İl <span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  name="city"
                  className="border-gray-300 border rounded-[5px] p-2"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  required
                />
              </div>
              <div className="flex flex-col">
                <div>
                  Yatırım Yapılacak Lokasyon{" "}
                  <span className="text-red-500">*</span>
                </div>
                <textarea
                  name="location"
                  id=""
                  cols="30"
                  rows="5"
                  className="border border-gray-300 p-3 rounded-[6px]"
                  onChange={formik.handleChange}
                  value={formik.values.location}
                  required
                ></textarea>
              </div>
              <Button color="success" className="text-white" type="submit">
                Gönder
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
