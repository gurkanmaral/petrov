"use client";
import { MainContext } from "@/app/context";
import PageHeaderSection from "@/components/admin/PageHeaderSection";
import PageTitle from "@/components/admin/PageTitle";
import {
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Input,
} from "@nextui-org/react";
import { arrayMoveImmutable } from "array-move";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { GoCheck, GoImage, GoListUnordered } from "react-icons/go";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

const CategoryDetailPage = ({ match }) => {
  const context = useContext(MainContext);
  const { currentMenu } = context;
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const [showOrder, setShowOrder] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);

  const [category, setCategory] = useState({
    name: "",
    description: "",
    img: "",
    products,
  });

  const getAllProducts = () => {
    axios.get(`/api/menu/product?menuKey=${currentMenu}`).then((res) => {
      setProducts(res.data.products);
      setSearchProducts(res.data.products);
    });
  };

  const getCategory = async () => {
    axios
      .get(
        `/api/menu/categories?menuKey=${currentMenu}&categoryKey=${categoryId}`
      )
      .then((res) => {
        const { category } = res.data;
        setCategory(category);
        let _selectedProducts = [];
        category.products.forEach((product) => {
          _selectedProducts.push(product._id);
        });
        setSelectedProducts(_selectedProducts);
      });
  };

  const saveCategory = () => {
    axios.put(`/api/menu/categories`, {
      category: category,
      menuKey: currentMenu,
    });
  };

  useEffect(() => {
    getCategory();
    getAllProducts();
  }, []);

  const SortableList = SortableContainer(({ items }) => {
    return (
      <div className="space-y-2">
        {items.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </div>
    );
  });

  const handleChangePhoto = (file) => {
    const url = "https://cdn.petrov.com.tr"; // Uygulamanın port numarasını uygun şekilde değiştirin

    const formData = new FormData();
    formData.append("image", file.target.files[0]);

    axios
      .post(url, formData)
      .then((response) => {
        setCategory({ ...category, img: response.data.url });
      })
      .catch((error) => {
        console.error("İstek başarısız!");
        console.error(error.response.data);
      });
  };

  const SortableItem = SortableElement(({ value }) => {
    return (
      <div key={value.name} className="w-full">
        <Card className="w-full flex flex-row justify-between items-center p-2">
          <div className="flex items-center space-x-2">
            <img
              className="w-14 rounded-xl flex-shrink-0"
              src={value.img}
              alt={value.name}
            />
            <div className="flex-grow">
              <p className="font-medium">{value.name}</p>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>
          </div>
          <div className="text-base text-gray-600 font-medium">
            {value.price} ₺
          </div>
        </Card>
      </div>
    );
  });

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newItems = arrayMoveImmutable(category.products, oldIndex, newIndex);
    setCategory({ ...category, products: newItems });
  };

  return (
    <div className="p-5">
      <PageHeaderSection>
        <PageTitle title="Kategori Detayları" />
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
            color="success"
            className="text-white"
            size="small"
            startContent={<GoCheck size={20} />}
            onClick={saveCategory}
          >
            Değişiklikleri Kaydet
          </Button>
        </div>
      </PageHeaderSection>

      <div className="grid grid-cols-4 gap-8">
        {/* Kategori adı ve fotoğrafı */}
        <div className="col-span-4 md:col-span-1 space-y-4">
          <div className="text-sm font-semibold">İsim ve Fotoğraf</div>
          <Input
            label="Kategori Adı"
            value={category.name}
            placeholder="Kategori adı giriniz"
            onChange={(e) => setCategory({ ...category, name: e.target.value })}
          />
          <Input
            label="Kategori Açıklaması"
            value={category.description}
            placeholder="Kategori açıklaması giriniz"
            onChange={(e) =>
              setCategory({ ...category, description: e.target.value })
            }
          />
          {category.img && <img src={category.img} alt="" />}
          <label
            htmlFor="file"
            className="flex text-sm items-center space-x-2 cursor-pointer bg-indigo-500 text-white py-2 px-4 rounded-xl transition-all duration-200 hover:bg-primary-600 border-none"
          >
            {category.img ? (
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
            onChange={handleChangePhoto}
          />
        </div>
        <div className="col-span-4 md:col-span-3">
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-3 md:col-span-2">
              <div className="text-sm font-semibold mb-4">
                Kategori Ürünleri & Sıralama
              </div>
              {showOrder ? (
                <SortableList
                  style={{ width: "100%" }}
                  items={category.products}
                  onSortEnd={onSortEnd}
                />
              ) : (
                <div className="space-y-2">
                  {category.products.map((product) => {
                    return (
                      <Card className="w-full flex flex-row justify-between items-center p-2">
                        <div className="flex items-center space-x-2">
                          <img
                            className="w-14 rounded-xl flex-shrink-0"
                            src={product.img}
                            alt={product.name}
                          />
                          <div className="flex-grow">
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-gray-600">
                              {product.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-base text-gray-600 font-medium">
                          {product.price} ₺
                        </div>
                      </Card>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="col-span-3 md:col-span-1">
              <div className="text-sm font-semibold mb-4">Tüm Ürünler</div>
              <Input
                className="mb-4"
                onChange={(e) =>
                  setSearchProducts(
                    products.filter((product) =>
                      product.name
                        .toLocaleUpperCase()
                        .includes(e.target.value.toLocaleUpperCase())
                    )
                  )
                }
                label="Ara"
                placeholder="Aramak istediğiniz ürün adını girin"
              />
              <div className="space-y-2">
                <CheckboxGroup
                  label="Kategoriye Ürünlerini Seç"
                  color="primary"
                  value={selectedProducts}
                  onValueChange={(value) => {
                    setSelectedProducts(value);
                    let _selectedProducts = [];
                    value.forEach((productKey) => {
                      _selectedProducts.push(
                        products.find((product) => product._id === productKey)
                      );
                    });
                    setCategory((prev) => ({
                      ...prev,
                      products: _selectedProducts,
                    }));
                  }}
                >
                  {searchProducts.map((product, index) => {
                    const isProductFromThisCategory = category.products.find(
                      (categoryProduct) => {
                        console.log(
                          "--categoryproductid",
                          categoryProduct._id,
                          product._id
                        );
                        return categoryProduct._id == product._id;
                      }
                    );
                    return (
                      <Checkbox
                        key={`featured-product-${index}`}
                        value={product._id}
                        checked={isProductFromThisCategory}
                      >
                        {product.name}
                      </Checkbox>
                    );
                  })}
                </CheckboxGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailPage;
