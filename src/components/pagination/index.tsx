import React from "react";

export default function Pagination() {
  return (
    <div className="flex space-x-2 my-4 justify-center ">
      <div className="bg-kesAsh px-3  py-1 rounded-md  text-black">1</div>
      <div className="bg-transparent px-3 py-1 rounded-md  text-black">2</div>
      <div className="bg-transparent px-3 py-1 rounded-md  text-black">3</div>
      <div className="bg-transparent px-3 py-1 rounded-md  text-black">...</div>
      <div className="bg-transparent px-3 py-1 rounded-md  text-black">8</div>
      <div className="bg-transparent px-3 py-1 rounded-md  text-black">9</div>
      <div className="bg-transparent px-3 py-1 rounded-md  text-black">10</div>
    </div>
  );
}
