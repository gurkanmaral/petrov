"use client";
import PageHeaderSection from "@/components/admin/PageHeaderSection";
import PageTitle from "@/components/admin/PageTitle";
import { Button } from "@nextui-org/react";
import axios from "axios";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { GoCheck } from "react-icons/go";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const AboutPage = () => {
  useEffect(() => {
    getAboutUs();
  }, []);

  const [value, setValue] = useState("");

  const getAboutUs = () => {
    axios.get("/api/site/hakkimizda").then((res) => {
      setValue(res.data.content);
    });
  };

  const handleSave = () => {
    axios.post("/api/site/hakkimizda", { content: value }).then((res) => {
      console.log("--res", res);
    });
  };

  return (
    <div className="p-5">
      <PageHeaderSection>
        <PageTitle title={"Hakkımızda"} />
        <Button
          auto
          className="text-white"
          color="success"
          startContent={<GoCheck size={20} />}
          onClick={handleSave}
        >
          Değişiklikleri Kaydet
        </Button>
      </PageHeaderSection>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
  );
};

export default AboutPage;
