import React from "react";

export default function PageHeaderSection({ children }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0 mb-5">{children}</div>
  );
}
