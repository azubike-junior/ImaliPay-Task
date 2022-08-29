import React from "react";
import dropdownIcon from "../../assets/dropDown.svg";
import { IoIosArrowDown } from "react-icons/io";

interface BoxProp {
  icon: string;
  info: string;
  total: string;
  dropdown?: boolean;
  icon2?: string;
  isIcon2?: boolean;
  percent?: string;
  className?: string;
  kes?: boolean;
  percentageBox?: boolean;
}

export default function OverviewBox({
  icon,
  info,
  total,
  dropdown,
  icon2,
  isIcon2,
  percent,
  className,
  kes,
  percentageBox,
}: BoxProp) {
  return (
    <div className="border-1 rounded-lg bg-white w-300 px-5 py-4 shadow-md">
      {!percentageBox ? (
        <div>
          <div className="flex justify-between">
            <img src={icon} className="h-12 w-12 my-3 mb-5" alt="icon" />
            {dropdown && (
              <img
                src={dropdownIcon}
                className="h-5 cursor-pointer my-3 mb-5 "
                alt="icon"
              />
            )}
            {kes && (
              <div className=" bg-kesAsh text-kesText flex justify-center items-center h-4 mt-6 px-2 py-3 rounded-md text-xs">
                <span>KES</span> <IoIosArrowDown className="text-lg" />
              </div>
            )}
          </div>
          <p className=" text-xs tracking-wide text-lightAsh font-inter font-bold">
            {info}
          </p>
          <div className="flex justify-between">
            <p className="text-3xl tracking-wide font-bold font-inter pt-3">
              {total}
            </p>
            {isIcon2 && (
              <div className={className}>
                <img src={icon2} alt="icon" className="pr-1" />
                <span className="text-xs font-bold">{percent}</span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-between font-inter" >
          <div className=" pt-20">
            <p className="text-xs tracking-wide text-lightAsh font-inter font-bold pb-3">
              Reconcile
            </p>
            <p>
              <span className="text-3xl font-bold font-inter">
                53<span className="text-percentAsh font-normal text-lg ">/100%</span>{" "}
              </span>
            </p>
          </div>
          <div className="circular-progress">
            <span className="progress-value">53%</span>
          </div>
        </div>
      )}
    </div>
  );
}
