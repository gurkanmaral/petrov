// featured products routes
import connectToDatabase from "@/utils/dbConnecton";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// menuKey'e göre önerilen ürünleri getirir
export async function GET(request) {
  const { db } = await connectToDatabase();
  const searchParams = request.nextUrl.searchParams;
  const menuKey = searchParams.get("menuKey");
  const menu = await db.collection("menu").findOne({ key: menuKey });

  if (!menu.featuredProducts) {
    return new NextResponse("İçerik bulunamadı", {
      status: 400,
    });
  }
  return NextResponse.json({ featuredProducts: menu.featuredProducts });
}

// menuKey'e göre önerilen ürünlerin sıralamasını günceller
export async function PUT(request) {
  const res = await request.json();
  const { menuKey, products } = res;
  const { db } = await connectToDatabase();

  const updatedProducts = await db.collection("menu").updateOne(
    { key: menuKey },
    {
      $set: {
        // productsdaki tüm ürünlerin _id'lerini ObjectId'ye çevirir
        featuredProducts: products.map((product) => {
          return { ...product, _id: new ObjectId(product._id) };
        }),
      },
    }
  );

  return NextResponse.json({
    message: "Ürünler güncellendi",
    updatedProducts,
  });
}
