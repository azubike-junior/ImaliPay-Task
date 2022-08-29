import React from "react";
import Button from "../Button";
import xero from "../../assets/xero.svg";

interface ErpProp {
  header: string;
  info?: string;
  info2?: string;
  btn?: boolean;
  toggleErpDropdown?: any;
  toggleErpAccount?: any;
}

export default function ConnectErp({
  header,
  toggleErpDropdown,
  toggleErpAccount,
  info,
  info2,
  btn,
}: ErpProp) {
  return (
    <div className="bg-white px-6 py-4 rounded-md">
      <p className="text-almostBlack font-bold text-lg pt-4">{header}</p>
      <span className="text-xs text-tintedAsh">
        {info}
      </span>

      <div className="pb-4 pt-4">
        <p className="text-tintedAsh text-xs pb-2">ERP</p>
        <div className="border-1 border-E5E5E5 py-2 pl-4 pr-60 text-left rounded-lg">
          {info2}
        </div>
      </div>
      {btn ? (
        <Button
          onClick={() => {
            toggleErpDropdown();
            toggleErpAccount();
          }}
          className=" bg-mediumGreen cursor-pointer text-center py-4 text-white rounded-lg"
          child="Connect"
        />
      ) : (
        <div className="border-1 flex items-center border-E5E5E5 py-2 pl-4 pr-60 text-left rounded-lg">
          <img src={xero} className="w-10 h-10 pr-2" alt="xero" />{" "}
          <span className="text-sm">Xero</span>
        </div>
      )}
    </div>
  );
}
