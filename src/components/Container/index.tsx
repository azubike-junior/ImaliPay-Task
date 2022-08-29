import React from "react";
import Button from "../Button";
import FilterBtn from "../FilterBtn";

interface ContainerProp {
  title?: string;
  children: any;
  backBtn?: any;
  btn?: boolean
  filter?: boolean
  onClick?: any
}

export default function Container({ title, onClick, children, backBtn, btn, filter }: ContainerProp) {
  return (
    <div onClick={onClick} className="py-16 px-14 font-inter z-10" >
      {filter && <FilterBtn />}
      {backBtn ? (
        <div className="tracking-wide text-almostBlack text-sm font-inter pb-10">
          {backBtn}
        </div>
      ) : (
        <div className="flex justify-between">
          <p className="tracking-wide font-bold text-almostBlack text-xl font-inter pb-10">
            {title}
          </p>

          {btn && (
            <Button
              child="Register"
              className="bg-darkGreen text-white px-6 h-12 pt-3 rounded-lg cursor-pointer"
            />
          )}
        </div>
      )}

      {children}
    </div>
  );
}
