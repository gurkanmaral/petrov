"use client";
import { MainContext } from "@/app/context";
import { redirect } from "next/navigation";
import { useContext, useEffect } from "react";

export default function isAuth(Component) {
  return function IsAuth(props) {
    const context = useContext(MainContext);
    const { user } = context;

    useEffect(() => {
      if (!user) {
        return redirect("/admin/login");
      } else {
        return redirect("/admin/site/slider");
      }
    }, []);

    if (!user) {
      return null;
    }

    return <Component {...props} />;
  };
}
