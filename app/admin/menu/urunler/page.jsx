"use client";
import { MainContext } from "@/app/context";
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
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GoImage, GoPlus } from "react-icons/go";
import { TbEyeEdit } from "react-icons/tb";

const CategoryPage = () => {
  const context = useContext(MainContext);
  const { currentMenu } = context;
  const getProducts = async () => {
    axios.get(`/api/menu/product?menuKey=${currentMenu}`).then((res) => {
      setProducts(res.data.products);
      setSearchProducts(res.data.products);
      console.log(res.data.products);
    });
  };
  useEffect(() => {
    getProducts();
  }, []);


  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState(products);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalType, setModalType] = useState("newProduct");

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    img: "",
    price: null,
    categoryId: null,
    isFeaturedProduct: false,
  });

  const handleItemClick = (product) => {
    setModalType("editProduct");
    setNewProduct(product);
    onOpen();
  };

  const editProduct = () => {
    axios
      .patch(`/api/menu/product`, { menuKey: currentMenu, product: newProduct })
      .then((res) => {
        console.log(res);
        getProducts();
      });
  };

  const postNewProduct = () => {
    axios
      .post(`/api/menu/product?menuKey=${currentMenu}`, {
        product: newProduct,
        menuKey: currentMenu,
      })
      .then((res) => {
        getProducts();
      });
  };

  const deleteProduct = () => {
    console.log("deleteProduct", newProduct._id);
    console.log("currentMenu", currentMenu);
    axios
      .delete(`/api/menu/product`, {
        data: {
          menuKey: currentMenu,
          productKey: newProduct._id,
        },
      })
      .then((res) => {
        console.log(res);
        getProducts();
      });
  };

  const handleChangePhoto = (file) => {
    const url = "https://cdn.petrov.com.tr"; // Uygulamanın port numarasını uygun şekilde değiştirin

    const formData = new FormData();
    formData.append("image", file.target.files[0]);

    axios
      .post(url, formData)
      .then((response) => {
        setNewProduct({ ...newProduct, img: response.data.url });
      })
      .catch((error) => {
        console.error("İstek başarısız!");
        console.error(error.response.data);
      });
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
              img: "",
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
                  className="w-14 h-14 object-cover rounded-xl flex-shrink-0"
                  src={product.img}
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
        // scrollBehavior="inside"
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
                  {newProduct.img ? (
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
                  onChange={handleChangePhoto}
                />
                {newProduct.img && <img src={newProduct.img} alt="" />}
              </ModalBody>
              <ModalFooter className="flex flex-row items-center justify-between">
                <Button
                  color="danger"
                  onPress={() => {
                    deleteProduct(newProduct._id);
                    onClose();
                  }}
                >
                  Ürünü Sil
                </Button>
                <div className="flex items-center space-x-2">
                  <Button color="danger" variant="light" onPress={onClose}>
                    Vazgeç
                  </Button>
                  <Button
                    color="success"
                    className="text-white"
                    onPress={() => {
                      if (modalType === "newProduct") {
                        postNewProduct();
                      } else {
                        editProduct();
                      }
                      onClose();
                    }}
                  >
                    {modalType === "newProduct" ? "Ekle" : "Güncelle"}
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CategoryPage;
