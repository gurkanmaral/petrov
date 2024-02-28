"use client";
import { MainContext } from "@/app/context";
import { login } from "@/utils/auth";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { CiLogin } from "react-icons/ci";

export default function page() {
  const router = useRouter();
  const context = useContext(MainContext);
  const { setUser } = context;
  const [input, setInput] = useState({ username: "", password: "" });

  const handleSubmit = () => {
    login(input.username, input.password)
      .then((data) => {
        console.log("--data", data);
        setUser(true);
        router.push("/admin/site/slider");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
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
            <Input
              label="Kullanıcı Adı"
              variant="bordered"
              value={input.username}
              onChange={(e) =>
                setInput((prev) => ({ ...prev, username: e.target.value }))
              }
            />
            <Input
              label="Şifre"
              type="password"
              variant="bordered"
              value={input.password}
              onChange={(e) =>
                setInput((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </CardBody>
          <Divider />
          <CardFooter className="p-4">
            <Button
              onPress={() => {
                handleSubmit();
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
