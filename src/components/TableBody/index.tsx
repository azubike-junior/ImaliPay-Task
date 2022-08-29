import React from "react";
import { Link } from "react-router-dom";
import mark from "../../assets/mark-icon.svg";
import { IoMdCheckmark } from "react-icons/io";


interface BodyProp {
  icon?: string;
  firstName: string;
  firstNum: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
  className?: string;
  customer?: boolean
}

export default function TableBody({
  icon,
  second,
  firstName,
  firstNum,
  third,
  fifth,
  fourth,
  className,
    customer
}: BodyProp) {
  return (
    <>
      {!customer ? (
        <Link to="/fulfillmentDetails">
          <div className="grid grid-cols-5 bg-white px-5 border-b-1 border-darkAsh py-6 font-inter">
            <div className="flex">
              <div className="w-4 h-4 rounded-md border-1 mr-4 mt-2 border-darkAsh"></div>{" "}
              <div className="flex items-center justify-center ">
                <img src={icon} className="pr-2 pb-2" alt="img" />
                <div className=" text-left">
                  <p className="text-blackRussian text-sm">{firstName}</p>
                  <p className="text-shadeBlue text-xs">{firstNum}</p>
                </div>
              </div>
            </div>
            <div className="text-blackRussian text-sm font-bold pt-2">
              {second}
            </div>
            <div className="text-blackRussian text-sm pt-2">{third}</div>
            <div className="text-blackRussian text-sm pt-2">{fourth}</div>
            <div className="text-blackRussian pt-2">
              <span className={className}>{fifth}</span>
            </div>
          </div>
        </Link>
      ) : (
        <div className="grid grid-cols-5 bg-white px-5 border-b-1 border-darkAsh py-6 font-inter">
          <div className="flex mt-2">
            <div className="w-4 h-4 text-sm font-bold rounded-md border-1 mr-4 mt-1 border-darkAsh"></div>{" "}
            <span className="font-bold">{second}</span>
          </div>
          <div className="text-blackRussian text-sm  pt-2">
            <div className="flex items-center justify-center ">
              <img src={icon} className="pr-2 pb-2" alt="img" />
              <div className=" text-left">
                <p className="text-blackRussian text-sm">{firstName}</p>
                <p className="text-shadeBlue text-xs">{firstNum}</p>
              </div>
            </div>
          </div>
          <div className="text-shadeBlue text-sm pt-2">{third}</div>

          {/* todo (add verified icon) */}
          <div className="w-full flex justify-center items-center">
            <div className="flex justify-center items-center bg-green-100 text-green-600 px-2 py-1 rounded-xl">
              <IoMdCheckmark className="w-3" />
              <span className="pl-1 text-xs font-bold">{fourth}</span>
            </div>
          </div>
          <Link to="/customerProfile">
            <div className="text-shadeBlue font-bold text-sm pt-3 cursor-pointer">
              {fifth}
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
