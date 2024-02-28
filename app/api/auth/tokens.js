import jwt from "jsonwebtoken";
import connectToDatabase from "src/utils/dbConnection";

const secretKey = "petrov-8563-F"; // Geliştirmeniz gereken gizli anahtar

// Access token oluşturma
export async function generateAccessToken(user) {
  const payload = {
    id: user.id,
  };
  const accessToken = jwt.sign(payload, secretKey, { expiresIn: "30d" });
  const { db } = await connectToDatabase();
  const updateUserAccessToken = await db
    .collection("users")
    .updateOne({ id: user.id }, { $set: { accessToken } });

  return accessToken; // Örnek olarak 15 dakika geçerli bir token
}

// Refresh token oluşturma
export async function generateRefreshToken(user) {
  const { db } = await connectToDatabase();
  const refreshToken = Math.random().toString(36).slice(-8);
  const updateUserRefreshToken = await db
    .collection("users")
    .updateOne({ id: user.id }, { $set: { refreshToken } });
  return refreshToken;
}
