"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import React, { useContext } from "react";
import { Input } from "@nextui-org/react";
import { CiLogin } from "react-icons/ci";
import { MainContext } from "@/app/context";
import { useRouter } from "next/navigation";

export default function page() {
  const context = useContext(MainContext);
  const { isAdmin, setIsAdmin } = context;
  const router = useRouter();
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <img className="mb-10 h-10" src="/Petrov - Logo.png" />
      <div className="w-[90%] md:w-1/2 lg:w-1/3 xl:w-1/4">
        <Card>
          <CardHeader className="block p-4">
            <div className="text-lg font-semibold">
              Petrov Yönetim'e Hoşgeldin
            </div>
            <div className="text-sm">
              Giriş yap ve işletmeni yönetmeye devam et
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="space-y-2 p-4">
            <Input label="Kullanıcı Adı" variant="bordered" />
            <Input label="Şifre" type="password" variant="bordered" />
          </CardBody>
          <Divider />
          <CardFooter className="p-4">
            <Button
              onPress={() => {
                setIsAdmin(true);
                router.push("dashboard");
              }}
              className="w-full text-white"
              size="lg"
              color="success"
              endContent={<CiLogin size={24} strokeWidth={1} />}
            >
              Giriş Yap
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="text-xs mb-1">crafted by</div>
        <img className="h-6" src="/furkraft.png" />
      </div>
      {/* powered by */}
    </div>
  );
}
