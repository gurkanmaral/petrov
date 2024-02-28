import connectToDatabase from "@/utils/dbConnecton";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// Sliderı düzenlemek için kullanılır
export async function PUT(request) {
  const res = await request.json();
  const { _id, title, img } = res;
  const { db } = await connectToDatabase();

  const updatedSlider = await db
    .collection("sliders")
    .updateOne({ _id: new ObjectId(_id) }, { $set: { title, img } });

  return NextResponse.json({
    message: "Sliderlar düzenlendi",
    updatedSlider,
  });
}

// Sliderı eklemek için kullanılır
export async function POST(request) {
  const res = await request.json();
  const { title, img } = res;
  const { db } = await connectToDatabase();

  const result = await db.collection("sliders").insertOne({
    title,
    img,
  });

  if (!result) {
    return new NextResponse("İçerik eklenemedi", {
      status: 400,
    });
  }
  return NextResponse.json({
    message: "Slider eklendi",
    result,
  });
}

// Sliderı silmek için kullanılır
export async function DELETE(request) {
  const res = await request.json();
  const { _id } = res;
  const { db } = await connectToDatabase();

  const result = await db
    .collection("sliders")
    .deleteOne({ _id: new ObjectId(_id) });

  if (!result) {
    return new NextResponse("İçerik silinemedi", {
      status: 400,
    });
  }
  return NextResponse.json({
    message: "Slider silindi",
    result,
  });
}

// ID'ye göre slideri getirir
export async function GET(request) {
  const { db } = await connectToDatabase();
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");
  const slider = await db
    .collection("sliders")
    .findOne({ _id: new ObjectId(id) });

  if (!slider) {
    return new NextResponse("İçerik bulunamadı", {
      status: 400,
    });
  }
  return NextResponse.json(slider);
}
