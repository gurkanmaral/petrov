"use client";
import PageHeaderSection from "@/components/admin/PageHeaderSection";
import PageTitle from "@/components/admin/PageTitle";
import { Button, Card, Input } from "@nextui-org/react";
import { arrayMoveImmutable } from "array-move";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { GoCheck, GoImage, GoListUnordered } from "react-icons/go";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

const CategoryDetailPage = ({ match }) => {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const [showOrder, setShowOrder] = useState(false);

  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Product 1 Description",
      image: "https://via.placeholder.com/1600x1600",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      description: "Product 2 Description",
      image: "https://via.placeholder.com/1600x1600",
      price: 200,
    },
    {
      id: 1,
      name: "Product 3",
      description: "Product 1 Description",
      image: "https://via.placeholder.com/1600x1600",
      price: 100,
    },
    {
      id: 2,
      name: "Product 4",
      description: "Product 2 Description",
      image: "https://via.placeholder.com/1600x1600",
      price: 200,
    },
  ];

  const [category, setCategory] = useState({
    name: "Category 1",
    description: "Category 1 Description",
    photo: "https://via.placeholder.com/1600x1600",
    products,
  });

  useEffect(() => {
    // fetch category and products
    const fetchCategory = async () => {
      try {
        const response = await fetch(`/api/categories/${match.params.id}`);
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error(error);
      }
    };

    // fetchCategory();
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
              src={value.image}
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
            onClick={() => null}
          >
            Değişiklikleri Kaydet
          </Button>
        </div>
      </PageHeaderSection>

      <div className="grid grid-cols-4 gap-8">
        {/* Kategori adı ve fotoğrafı */}
        <div className="col-span-1 space-y-4">
          <div className="text-sm font-semibold">İsim ve Fotoğraf</div>
          <Input
            label="Kategori Adı"
            value={category.name}
            placeholder="Kategori adı giriniz"
            onChange={(e) => setCategory({ ...category, name: e.target.value })}
          />
          {category.photo && <img src={category.photo} alt="" />}
          <label
            htmlFor="file"
            className="flex text-sm items-center space-x-2 cursor-pointer bg-indigo-500 text-white py-2 px-4 rounded-xl transition-all duration-200 hover:bg-primary-600 border-none"
          >
            {category.photo ? (
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
        </div>
        <div className="col-span-3">
          <div className="text-sm font-semibold mb-4">
            Ürün Listesi & Sıralama
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
                        src={product.image}
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
      </div>
    </div>
  );
};

export default CategoryDetailPage;
