// shop collection routes

import connectToDatabase from "@/utils/dbConnecton";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// Shop ürünü düzenlemek için kullanılır
export async function PUT(request) {
  const res = await request.json();
  const { _id, name, img, description, price } = res;
  const { db } = await connectToDatabase();

  const updatedShop = await db
    .collection("shop")
    .updateOne(
      { _id: new ObjectId(_id) },
      { $set: { name, img, description, price } }
    );

  return NextResponse.json({
    message: "Ürün düzenlendi",
    updatedShop,
  });
}

// Shop ürünü eklemek için kullanılır
export async function POST(request) {
  const res = await request.json();
  const { name, img, description, price } = res;
  const { db } = await connectToDatabase();

  const result = await db.collection("shop").insertOne({
    name,
    img,
    description,
    price,
  });

  if (!result) {
    return new NextResponse("İçerik eklenemedi", {
      status: 400,
    });
  }
  return NextResponse.json({
    message: "Ürün eklendi",
    result,
  });
}

//Shop ürünü silmek için kullanılır
export async function DELETE(request) {
  const res = await request.json();
  const { _id } = res;
  const { db } = await connectToDatabase();

  const result = await db
    .collection("shop")
    .deleteOne({ _id: new ObjectId(_id) });

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

// Shop ürünlerini getirmek için kullanılır
export async function GET() {
  const { db } = await connectToDatabase();
  const shop = await db.collection("shop").find({}).toArray();

  return NextResponse.json(shop);
}
