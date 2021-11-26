import React from "react";
import { Header, Sidebar } from "../index";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="w-full flex">
        {/* sidebar */}
        <Sidebar />
        {/* page content */}
        <div className="w-full h-[100vh] overflow-y-auto px-20 pt-20">
          <Header />
          <div className="mt-20">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
