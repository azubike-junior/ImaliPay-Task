import React from "react";
import country from "../../assets/country.svg"
import arrow from "../../assets/arrow-down.svg"


interface DisabledInputProp {
  label: string;
  value: string;
  phone?: boolean;
}

export default function DisabledInput({
  label,
  value,
  phone,
}: DisabledInputProp) {
  return (
    <div className="font-inter w-full px-3 mt-4">
      <div className="flex flex-col">
        <label htmlFor={label} className="text-xs text-tintedAsh">
          {label}
        </label>
        {!phone ? (
          <input
            type="text"
            value={value}
            disabled
            className="flex py-3 mt-2 px-4 rounded-md"
          />
        ) : (
          <div className="bg-disabled mt-4 py-3 px-4 flex rounded-md">
            <img src={country} alt="country" className="pr-2" /> +234
            <img src={arrow} className="pl-2" alt="arrow" />
            <input
              type="text"
              value={value}
              className="flex flex-1 px-4 rounded-md bg-disabled outline-none"
            />
          </div>
        )}
      </div>
    </div>
  );
}
