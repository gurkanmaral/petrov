"use client";
import PageHeaderSection from "@/components/admin/PageHeaderSection";
import PageTitle from "@/components/admin/PageTitle";
import { Card } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function page() {
  const [forms, setForms] = useState([]);
  const getContactForms = async () => {
    axios.get("/api/site/iletisim-form").then((res) => {
      setForms(res.data.result.reverse());
    });
  };
  useEffect(() => {
    getContactForms();
  }, []);

  return (
    <div className="p-4">
      <PageHeaderSection>
        <PageTitle title="İletişim Formları" />
      </PageHeaderSection>
      <div className="grid grid-cols-2 gap-5">
        {forms.map((form) => {
          return (
            <Card className="p-4 col-span-1">
              <div>
                <p className="font-medium">{form.name + " " + form.surname}</p>
                <p className="text-xs">{form.email}</p>
                <p className="text-xs">{form.phone}</p>
                <p className="font-medium mt-2">{form.subject}</p>
                <p className="text-gray-500">{form.message}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
