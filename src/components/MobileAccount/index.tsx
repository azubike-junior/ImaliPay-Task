import React from "react";
import { IoIosArrowBack } from "react-icons/io";

interface MobileProp {
  header: string;
  btn1: string;
  btn2: string;
  toggleConnectAccountModal?: any;
  toggleBankAccount?: any;
  toggleMobileMoney?: any;
  identifier?: boolean;
}

export default function AccountModal({
  header,
  btn1,
  btn2,
  toggleConnectAccountModal,
  toggleBankAccount,
  toggleMobileMoney,
  identifier,
}: MobileProp) {
  return (
    <div className="bg-white px-6 py-4 rounded-md">
      <div
        onClick={() => {
          toggleConnectAccountModal();
          identifier ? toggleMobileMoney() : toggleBankAccount();
        }}
        className="flex items-center mb-2"
      >
        <div className="bg-EFEF px-1 py-1 rounded-full mr-1">
          <IoIosArrowBack className="w-4 h-4" />
        </div>
        <span className="text-xs">Go Back</span>
      </div>

      <p className="text-almostBlack font-bold text-base">{header}</p>
      <span className="text-xs text-tintedAsh">
        Choose an option to proceed
      </span>

      <div className="bg-EAE px-20 py-4 mt-4 font-bold text-sm rounded-lg">
        {btn1}
      </div>

      <div className="bg-transparent border-2 border-almostBlack px-20 py-4 mt-3 mb-10 font-bold text-sm rounded-lg">
        {btn2}
      </div>
    </div>
  );
}
