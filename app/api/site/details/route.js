// shop collection routes

import connectToDatabase from "@/utils/dbConnecton";
import { NextResponse } from "next/server";

// Detayları düzenlemek için kullanılır
export async function POST(request) {
  const res = await request.json();
  const { details } = res;
  const { db } = await connectToDatabase();

  const editedContent = await db
    .collection("details")
    .updateOne({ key: "details" }, { $set: { content: details } });

  return NextResponse.json({
    message: "Detaylar düzenlendi",
    editedContent,
  });
}

// Detayları getirmek için kullanılır
export async function GET() {
  const { db } = await connectToDatabase();
  const details = await db.collection("details").findOne({ key: "details" });

  return NextResponse.json({
    details,
  });
}
