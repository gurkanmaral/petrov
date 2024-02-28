import axios from "axios";
import jwt from "jsonwebtoken";

export const login = async (username, password) => {
  try {
    const response = await axios.post("/api/auth/login", {
      username,
      password,
    });
    const { accessToken } = response.data;

    // Save data to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("token", accessToken);
    }
    return { accessToken };
  } catch (error) {
    throw error;
  }
};

export const checkUserInLocalStorage = new Promise(async (resolve, reject) => {
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  if (token) {
    const decoded = jwt.decode(token);
    resolve(decoded);
  } else {
    reject(false);
  }
});
