import connectToDatabase from "@/utils/dbConnecton";
import { NextResponse } from "next/server";

// İletişim formu eklemek için kullanılır
export async function POST(request) {
  const res = await request.json();
  const { name, birthdate, phone, job, city, location } = res;
  const { db } = await connectToDatabase();

  const result = await db.collection("franchising-forms").insertOne({
    name,
    birthdate,
    phone,
    job,
    city,
    location,
  });

  if (!result) {
    return new NextResponse("Form gönderilemedi", {
      status: 400,
    });
  }
  return NextResponse.json({
    message: "İletişim formu gönderildi",
    result,
  });
}

// İletişim formlarını getirmek için kullanılır
export async function GET() {
  const { db } = await connectToDatabase();
  const result = await db.collection("franchising-forms").find({}).toArray();
  return NextResponse.json({
    result,
  });
}
