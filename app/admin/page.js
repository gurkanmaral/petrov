"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import React, { useContext, useEffect } from "react";
import { Input } from "@nextui-org/react";
import { CiLogin } from "react-icons/ci";
import { MainContext } from "../context";
import { useRouter } from "next/navigation";

export default function page() {
  const context = useContext(MainContext);
  const { isAdmin, setIsAdmin } = context;
  const router = useRouter();
  router.push(isAdmin ? "/admin/dashboard" : "/admin/login");

  // router yönlendirmesi yapılana kadar loading ekranı gösterilebilir
  return (
    // loading ekranı
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-5">Yönlendiriliyorsunuz...</h1>
        <div className="flex justify-center items-center">
          {/* spinner icon */}
          <CiLogin className="animate-spin text-5xl" />
        </div>
      </div>
    </div>
  );
}
