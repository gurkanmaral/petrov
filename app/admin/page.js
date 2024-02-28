"use client";
import isAuth from "@/components/isAuth";

const page = ({ children }) => {
  return children;
};

export default isAuth(page);
