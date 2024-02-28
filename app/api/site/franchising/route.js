import connectToDatabase from "@/utils/dbConnecton";
import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();
  const { content } = res;
  const { db } = await connectToDatabase();
  const editedContent = await db
    .collection("franchising")
    .updateOne({ key: "franchising" }, { $set: { content } });

  if (!editedContent) {
    return new NextResponse("Content bulunamadı", {
      status: 400,
    });
  }

  return NextResponse.json({
    message: "Franchising düzenlendi",
    editedContent,
  });
}

export async function GET(request) {
  const { db } = await connectToDatabase();
  const aboutUs = await db
    .collection("franchising")
    .findOne({ key: "franchising" });
  if (!aboutUs) {
    return new NextResponse("Content bulunamadı", {
      status: 400,
    });
  }
  return NextResponse.json(aboutUs);
}
