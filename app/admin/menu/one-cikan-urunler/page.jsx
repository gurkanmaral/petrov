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
import { useContext, useEffect, useState } from "react";
import { GoCheck, GoListUnordered, GoTrash } from "react-icons/go";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

const CategoryPage = () => {
  const context = useContext(MainContext);
  const { currentMenu } = context;
  const [showOrder, setShowOrder] = useState(false);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);

  const getAllProducts = () => {
    axios.get(`/api/menu/product?menuKey=${currentMenu}`).then((res) => {
      setProducts(res.data.products);
      setSearchProducts(res.data.products);
    });
  };

  const getFeaturedProducts = () => {
    axios
      .get(`/api/menu/featured-products?menuKey=${currentMenu}`)
      .then((res) => {
        const { featuredProducts: fromResFeaturedProducts } = res.data;
        setFeaturedProducts(fromResFeaturedProducts);
        let _selectedProducts = [];
        fromResFeaturedProducts.forEach((product) => {
          _selectedProducts.push(product._id);
        });
        setSelectedProducts(_selectedProducts);
      });
  };

  const saveFeaturedProductsOrder = () => {
    axios
      .put(`/api/menu/featured-products`, {
        products: featuredProducts,
        menuKey: currentMenu,
      })
      .then((res) => {
        setShowOrder(false);
      });
  };

  const deleteProductFromFeaturedProducts = (productId) => {
    featuredProducts.splice(
      featuredProducts.findIndex((product) => product._id === productId),
      1
    );
    setFeaturedProducts([...featuredProducts]);
    setSelectedProducts(
      selectedProducts.filter((product) => product !== productId)
    );
  };

  useEffect(() => {
    getAllProducts();
    getFeaturedProducts();
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
    setFeaturedProducts(
      (_items) => arrayMoveImmutable(_items, oldIndex, newIndex) // return list
    );
  };

  return (
    <div className="p-5">
      <PageHeaderSection>
        <PageTitle title="Öne Çıkan Ürünler" />
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
            size="small"
            className="text-white"
            startContent={<GoCheck size={20} />}
            onClick={saveFeaturedProductsOrder}
          >
            Değişiklikleri Kaydet
          </Button>
        </div>
      </PageHeaderSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* All products */}
        <div className="col-span-1 order-2 md:order-1">
          <div className="text-lg font-bold mb-2">Tüm Ürünler</div>
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
              label="Öne Çıkmasını İstediğin Ürünleri Seç"
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
                setFeaturedProducts(_selectedProducts);
              }}
            >
              {searchProducts.map((product, index) => {
                const isFeatured = featuredProducts.find(
                  (featuredProduct) => featuredProduct._id === product._id
                );
                return (
                  <Checkbox
                    key={`featured-product-${index}`}
                    value={product._id}
                    checked={isFeatured}
                  >
                    {product.name}
                  </Checkbox>
                );
              })}
            </CheckboxGroup>
          </div>
        </div>

        <div className="col-span-1 order-1 md:order-2">
          <div className="text-lg font-bold mb-2">Seçili Ürünler</div>
          {showOrder ? (
            <SortableList
              style={{ width: "100%" }}
              items={featuredProducts}
              onSortEnd={onSortEnd}
            />
          ) : (
            <div className="space-y-2">
              {featuredProducts.map((product, index) => (
                <div key={index} className="w-full">
                  <Card className="w-full flex flex-row justify-between items-center p-2">
                    <div className="flex items-center space-x-2">
                      <img
                        className="w-14 h-14 object-cover rounded-xl flex-shrink-0"
                        src={product.img}
                        alt={product.name}
                      />
                      <div className="flex-grow">
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {product.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 flex-shrink-0">
                      <div className="text-base text-gray-600 font-medium">
                        {product.price} ₺
                      </div>
                      <button
                        onClick={() =>
                          deleteProductFromFeaturedProducts(product._id)
                        }
                        className="px-4 py-2 hover:bg-gray-100 rounded-lg"
                      >
                        <GoTrash color="red" size={20} strokeWidth={0.4} />
                      </button>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
