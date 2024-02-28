"use client";
import PageHeaderSection from "@/components/admin/PageHeaderSection";
import PageTitle from "@/components/admin/PageTitle";
import { Card } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function page() {
  const [forms, setForms] = useState([]);
  const getContactForms = async () => {
    axios.get("/api/site/franchising-form").then((res) => {
      setForms(res.data.result.reverse());
    });
  };
  useEffect(() => {
    getContactForms();
  }, []);

  return (
    <div className="p-4">
      <PageHeaderSection>
        <PageTitle title="Franchising Formları" />
      </PageHeaderSection>
      <div className="grid grid-cols-2 gap-5">
        {forms.map((form) => {
          return (
            <Card className="p-4 col-span-1">
              <div>
                <p className="font-medium">{form.name}</p>
                <p className="text-xs">Doğum Tarihi: {form.birthdate}</p>
                <p className="text-xs">Meslek: {form.job}</p>
                <p className="font-medium mt-2">{form.telefon}</p>
                <p className="font-medium mt-2">{form.city}</p>
                <p className="text-gray-500">{form.location}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
