"use client";
import { MainContext } from "@/app/context";
import { Switch } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function MenuSelect() {
  const router = useRouter();
  const context = useContext(MainContext);
  const { currentMenu, setCurrentMenu } = context;
  return (
    <div>
      <Switch
        isSelected={currentMenu === "fsm"}
        onValueChange={(value) => {
          setCurrentMenu(value ? "fsm" : "podyumpark");
          router.push("/admin/dashboard")
        }}
      >
        <div className="text-sm text-gray-600">
          <span className="font-medium text-black">
            {currentMenu === "fsm" ? "FSM Menü" : "PodyumPark Menü"}
          </span>{" "}
          düzenleniyor
        </div>
      </Switch>
    </div>
  );
}
