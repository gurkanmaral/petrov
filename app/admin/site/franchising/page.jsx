"use client";
import PageHeaderSection from "@/components/admin/PageHeaderSection";
import PageTitle from "@/components/admin/PageTitle";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { GoCheck } from "react-icons/go";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const FranchisingPage = () => {
  const [value, setValue] = useState("");

  const handleSave = () => {};

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
