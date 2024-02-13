"use client";
import PageHeaderSection from "@/components/admin/PageHeaderSection";
import PageTitle from "@/components/admin/PageTitle";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Card,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Switch,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GoImage, GoPlus } from "react-icons/go";
import { TbEyeEdit } from "react-icons/tb";

const CategoryPage = () => {
  const router = useRouter();
  const categories = [
    {
      name: "Category 1",
      description: "Category 1 Description",
      photo: "https://via.placeholder.com/1600x1600",
      id: 1,
    },
    {
      name: "Category 2",
      description: "Category 2 Description",
      photo: "https://via.placeholder.com/1600x1600",
      id: 2,
    },
    {
      name: "Category 3",
      description: "Category 3 Description",
      photo: "https://via.placeholder.com/1600x1600",
      id: 3,
    },
    {
      name: "Category 4",
      description: "Category 4 Description",
      photo: "https://via.placeholder.com/1600x1600",
      id: 4,
    },
    {
      name: "Category 5",
      description: "Category 5 Description",
      photo: "https://via.placeholder.com/1600x1600",
      id: 5,
    },
  ];

  const [products, setProducts] = useState([
    {
      name: "Burger",
      description: "Product 1 Description",
      photo: "https://via.placeholder.com/1600x1600",
      price: "100,00",
      categoryId: 1,
      isFeaturedProduct: true,
    },
    {
      name: "Tavuk",
      description: "Product 2 Description",
      photo: "https://via.placeholder.com/1600x1600",
      price: "95,00",
      categoryId: 2,
      isFeaturedProduct: false,
    },
    {
      name: "Kahvaltı",
      description: "Product 3 Description",
      photo: "https://via.placeholder.com/1600x1600",
      price: "185,00",
      categoryId: 3,
      isFeaturedProduct: false,
    },
  ]);
  const [searchProducts, setSearchProducts] = useState(products);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalType, setModalType] = useState("newProduct");

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    photo: "https://via.placeholder.com/1000x1000",
    price: null,
    categoryId: null,
    isFeaturedProduct: false,
  });

  const handleItemClick = (product) => {
    setModalType("editProduct");
    setNewProduct(product);
    onOpen();
  };

  return (
    <div className="p-5">
      <PageHeaderSection>
        <PageTitle title="Ürün Listesi" />

        <Button
          color="success"
          className="text-white flex-shrink-0"
          size="small"
          startContent={<GoPlus size={20} />}
          onClick={() => {
            setNewProduct({
              name: "",
              description: "",
              photo: "https://via.placeholder.com/1000x1000",
              price: null,
              categoryId: null,
              isFeaturedProduct: false,
            });
            setModalType("newProduct");
            onOpen();
          }}
        >
          Yeni Ürün Oluştur
        </Button>
      </PageHeaderSection>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <Input
            onChange={(e) =>
              setSearchProducts(
                products.filter((product) =>
                  product.name.includes(e.target.value)
                )
              )
            }
            label="Ara"
            placeholder="Aramak istediğiniz ürün adını girin"
          />
        </div>
        {searchProducts.map((product, index) => (
          <div
            key={index}
            onClick={() => handleItemClick(product)}
            className="cursor-pointer col-span-2 lg:col-span-1"
          >
            <Card className="w-full flex flex-row justify-between items-center p-2">
              <div className="flex items-center space-x-2">
                <img
                  className="w-14 rounded-xl flex-shrink-0"
                  src={product.photo}
                  alt={product.name}
                />
                <div className="flex-grow">
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              </div>
              <div className="px-2 flex-shrink-0">
                <div className="relative flex justify-end items-center space-x-3">
                  <p className="text-lg font-medium text-primary">
                    {product.price} ₺
                  </p>
                  <Tooltip content="Düzenle">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                      <TbEyeEdit size={24} />
                    </span>
                  </Tooltip>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

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
                <Autocomplete
                  label="Ürün Kategorisi Seçin"
                  defaultSelectedKey={newProduct.categoryId?.toString()}
                  selectedKey={newProduct.categoryId?.toString()}
                  onSelectionChange={(e) => {
                    setNewProduct({ ...newProduct, categoryId: e });
                  }}
                >
                  {categories.map((category) => (
                    <AutocompleteItem key={category.id} value={category.id}>
                      {category.name}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
                <Switch
                  isSelected={newProduct.isFeaturedProduct}
                  onValueChange={(e) => {
                    setNewProduct({ ...newProduct, isFeaturedProduct: e });
                  }}
                  defaultSelected={false}
                >
                  Öne çıkan ürünlerde göster
                </Switch>
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

export default CategoryPage;
