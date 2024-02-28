"use client";
import PageTitle from "@/components/admin/PageTitle";
import { Button, Card, Tooltip } from "@nextui-org/react";
import { arrayMoveImmutable } from "array-move";
import { useEffect, useState } from "react";
import { GoCheck, GoListUnordered, GoPlus } from "react-icons/go";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { TbEyeEdit } from "react-icons/tb";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

import axios from "axios";
import { useRouter } from "next/navigation";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export default function page() {
  const getSliders = () => {
    axios.get("/api/site/sliders").then((res) => {
      setSliders(res.data);
    });
  };

  useEffect(() => {
    getSliders();
  }, []);

  const router = useRouter();
  const [showOrder, setShowOrder] = useState(false);
  const [sliders, setSliders] = useState([]);
  const SortableList = SortableContainer(({ items }) => {
    return (
      <div className="grid grid-cols-4 gap-5 items-center">
        {items.map((value, index) => (
          <SortableItem
            style={{ width: "100%" }}
            key={`item-${value}`}
            index={index}
            value={value}
          />
        ))}
      </div>
    );
  });

  const SortableItem = SortableElement(({ value }) => {
    return (
      <>
        <div key={value._id} className="col-span-3">
          <div className="flex items-center space-x-2">
            <img className="h-10 rounded" src={value.img} alt="" />
            <div className="text-base">{value.title}</div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative flex justify-end items-end gap-2">
            <Tooltip content="Düzenle">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <TbEyeEdit />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Sil">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <MdOutlineDeleteSweep />
              </span>
            </Tooltip>
          </div>
        </div>
      </>
    );
  });

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setSliders(
      (_items) => arrayMoveImmutable(_items, oldIndex, newIndex) // return list
    );
  };

  const saveSlidersOrder = () => {
    axios.post("/api/site/sliders", { sliders }).then((res) => {
      setShowOrder(false);
    });
  };

  const deleteSlider = (id) => {
    axios.delete("/api/site/slider", { data: { _id: id } }).then((res) => {
      getSliders();
    });
  };

  return (
    <div className="p-5">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-5">
        <PageTitle title="Slider Yönetimi" />
        {/* Mavi sliderları sıralama butonu ve yeşil yeni slider oluşturma butonu */}
        <div className="flex items-center space-x-3">
          <Button
            color="primary"
            size="small"
            onClick={() => {
              showOrder ? saveSlidersOrder() : setShowOrder(true);
            }}
            startContent={
              showOrder ? <GoCheck size={20} /> : <GoListUnordered size={20} />
            }
          >
            {showOrder ? "Sıralamayı Kaydet" : "Sıralamayı Düzenle"}
          </Button>
          <Button
            color="success"
            className="text-white"
            size="small"
            startContent={<GoPlus size={20} />}
            onClick={() => router.push("/admin/site/slider/ekle")}
          >
            Yeni Slider Oluştur
          </Button>
        </div>
      </div>

      <Card className="p-4">
        <div className="grid grid-cols-4 gap-5 table-header">
          <div className="col-span-3">Fotoğraf - İsim</div>
          <div className="col-span-1 text-right">İşlemler</div>
        </div>
        {/* slider fotoğraf ve isimi bir col, işlemler bir col olacak şekilde grid */}

        {showOrder ? (
          <SortableList
            style={{ width: "100%" }}
            items={sliders}
            onSortEnd={onSortEnd}
          />
        ) : (
          <div className="grid grid-cols-4 gap-5 items-center">
            {sliders.map((item, index) => {
              return (
                <>
                  <div key={item.id} className="col-span-3">
                    <div className="flex items-center space-x-2">
                      <img className="h-10 rounded" src={item.img} alt="" />
                      <div>
                        <div className="text-base">{item.title}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="relative flex justify-end items-end gap-2">
                      <Tooltip content="Düzenle">
                        <span
                          onClick={() =>
                            router.push(
                              `/admin/site/slider/duzenle?id=${item._id}`
                            )
                          }
                          className="text-lg text-default-400 cursor-pointer active:opacity-50"
                        >
                          <TbEyeEdit />
                        </span>
                      </Tooltip>
                      <Tooltip color="danger" content="Sil">
                        <span
                          onClick={() => deleteSlider(item._id)}
                          className="text-lg text-danger cursor-pointer active:opacity-50"
                        >
                          <MdOutlineDeleteSweep />
                        </span>
                      </Tooltip>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </Card>
    </div>
  );
}
