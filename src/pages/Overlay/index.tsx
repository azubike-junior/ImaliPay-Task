import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function OverLay() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
      </div>
    </div>
  );
}
