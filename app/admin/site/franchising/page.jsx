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

const FranchisingPage = () => {
  const [value, setValue] = useState("");

  // franchising detaylarını getirir
  const getFranchising = () => {
    axios.get("/api/site/franchising").then((res) => {
      setValue(res.data.content);
    });
  };

  // franchising detaylarını kaydeder
  const handleSave = () => {
    axios.post("/api/site/franchising", { content: value }).then((res) => {
      alert("Franchising detayları güncellendi");
    });
  };

  useEffect(() => {
    getFranchising();
  }, []);

  return (
    <div className="p-5">
      <PageHeaderSection>
        <PageTitle title={"Franchising"} />
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

export default FranchisingPage;
