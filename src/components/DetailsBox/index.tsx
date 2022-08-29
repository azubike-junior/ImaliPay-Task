import React from "react";

interface DetailProp {
  headingOne: string;
  info1: string;
  headingTwo: string;
  info2: string;
  info3?: boolean;
  info4?: string;
  status?: boolean;
}

export default function DetailsBox({
  headingOne,
  info1,
  headingTwo,
  info2,
  info3,
  status,
}: DetailProp) {
  return (
    <div className="flex justify-center items-center w-full border-1 border-darkAsh h-19 mt-2 rounded-md mb-4">
      <div className="text-darkAsh py-2">
        <p className="text-xs text-shadeBlue pb-2 font-medium">{headingOne}</p>
        {!info3 ? (
          <p className="text-xl text-almostBlack font-bold">
            {info1}
            <span className=" text-gray-500 text-xs font-normal">/Month</span>
          </p>
        ) : (
          <p className="text-xs text-almostBlack font-bold">{info1}</p>
        )}
      </div>
      <div className="w-1 h-10 mt-4  my-2 bg-darkAsh mx-10"></div>
      {!status ? (
        <div className="text-darkAsh px-2 py-2 pr-4">
          <p className="text-xs text-shadeBlue pb-2">{headingTwo}</p>
          {!info3 ? (
            <p className="text-xl text-almostBlack font-bold">{info2}</p>
          ) : (
            <p className="text-xs text-almostBlack font-bold">{info2}</p>
          )}
        </div>
      ) : (
        <div className="text-darkAsh px-2 py-2 pr-4">
          <p className="text-xs text-shadeBlue pb-2">{headingTwo}</p>
          <p className="text-success font-bold bg-green-100 px-2 py-1 rounded-lg text-xs">
            {info2}
          </p>
        </div>
      )}
    </div>
  );
}
