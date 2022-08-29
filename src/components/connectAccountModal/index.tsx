import React from "react";
import connect1 from "../../assets/connect-1.svg";
import connect2 from "../../assets/connect-2.svg";

interface MobileMoneyProp {
  toggleModalAccount?: any;
  toggleBankAccount?: any;
  toggleConnectAccountModal?: any;
}

export default function ConnectAccountModal({
  toggleModalAccount,
  toggleConnectAccountModal,
  toggleBankAccount,
}: MobileMoneyProp) {
  return (
    <div className="bg-white px-6 py-4 rounded-md w-full">
      <span className="flex text-almostBlack font-bold text-base">
        Connect account
      </span>
      <span className="text-xs text-tintedAsh">
        Connect your mobile account or bank statement to continue
      </span>

      <div
        onClick={() => {
          toggleModalAccount();
          toggleConnectAccountModal();
        }}
        className="text-center mt-10 mb-2 cursor-pointer"
      >
        <img
          src={connect1}
          className="h-16 w-16 mx-auto pb-2"
          alt="connect-icon"
        />
        <p className="text-xs font-bold text-black">Mobile money account</p>
      </div>
      <div
        onClick={() => {
          toggleBankAccount();
          toggleConnectAccountModal()
        }}
        className="text-center mt-6 mb-10 cursor-pointer"
      >
        <img
          src={connect2}
          className="h-16 w-16 mx-auto pb-2"
          alt="connect-icon"
        />
        <p className="text-xs font-bold text-black">Bank account</p>
      </div>
    </div>
  );
}
