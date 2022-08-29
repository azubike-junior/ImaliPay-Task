import React from "react";

interface BoxProp {
  info: string;
  total: string;
  icon2?: string;
  isIcon2?: boolean;
  percent?: string;
  className?: string;
}

export default function CustomerBox({
  info,
  total,
  icon2,
  percent,
  className,
}: BoxProp) {
  return (
    <div className="border-1 rounded-lg bg-white w-18 px-5 py-4 shadow-md">
      <p className=" text-base tracking-wide text-darkerBlue font-inter font-bold pb-4  ">
        {info}
      </p>
      <div className="flex justify-between pb-6">
        <p className="text-3xl tracking-wide font-bold font-inter pt-3">
          {total}
        </p>
      </div>

      <div className="flex">
        <img src={icon2} alt="icon" className="pr-1.5 h-3 mt-0.5" />
        <span className={className}>
          {percent} <span className=" text-shadeBlue pl-1">vs last month</span>
        </span>
      </div>
    </div>
  );
}
