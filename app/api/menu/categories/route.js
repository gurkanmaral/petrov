// featured products routes
import connectToDatabase from "@/utils/dbConnecton";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// menu collectionunun içinde ilgili menuKey içerisine category ekler
export async function POST(request) {
  const res = await request.json();
  const { menuKey, category } = res;
  const { db } = await connectToDatabase();

  await db.collection("menu").updateOne(
    { key: menuKey },
    {
      $push: {
        categories: { ...category, _id: new ObjectId(), products: [] },
      },
    }
  );
  return NextResponse.json({ success: "Success" });
}

// menu collectionunun içinde ilgili menuKey içerisindeki categoryi günceller
export async function PUT(request) {
  const res = await request.json();
  const { menuKey, categories, category } = res;
  const { db } = await connectToDatabase();

  let result;
  if (category) {
    result = await db.collection("menu").updateOne(
      { key: menuKey, "categories._id": new ObjectId(category._id) },
      {
        $set: {
          "categories.$": {
            ...category,
            _id: new ObjectId(category._id),
            products: category.products.map((product) => {
              return { ...product, _id: new ObjectId(product._id) };
            }),
          },
        },
      }
    );
  } else {
    result = await db.collection("menu").updateOne(
      {
        key: menuKey,
      },
      {
        $set: {
          categories: categories.map((category) => {
            return {
              ...category,
              _id: new ObjectId(category._id),
              products: category.products.map((product) => {
                return { ...product, _id: new ObjectId(product._id) };
              }),
            };
          }),
        },
      }
    );
  }

  console.log("--result", result);
  return NextResponse.json({ success: "Success", result });
}

// menu collectionunun içinde ilgili menuKey içerisindeki categoryi siler
export async function DELETE(request) {
  const res = await request.json();
  const { menuKey, categoryId } = res;
  const { db } = await connectToDatabase();

  await db.collection("menu").updateOne(
    { key: menuKey },
    {
      $pull: {
        categories: { _id: new ObjectId(categoryId) },
      },
    }
  );
  return NextResponse.json({ success: "Kategori silindi" });
}

// menu collectionunun içinde ilgili menuKey içerisindeki categoryleri getirir
export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const menuKey = searchParams.get("menuKey");
  const categoryKey = searchParams.get("categoryKey");
  const { db } = await connectToDatabase();
  const menu = await db.collection("menu").findOne({ key: menuKey });

  let category;
  if (categoryKey) {
    category = menu.categories.find(
      (category) => category._id.toString() === categoryKey
    );
  }
  return NextResponse.json(
    categoryKey ? { category } : { categories: menu.categories }
  );
}
