// shop collection routes

import connectToDatabase from "@/utils/dbConnecton";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// Ürün eklemek için kullanılır
export async function POST(request) {
  const res = await request.json();
  const { menuKey, product } = res;
  const { db } = await connectToDatabase();

  const addedProduct = await db
    .collection("menu")
    .updateOne(
      { key: menuKey },
      { $push: { products: { ...product, _id: new ObjectId() } } }
    );

  return NextResponse.json({
    message: "Ürün eklendi",
    addedProduct,
  });
}

// menuKey'e göre ürünleri getirir
export async function GET(request) {
  const { db } = await connectToDatabase();
  const searchParams = request.nextUrl.searchParams;
  const menuKey = searchParams.get("menuKey");
  const menu = await db.collection("menu").findOne({ key: menuKey });

  if (!menu.products) {
    return new NextResponse("İçerik bulunamadı", {
      status: 400,
    });
  }
  return NextResponse.json({ products: menu.products });
}

// menuKey'e göre ürünü siler
export async function DELETE(request) {
  const res = await request.json();
  const { menuKey, productKey } = res;
  const { db } = await connectToDatabase();

  const result = await db
    .collection("menu")
    .updateOne(
      { key: menuKey },
      { $pull: { products: { _id: new ObjectId(productKey) } } }
    );

  // menuKey'e göre categories içerisindeki productKey'e sahip olan ürünü siler
  const { categories } = await db.collection("menu").findOne({ key: menuKey });

  categories.forEach(async (category) => {
    const removedCategoryResult = await db.collection("menu").updateOne(
      { key: menuKey, "categories.products._id": new ObjectId(productKey) },
      {
        $pull: { "categories.$.products": { _id: new ObjectId(productKey) } },
      }
    );
  });

  // menuKey'e göre featuredProducts içerisindeki productKey'e sahip olan ürünü siler
  const { featuredProducts } = await db
    .collection("menu")
    .findOne({ key: menuKey });
  const removedFeaturedProductResult = await db.collection("menu").updateOne(
    { key: menuKey, "featuredProducts._id": new ObjectId(productKey) },
    {
      $pull: { featuredProducts: { _id: new ObjectId(productKey) } },
    }
  );

  if (!result) {
    return new NextResponse("İçerik silinemedi", {
      status: 400,
    });
  }
  return NextResponse.json({
    message: "Ürün silindi",
    result,
  });
}

// menuKey'e göre ürünü günceller
export async function PATCH(request) {
  const res = await request.json();
  const { menuKey, product } = res;
  const { db } = await connectToDatabase();
  console.log("--menuKey", menuKey);
  console.log("--product", product);

  const result = await db
    .collection("menu")
    .updateOne(
      { key: menuKey, "products._id": new ObjectId(product._id) },
      { $set: { "products.$": { ...product, _id: new ObjectId(product._id) } } }
    );

  // menuKey'e göre categories içerisindeki productKey'e sahip olan ürünü günceller
  const { categories } = await db.collection("menu").findOne({ key: menuKey });
  categories.forEach(async (category) => {
    const updatedCategoryResult = await db.collection("menu").updateOne(
      { key: menuKey, "categories.products._id": new ObjectId(product._id) },
      {
        $set: {
          "categories.$.products.$[elem]": {
            ...product,
            _id: new ObjectId(product._id),
          },
        },
      },
      {
        arrayFilters: [{ "elem._id": new ObjectId(product._id) }],
      }
    );
  });

  // menuKey'e göre featuredProducts içerisindeki productKey'e sahip olan ürünü günceller
  const { featuredProducts } = await db
    .collection("menu")
    .findOne({ key: menuKey });
  const updatedFeaturedProductResult = await db.collection("menu").updateOne(
    { key: menuKey, "featuredProducts._id": new ObjectId(product._id) },
    {
      $set: {
        "featuredProducts.$": { ...product, _id: new ObjectId(product._id) },
      },
    }
  );

  if (!result) {
    return new NextResponse("İçerik güncellenemedi", {
      status: 400,
    });
  }
  return NextResponse.json({
    message: "Ürün güncellendi",
    result,
  });
}
