"use client";
import PageHeaderSection from "@/components/admin/PageHeaderSection";
import PageTitle from "@/components/admin/PageTitle";
import { Button, Card, Divider, Input } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { GoCheck } from "react-icons/go";

export default function page() {
  const [details, setDetails] = useState({
    firstTouch: {
      text: "",
      img: "",
    },
    banner: {
      link: "",
      img: "",
    },
    fsm: {
      name: "",
      time: "",
      img: "",
    },
    podyumpark: {
      name: "",
      time: "",
      img: "",
    },
  });

  const handleChangePhoto = (file, from) => {
    console.log("--file", file);
    const url = "https://cdn.petrov.com.tr"; // Uygulamanın port numarasını uygun şekilde değiştirin

    const formData = new FormData();
    formData.append("image", file.target.files[0]);

    axios
      .post(url, formData)
      .then((response) => {
        switch (from) {
          case "seni-gormek-guzel":
            setDetails({
              ...details,
              firstTouch: { ...details.firstTouch, img: response.data.url },
            });
            break;
          case "banner":
            setDetails({
              ...details,
              banner: { ...details.banner, img: response.data.url },
            });
            break;
          case "fsm":
            setDetails({
              ...details,
              fsm: { ...details.fsm, img: response.data.url },
            });
            break;
          case "podyumpark":
            setDetails({
              ...details,
              podyumpark: { ...details.podyumpark, img: response.data.url },
            });
            break;
          default:
            break;
        }
      })
      .catch((error) => {
        console.error("İstek başarısız!");
        console.error(error.response.data);
      });
  };

  const handleSubmit = () => {
    axios.post("/api/site/details", { details }).then((res) => {
      console.log("--details", details);
      console.log("--res", res);
      if (res.status === 200) {
        alert("Değişiklikler kaydedildi");
      }
    });
  };

  const getDetails = () => {
    axios.get("/api/site/details").then((res) => {
      setDetails(res.data.details.content);
    });
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="p-5 h-full overflow-y-scroll">
      <PageHeaderSection>
        <PageTitle title={"Detaylar"} />
        <Button
          startContent={<GoCheck size={20} strokeWidth={1} />}
          color="success"
          className="text-white"
          onClick={handleSubmit}
        >
          Değişiklikleri Kaydet
        </Button>
      </PageHeaderSection>

      {/* Seni görmek güzel fonksiyonunun yönetileceği bir alan. Bir text ve bir görsel olacak. */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <Card className="p-4">
            <div className="text-lg font-medium">Seni Görmek Güzel</div>
            <Divider className="my-4" />
            <div className="flex flex-col space-y-5">
              <Input
                label="Açılış Yazısı"
                placeholder="Site ilk açıldığında gösterilecek yazı"
                type="text"
                value={details.firstTouch.text}
                onChange={(e) => {
                  setDetails({
                    ...details,
                    firstTouch: { ...details.firstTouch, text: e.target.value },
                  });
                }}
              />
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-500">
                  Görsel
                </label>
                <input
                  type="file"
                  id="seni-gormek-guzel"
                  accept="image/*"
                  onChange={(e) => handleChangePhoto(e, "seni-gormek-guzel")}
                  className="w-full border border-gray-200 rounded-lg p-2"
                />
                <img src={details.firstTouch.img} alt="" />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-span-1">
          <Card className="p-4">
            <div className="text-lg font-medium">Banner Yönetimi</div>
            <Divider className="my-4" />
            <div className="flex flex-col space-y-5">
              <Input
                label="Link"
                placeholder="Banner'a tıklandığında yönlendirilecek link"
                type="text"
                value={details.banner.link}
                onChange={(e) => {
                  setDetails({
                    ...details,
                    banner: { ...details.banner, link: e.target.value },
                  });
                }}
              />
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-500">
                  Görsel
                </label>
                <input
                  type="file"
                  id="banner"
                  accept="image/*"
                  onChange={(e) => handleChangePhoto(e, "banner")}
                  className="w-full border border-gray-200 rounded-lg p-2"
                />
                <img src={details.banner.img} alt="" />
              </div>
            </div>
          </Card>
        </div>

        <div className="col-span-1">
          {/* Menüler fonksiyonunun yönetileceği bir alan. Bir menü adı, açıklaması ve bir görsel olacak. */}
          <Card className="p-4">
            <div className="text-lg font-medium">FSM Menü</div>
            <Divider className="my-3" />
            <div className="flex flex-col space-y-5">
              <Input
                label="Menü adı"
                placeholder="Sitede menü adı olarak gösterilen alan"
                type="text"
                value={details.fsm.name}
                onChange={(e) => {
                  setDetails({
                    ...details,
                    fsm: { ...details.fsm, name: e.target.value },
                  });
                }}
              />
              <Input
                label="Açılış/Kapanış Saatleri"
                placeholder="Şube açılış/kapanış saatlerinin gösterildiği alan"
                type="text"
                value={details.fsm.time}
                onChange={(e) => {
                  setDetails({
                    ...details,
                    fsm: { ...details.fsm, time: e.target.value },
                  });
                }}
              />
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-500">
                  Görsel
                </label>
                <input
                  type="file"
                  id="banner"
                  accept="image/*"
                  onChange={(e) => handleChangePhoto(e, "fsm")}
                  className="w-full border border-gray-200 rounded-lg p-2"
                />
                <img
                  className="w-full rounded-lg aspect-[16/9]"
                  src={details.fsm.img}
                  alt=""
                />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-span-1">
          {/* Menüler fonksiyonunun yönetileceği bir alan. Bir menü adı, açıklaması ve bir görsel olacak. */}
          <Card className="p-4">
            <div className="text-lg font-medium">PodyumPark Menü</div>
            <Divider className="my-3" />
            <div className="flex flex-col space-y-5">
              <Input
                label="Menü adı"
                placeholder="Sitede menü adı olarak gösterilen alan"
                type="text"
                value={details.podyumpark.name}
                onChange={(e) => {
                  setDetails({
                    ...details,
                    podyumpark: { ...details.podyumpark, name: e.target.value },
                  });
                }}
              />
              <Input
                label="Açılış/Kapanış Saatleri"
                placeholder="Şube açılış/kapanış saatlerinin gösterildiği alan"
                type="text"
                value={details.podyumpark.time}
                onChange={(e) => {
                  setDetails({
                    ...details,
                    podyumpark: { ...details.podyumpark, time: e.target.value },
                  });
                }}
              />
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-500">
                  Görsel
                </label>
                <input
                  type="file"
                  id="podyumpark"
                  accept="image/*"
                  onChange={(e) => handleChangePhoto(e, "podyumpark")}
                  className="w-full border border-gray-200 rounded-lg p-2"
                />
                <img
                  className="w-full rounded-lg aspect-[16/9]"
                  src={details.podyumpark.img}
                  alt=""
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
