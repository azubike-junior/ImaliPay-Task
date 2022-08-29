import React from "react";
import filterIcon from "../../assets/filter-icon.svg"

export default function FilterBtn() {
  return (
    <div className="w-full flex justify-end cursor-pointer">
      <div className="flex font-inter bg-white border-1 h-12 px-4 p-2 pr-16 rounded-lg w-36">
        {" "}
        <img src={filterIcon} className="mr-2 h-6 mt-1" alt="filter" />{" "}
        <span className="text-xs pt-2">Filter</span>{" "}
      </div>
    </div>
  );
}
    