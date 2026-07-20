import MenusForMobile from "@/components/Dashboard/MenusForMobile";
import Sidebar from "@/components/Dashboard/Sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 md:flex">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="block md:hidden">
        <MenusForMobile />
      </div>


      {/* Main Content */}
      <main className="md:flex-1 overflow-y-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
};

export default layout;