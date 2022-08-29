import React from "react";

interface HeadProp {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
}

export default function TableHead({fifth, first, second, third, fourth}: HeadProp) {
  return (
    <div className="grid grid-cols-5 bg-lighterAsh rounded-sm py-4 px-5 font-bold font-inter text-xs text-lightAsh">
      <div className="flex">
        <div className="w-4 h-4 rounded-md border-1 mr-4 border-darkAsh"></div>{" "}
        <span>{first}</span>
      </div>
      <div className="cell">{second}</div>
      <div className="cell">{third}</div>
      <div className="cell">{fourth}</div>
      <div className="cell">{fifth}</div>
    </div>
  );
}
