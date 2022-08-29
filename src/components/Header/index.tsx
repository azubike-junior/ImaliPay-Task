import React from "react";
import bellIcon from "../../assets/bell-icon.svg";
import avatar from "../../assets/avatar-icon.svg";
import arrowDown from "../../assets/arrow-down.svg";

export default function Header() {
  return (
    <div className="w-full h-19 border-b-2 bg-white">
      <div className="px-10 pl-16 pr-20 pt-3 flex justify-between">
        <div className=" text-left">
          <p className="text-lg font-bold capitalize pb-1.5 font-inter">
            Hello, Alex
          </p>
          <p className="text-sm tracking-wide font-inter  text-lightAsh">
            Here’s what’s going on with your account.
          </p>
        </div>
        <div className="mt-2 flex pl-10">
          <div className="border-r-2 pr-6 flex items-center">
            <img src={bellIcon} alt="notify" />
          </div>
          <div className="pl-6 flex">
            <img src={avatar} alt="avatar" />

            <div className="mt-1">
              <div className="pl-2 flex items-center">
                <p className="font-bold font-inter">Alex</p>
                <div>
                  <img
                    src={arrowDown}
                    className="h-4 w-4 ml-4"
                    alt="arrow-down"
                  />
                </div>
              </div>
              <p className="text-sm font-inter text-lightAsh w-40 pl-2">
                Vendor ID: 93829922
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
