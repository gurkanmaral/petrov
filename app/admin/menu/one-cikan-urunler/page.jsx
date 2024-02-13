"use client";
import PageHeaderSection from "@/components/admin/PageHeaderSection";
import PageTitle from "@/components/admin/PageTitle";
import { Button, Card } from "@nextui-org/react";
import { arrayMoveImmutable } from "array-move";
import { useState } from "react";
import { GoCheck, GoListUnordered } from "react-icons/go";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

const CategoryPage = () => {
  const [showOrder, setShowOrder] = useState(false);
  const [products, setProducts] = useState([
    {
      name: "Burger",
      description: "Product 1 Description",
      photo: "https://via.placeholder.com/1600x1600",
      price: 100,
      categoryId: 1,
      isFeaturedProduct: true,
    },
    {
      name: "Tavuk",
      description: "Product 2 Description",
      photo: "https://via.placeholder.com/1600x1600",
      price: 100,
      categoryId: 1,
      isFeaturedProduct: false,
    },
    {
      name: "Kahvaltı",
      description: "Product 3 Description",
      photo: "https://via.placeholder.com/1600x1600",
      price: 100,
      categoryId: 1,
      isFeaturedProduct: false,
    },
  ]);

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
          <div className="text-base text-gray-600 font-medium">
            {value.price} ₺
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

  return (
    <div className="p-5">
      <PageHeaderSection>
        <PageTitle title="Kategoriler" />
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
        </div>
      </PageHeaderSection>
      {showOrder ? (
        <SortableList
          style={{ width: "100%" }}
          items={products}
          onSortEnd={onSortEnd}
        />
      ) : (
        <div className="space-y-2">
          {products.map((product, index) => (
            <div key={index} className="w-full">
              <Card className="w-full flex flex-row justify-between items-center p-2">
                <div className="flex items-center space-x-2">
                  <img
                    className="w-14 rounded-xl flex-shrink-0"
                    src={product.photo}
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
