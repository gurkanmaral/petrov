"use client";
import PageHeaderSection from "@/components/admin/PageHeaderSection";
import PageTitle from "@/components/admin/PageTitle";
import {
  Button,
  Card,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { arrayMoveImmutable } from "array-move";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GoCheck, GoImage, GoListUnordered, GoPlus } from "react-icons/go";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { TbEyeEdit } from "react-icons/tb";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

const CategoryPage = () => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [showOrder, setShowOrder] = useState(false);
  const [categories, setCategories] = useState([
    {
      name: "Category 1",
      description: "Category 1 Description",
      photo: "https://via.placeholder.com/1600x1600",
    },
    {
      name: "Category 2",
      description: "Category 2 Description",
      photo: "https://via.placeholder.com/1600x1600",
    },
    {
      name: "Category 3",
      description: "Category 3 Description",
      photo: "https://via.placeholder.com/1600x1600",
    },
    {
      name: "Category 4",
      description: "Category 4 Description",
      photo: "https://via.placeholder.com/1600x1600",
    },
    {
      name: "Category 5",
      description: "Category 5 Description",
      photo: "https://via.placeholder.com/1600x1600",
    },
  ]);
  const [newCategory, setNewCategory] = useState({
    name: "",
    photo: "",
  });

  const SortableList = SortableContainer(({ items }) => {
    return (
      <div className="space-y-2">
        {items.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </div>
    );
  });

  const SortableItem = SortableElement(({ value }) => {
    return (
      <div key={value.name} className="w-full">
        <Card className="w-full flex flex-row justify-between items-center p-2">
          <div className="flex items-center space-x-2">
            <img
              className="w-14 rounded-xl"
              src={value.photo}
              alt={value.name}
            />
            <div className="">
              <p className="font-medium">{value.name}</p>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>
          </div>
        </Card>
      </div>
    );
  });

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setCategories(
      (_items) => arrayMoveImmutable(_items, oldIndex, newIndex) // return list
    );
  };

  return (
    <div className="p-5">
      <PageHeaderSection>
        <PageTitle title="Kategoriler" />
        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
          <Button
            color="primary"
            size="small"
            onClick={() => setShowOrder(!showOrder)}
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
            onClick={() => onOpen()}
          >
            Yeni Kategori Oluştur
          </Button>
        </div>
      </PageHeaderSection>
      {showOrder ? (
        <SortableList
          style={{ width: "100%" }}
          items={categories}
          onSortEnd={onSortEnd}
        />
      ) : (
        <div className="space-y-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="w-full cursor-pointer"
              // categoryId index yerine id olarak değiştirilecek

              onClick={() =>
                router.push(`/admin/menu/kategoriler/detay?categoryId=${index}`)
              }
            >
              <Card className="w-full flex flex-row justify-between items-center p-2">
                <div className="flex items-center space-x-2">
                  <img
                    className="w-14 rounded-xl flex-shrink-0"
                    src={category.photo}
                    alt={category.name}
                  />
                  <div className="flex-grow">
                    <p className="font-medium">{category.name}</p>
                    <p className="text-sm text-gray-600">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="px-2 flex-shrink-0">
                  <div className="relative flex justify-end items-end space-x-3">
                    <Tooltip content="Düzenle">
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <TbEyeEdit size={24} />
                      </span>
                    </Tooltip>
                    <Tooltip color="danger" content="Sil">
                      <span className="text-lg text-danger cursor-pointer active:opacity-50">
                        <MdOutlineDeleteSweep size={24} />
                      </span>
                    </Tooltip>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      )}

      {/* Kategori ekle modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Yeni Kategori Ekle
              </ModalHeader>
              <ModalBody>
                <Input label="Kategori Adı" placeholder="Kategori adı girin" />
                {newCategory.photo && <img src={newCategory.photo} alt="" />}
                <label
                  htmlFor="file"
                  className="inline-flex text-sm items-center space-x-2 cursor-pointer bg-indigo-500 text-white py-2 px-4 rounded-xl transition-all duration-200 hover:bg-primary-600 border-none"
                >
                  {newCategory.photo ? (
                    <>
                      <GoImage size={20} />
                      <span>Kategori Fotoğrafını Düzenle</span>
                    </>
                  ) : (
                    <>
                      <GoImage size={20} />
                      <span>Kategori Fotoğrafı Yükle</span>
                    </>
                  )}
                </label>
                <input
                  type="file"
                  id="file"
                  className="hidden"
                  accept="image/*"
                  // onChange={handleChangePhoto}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Vazgeç
                </Button>
                <Button
                  color="success"
                  className="text-white"
                  onPress={onClose}
                >
                  Kategoriyi Ekle
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CategoryPage;
