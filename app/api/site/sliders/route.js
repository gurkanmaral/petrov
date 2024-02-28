import connectToDatabase from "@/utils/dbConnecton";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// Slider sıralaması için kullanılır
export async function POST(request) {
  const res = await request.json();
  const { sliders } = res;
  const { db } = await connectToDatabase();
  const result = await db.collection("sliders").deleteMany({});

  sliders.map(async (item) => {
    item._id = new ObjectId(item._id);
  });
  const insertedItems = await db.collection("sliders").insertMany(sliders);

  return NextResponse.json({
    message: "Sliderlar düzenlendi",
    insertedItems,
  });
}

// Tüm sliderları getirir
export async function GET(request) {
  const { db } = await connectToDatabase();
  const sliders = await db.collection("sliders").find().toArray();

  if (!sliders) {
    return new NextResponse("İçerik bulunamadı", {
      status: 400,
    });
  }
  return NextResponse.json(sliders);
}
