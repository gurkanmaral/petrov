"use client";
import { MainContext } from "@/app/context";
import axios from "axios";
import { useFormik } from "formik";
import { useContext } from "react";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
      postForm(values);
    },
  });

  const postForm = async () => {
    axios.post("/api/site/iletisim-form", formik.values).then((res) => {
      formik.resetForm();
      alert("Mesajınız bize ulaştı. Teşekkürler!");
      // api/site/mail route.js dosyasında belirtilen mail adresine formik.values içerisindeki verileri post eder.
      axios
        .post("/api/site/mail", { from: "iletisim", ...formik.values })
        .then((res) => {
          console.log(res);
        });
    });
  };

  const context = useContext(MainContext);
  const { contact } = context;
  return (
    <section id="iletisim" className="container mx-auto py-10 mt-10 px-5">
      <div className="grid  grid-cols-1 md:grid-cols-2">
        <div className="cols-span-1 ">
          <h2 className="font-poppins text-[28px] font-semibold">
            Bize Ulaşın!
          </h2>
          <div className="flex flex-col gap-4 font-poppins font-medium md:w-2/3 text-[12px] md:text-[16px] mt-[15px] mb-12">
            <div className="">
              <p>
                Soru, görüş ve önerilerinizi bizimle paylaşabilirsiniz.
                Mesajlarınız değerlendirilecek ve en kısa sürede sizinle
                iletişime geçilecektir.
              </p>
            </div>
            <div>
              <p>
                You can share your questions, opinions, and suggestions with us.
                Your messages will be reviewed, and we will get in touch with
                you as soon as possible.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {contact.phones.map((phone, index) => (
              <div key={index} className="flex gap-[15px] mt-[26px]  ">
                <div className="relative w-[22px] h-[21px]">
                  <img src="/phone.png" alt="" />
                </div>
                <div className="flex flex-col font-poppins text-[12px] md:text-[16px] font-medium">
                  <a href={`tel:${phone}`}>{phone}</a>
                </div>
              </div>
            ))}

            {contact.emails.map((email, index) => (
              <div key={index} className="flex gap-[15px] mt-[26px]  ">
                <div className="relative w-[17px] h-[21px]">
                  <img src="/mail.png" alt="" />
                </div>
                <div className="flex flex-col font-poppins text-[12px] md:text-[16px] font-medium">
                  <p>{email}</p>
                </div>
              </div>
            ))}

            {contact.addresses.map((address, index) => (
              <div key={index} className="flex gap-[15px] mt-[26px]  ">
                <div className="relative w-[17px] h-[21px]">
                  <img src="/Vector.png" alt="" />
                </div>
                <div className="flex flex-col ">
                  <p className=" font-poppins text-[12px] md:text-[16px] font-medium">
                    {address.name}
                  </p>
                  <a
                    href={address.link}
                    target="_blank"
                    className="font-poppins text-[12px] md:text-[16px] font-medium text-[#2E90C8]"
                  >
                    {address.description}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cols-span-1 ">
          <div className="mt-[98px] md:mt-0 flex flex-col items-center md:items-start ">
            <div className="flex flex-col md:flex-row md:items-end md:gap-[5px] items-center">
              <span className="font-medium text-[28px] md:text-[32px]  font-poppins ">
                Welcome to
              </span>
              <span className="text-[28px] md:text-[32px]  font-fairplay font-regular">
                PETROV
              </span>
              <span className="hidden md:block text-[32px] font-poppins font-medium">
                Community
              </span>
            </div>
            <p className="font-poppins text-[12px] md:text-[16px] font-medium text-center mt-[10px] md:mt-[0]">
              How can we assist you? You can reach us on any subject.
            </p>
          </div>
          <div className="w-full md:w-full mx-auto md:mt-[48px]">
            <form
              onSubmit={formik.handleSubmit}
              className="mt-[95px] md:mt-[0] gap-5 font-poppins font-semibold mx-auto md:mx-0 grid grid-cols-2  items-center"
            >
              <div className="col-span-2 md:col-span-1">
                <p>İsim / Name</p>
                <input
                  type="text"
                  className="w-full outline-none border-b-2 py-2"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  required
                />
              </div>
              <div className="col-span-2 md:col-span-1  ">
                <p>Soyisim / Surname</p>
                <input
                  type="text"
                  className="w-full outline-none border-b-2 py-2"
                  name="surname"
                  onChange={formik.handleChange}
                  value={formik.values.surname}
                  required
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <p>E-mail</p>
                <input
                  type="text"
                  className="w-full outline-none border-b-2 py-2 "
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  required
                />
              </div>
              <div className="col-span-2 md:col-span-1 py-2">
                <p>Telefon / Phone</p>
                <input
                  type="number"
                  className="w-full outline-none border-b-2 py-2"
                  name="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  required
                />
              </div>
              <div className="col-span-2">
                <p>Konu / Subject</p>
                <input
                  type="text"
                  className="w-full outline-none border-b-2 py-2"
                  name="subject"
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                  required
                />
              </div>
              <div className="col-span-2">
                <p>Mesaj / Message</p>
                <input
                  type="text"
                  className="w-full outline-none border-b-2 py-2"
                  name="message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  required
                />
              </div>
              <div className="col-span-2 flex justify-center   md:justify-end items-center md:items-end">
                <button
                  type="submit"
                  className=" md:mt-[75px] py-4 px-20 bg-black text-white rounded-[5px] "
                >
                  Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
