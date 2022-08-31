import React from "react";

interface BodyProp {
  icon?: string;
  firstName: string;
  firstNum: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
  className?: string;
  customer?: boolean;
}

export default function DefaulterBody({
  icon,
  second,
  firstName,
  firstNum,
  third,
  fifth,
  fourth,
  className,
  customer,
}: BodyProp) {
  return (
    <div className="grid grid-cols-5 bg-white px-5 border-b-1 border-darkAsh py-6 font-inter">
      <div className="flex mt-2">
        <div className="w-4 h-4 text-sm font-bold rounded-md border-1 mr-4 mt-1 border-darkAsh"></div>{" "}
        <div className="flex items-center justify-center ">
          <img src={icon} className="pr-2 pb-2" alt="img" />
          <div className=" text-left">
            <p className="text-blackRussian text-sm">{firstName}</p>
            <p className="text-shadeBlue text-xs">{firstNum}</p>
          </div>
        </div>
      </div>
      <div className="text-blackRussian text-sm  pt-2">{second}</div>
      <div className="text-blackRussian text-sm pt-2">{third}</div>

      {/* todo (add verified icon) */}
      <div className="text-blackRussian pt-2">
        <span className="text-success font-bold bg-green-100 px-3 py-2 rounded-lg text-xs">
          {/* <img src={mark} alt="mark-icon" className="mr-2 h-3" />{" "} */}
          {fourth}
        </span>
      </div>
      <div className="text-shadeBlue font-bold text-sm pt-3 cursor-pointer">
        {fifth}
      </div>
    </div>
  );
}
