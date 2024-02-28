import connectToDatabase from "@/utils/dbConnecton";
import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();
  // must be contacts: {addresses: [], phones: [], emails: []}
  const { contacts } = res;
  const { db } = await connectToDatabase();
  const editedContent = await db
    .collection("contact-infos")
    .updateOne({ key: "contact" }, { $set: { contacts } });

  if (!editedContent) {
    return new NextResponse("Content bulunamadı", {
      status: 400,
    });
  }

  return NextResponse.json({
    message: "İletişim bilgileri düzenlendi",
    editedContent,
  });
}

export async function GET(request) {
  const { db } = await connectToDatabase();
  const contactInfos = await db.collection("contact-infos").find().toArray();

  if (!contactInfos) {
    return new NextResponse("İçerik bulunamadı", {
      status: 400,
    });
  }
  return NextResponse.json(contactInfos[0]);
}
