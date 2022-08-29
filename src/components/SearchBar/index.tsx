import React from "react";
import searchIcon from "../../assets/search-icon.svg";

export default function SearchBar() {
  return (
    <div className="font-inter w-400 bg-white border-2 h-12 rounded-lg flex items-center px-4">
      <img src={searchIcon} className="h-6 pr-3 " alt="search" />
      <div>
        <input
          type="text"
          className=" outline-none bg-white w-96 pr-2"
          placeholder="Search for customer’s name"
        />
      </div>
    </div>
  );
}


