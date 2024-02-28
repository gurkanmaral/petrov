"use client";
import MenuDetails from "@/components/MenuDetails";
import { Spinner } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../context";

export default function menu() {
  const searchParams = useSearchParams();
  const sube = searchParams.get("sube");
  const context = useContext(MainContext);
  const { setCurrentMenu } = context;
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (sube === "fsm" || sube === "podyumpark") {
      setCurrentMenu(sube);
      setIsReady(true);
    } else {
      console.log("--else girdi");
      setCurrentMenu("fsm");
      setIsReady(true);
    }
  }, [sube]);
  return isReady ? (
    <MenuDetails />
  ) : (
    <div className="w-screen h-screen flex items-center justify-center">
      <Spinner size="large" color="primary" />
    </div>
  );
}
