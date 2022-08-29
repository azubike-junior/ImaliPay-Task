import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../Button";
import uploadIcon from "../../assets/upload.svg";

interface MobileProp {
  toggleUploadModal: any;
}

export default function UploadModal({ toggleUploadModal }: MobileProp) {
  return (
    <div className="bg-white px-6 py-4 rounded-md">
      <div
        onClick={() => {
          toggleUploadModal();
        }}
        className="flex items-center mb-6 cursor-pointer"
      >
        <div className="bg-EFEF px-1 py-1 rounded-full mr-1">
          <IoIosArrowBack className="w-4 h-4" />
        </div>
        <span className="text-xs">Go Back</span>
      </div>

      <div className=" border-dotted border-2 rounded-lg w-80 py-4 mb-4 text-center ">
        <img src={uploadIcon} alt="upload" className="mx-auto" />
        <p className="text-xs pt-2 text-tintedAsh">Click to upload PDF file</p>
      </div>

      <Button
        // onClick={() => {
        //   toggleErpDropdown();
        //   toggleErpAccount();
        // }}
        className=" bg-mediumGreen cursor-pointer text-center py-4 text-white rounded-lg"
        child="Submit"
      />
    </div>
  );
}
