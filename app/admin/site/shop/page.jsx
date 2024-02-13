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
  useDisclosure,
} from "@nextui-org/react";
import { arrayMoveImmutable } from "array-move";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GoCheck, GoImage, GoListUnordered, GoPlus } from "react-icons/go";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

const ProductListPage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalType, setModalType] = useState("newProduct");
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    photo: "",
  });
  const [showOrder, setShowOrder] = useState(false);
  const [products, setProducts] = useState([
    {
      name: "Ürün Adı",
      description: "Ürün Açıklaması",
      price: "99,91₺",
      photo: "https://via.placeholder.com/1600x1600",
    },
    {
      name: "Ürün Adı",
      description: "Ürün Açıklaması",
      price: "99,92₺",
      photo: "https://via.placeholder.com/1600x1600",
    },
    {
      name: "Ürün Adı",
      description: "Ürün Açıklaması",
      price: "99,93₺",
      photo: "https://via.placeholder.com/1600x1600",
    },
    {
      name: "Ürün Adı",
      description: "Ürün Açıklaması",
      price: "99,94₺",
      photo: "https://via.placeholder.com/1600x1600",
    },
    {
      name: "Ürün Adı",
      description: "Ürün Açıklaması",
      price: "99,95₺",
      photo: "https://via.placeholder.com/1600x1600",
    },
  ]);
  const router = useRouter();

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
              className="w-14 rounded-xl flex-shrink-0"
              src={value.photo}
              alt={value.name}
            />
            <div className="flex-grow">
              <p className="font-medium">{value.name}</p>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>
          </div>
          <div className="px-2 flex-shrink-0">
            <div className="relative flex justify-end items-center space-x-3">
              <p className="text-lg font-medium text-primary">
                {value.price} ₺
              </p>
            </div>
          </div>
        </Card>
      </div>
    );
  });

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setProducts(
      (_items) => arrayMoveImmutable(_items, oldIndex, newIndex) // return list
    );
  };

  const handleItemClick = (product) => {
    setModalType("editProduct");
    setNewProduct(product);
    onOpen();
  };

  return (
    <div className="p-5">
      <PageHeaderSection>
        <PageTitle title={"Shop"} />
        <div className="flex items-center space-x-2">
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
            onClick={() => {
              setNewProduct({
                name: "",
                description: "",
                price: "",
                photo: "",
              });
              setModalType("newProduct");
              onOpen();
            }}
            startContent={<GoPlus size={20} strokeWidth={1} />}
            color="success"
            className="text-white"
          >
            Yeni Ürün Ekle
          </Button>
        </div>
      </PageHeaderSection>

      {showOrder ? (
        <SortableList
          style={{ width: "100%" }}
          items={products}
          onSortEnd={onSortEnd}
        />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <div onClick={() => handleItemClick(product)}>
              <Card className="col-span-1">
                <img src={product.photo} alt="Product" />
                <div className="p-4">
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="font-bold mt-2">{product.price}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      )}
      {/* Ürün ekle modal */}
      <Modal
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Yeni Ürün Ekle
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Ürün Adı"
                  placeholder="Ürün adı girin"
                  value={newProduct.name}
                  onChange={(e) => {
                    setNewProduct({ ...newProduct, name: e.target.value });
                  }}
                />
                <Input
                  label="Açıklama"
                  placeholder="Ürün açıklaması"
                  value={newProduct.description}
                  onChange={(e) => {
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    });
                  }}
                />
                <Input
                  label="Fiyat"
                  placeholder="Ürün fiyatı"
                  value={newProduct.price}
                  onChange={(e) => {
                    setNewProduct({
                      ...newProduct,
                      price: e.target.value,
                    });
                  }}
                />
                <label
                  htmlFor="file"
                  className="inline-flex text-sm items-center space-x-2 cursor-pointer bg-indigo-500 text-white py-2 px-4 rounded-xl transition-all duration-200 hover:bg-primary-600 border-none"
                >
                  {newProduct.photo ? (
                    <>
                      <GoImage size={20} />
                      <span>Ürün Fotoğrafını Düzenle</span>
                    </>
                  ) : (
                    <>
                      <GoImage size={20} />
                      <span>Ürün Fotoğrafı Yükle</span>
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
                {newProduct.photo && <img src={newProduct.photo} alt="" />}
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
                  {modalType === "newProduct" ? "Ekle" : "Güncelle"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProductListPage;