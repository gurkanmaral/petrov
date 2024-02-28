"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import HTMLRenderer from "react-html-renderer";

const Hakkımızda = () => {
  const [content, setContent] = useState("");
  const getAboutUs = () => {
    axios.get("/api/site/hakkimizda").then((res) => {
      setContent(res.data.content);
    });
  };

  useEffect(() => {
    getAboutUs();
  }, []);

  return (
    <section id="hakkimizda" className="container mx-auto px-5">
      <h3 className="text-[57px] font-fairplay text-center">
        <div className="flex items-center space-x-4 justify-center">
          <img
            className="h-10 border-r border-black px-4"
            src="./petrov-p.png"
            alt=""
          />
          <div className="text-center text-[24px] md:text-[48px] font-fairplay">
            Bizimle Tanışın
          </div>
        </div>
      </h3>
      <div className="text-center font-poppins text-[14px] md:text-[18px] mt-10 md:mt-20">
        {content && <HTMLRenderer html={content} />}
      </div>
    </section>
  );
};

export default Hakkımızda;
