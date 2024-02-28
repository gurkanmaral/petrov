import connectToDatabase from "@/utils/dbConnecton";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const secretKey = "petrov-8563-F"; // Geliştirmeniz gereken gizli anahtar

export async function POST(request) {
  const res = await request.json();
  const { username, password } = res;
  const { db } = await connectToDatabase();
  const user = await db.collection("users").findOne({ username, password });
  if (!user) {
    return new NextResponse("Kullanıcı adı veya şifre hatalı", {
      status: 400,
    });
  }

  const accessToken = jwt.sign(
    { username, password, date: new Date() },
    secretKey,
    {
      expiresIn: "30d",
    }
  );

  const refreshToken = Math.random().toString(36).slice(-8);

  // Tokenları oluştur ve döndür

  if (user) {
    const updatedUser = await db
      .collection("users")
      .updateOne(
        { username },
        { $set: { accessToken, refreshToken } },
        { upsert: true, multi: false }
      );
  }

  return NextResponse.json({
    message: "Giriş yapıldı",
    accessToken,
    refreshToken,
    username
  });
}
