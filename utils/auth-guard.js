import { MainContext } from "@/app/context";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const ignore = useRef(false);
  const context = useContext(MainContext);
  const { user } = context;
  console.log("--user", user);
  const [checked, setChecked] = useState(false);
  context;

  useEffect(() => {
    if (ignore.current) {
      console.log("--burda kalıyorum");
      return;
    }
    if (!user) {
      router.push("/admin/login");
    } else {
      setChecked(true);
    }

    if (!checked) {
      return null;
    }

    return children;
  }, []);
}
