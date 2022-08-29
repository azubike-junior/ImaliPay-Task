import React from "react";
import Container from "../../components/Container";
import SearchBar from "../../components/SearchBar";
import { ExportButton } from "../../components/ExportButton";
import oliviaImg from "../../assets/olivia-img.svg";
import TableHead from "../../components/TableHead";
import TableBody from "./../../components/TableBody/index";

export default function Fulfilment() {
  return (
    <Container title="Fulfillment" btn>
      <div className="flex justify-between mt-10">
        <SearchBar />
        <ExportButton />
      </div>

      <div className="mt-5">
        <div className="text-center">
          <TableHead
            first="CUSTOMERS"
            second="PRICE"
            third="VEHICLE MODEL"
            fourth="VOUCHER NO."
            fifth="COL. STATUS"
          />
          <TableBody
            icon={oliviaImg}
            firstName="Olivia Rhye"
            firstNum="+234 803 0000"
            second="NGN 34,600"
            third=" Jan 6, 2022 • 09:21"
            fourth="00437E"
            fifth="Active"
            className="text-success font-bold bg-green-100 px-2 py-1 rounded-lg text-xs"
          />{" "}
          <TableBody
            icon={oliviaImg}
            firstName="Olivia Rhye"
            firstNum="+234 803 0000"
            second="NGN 34,600"
            third=" Jan 6, 2022 • 09:21"
            fourth="00437E"
            fifth="Failed"
            className=" text-red-600 font-bold bg-red-100 px-2 py-1 rounded-lg text-xs"
          />
          <TableBody
            icon={oliviaImg}
            firstName="Olivia Rhye"
            firstNum="+234 803 0000"
            second="NGN 34,600"
            third=" Jan 6, 2022 • 09:21"
            fourth="00437E"
            fifth="successful"
            className="text-success font-bold bg-green-100 px-2 py-1 rounded-lg text-xs"
          />{" "}
          <TableBody
            icon={oliviaImg}
            firstName="Olivia Rhye"
            firstNum="+234 803 0000"
            second="NGN 34,600"
            third=" Jan 6, 2022 • 09:21"
            fourth="00437E"
            fifth="successful"
            className="text-success font-bold bg-green-100 px-2 py-1 rounded-lg text-xs"
          />{" "}
          <TableBody
            icon={oliviaImg}
            firstName="Olivia Rhye"
            firstNum="+234 803 0000"
            second="NGN 34,600"
            third=" Jan 6, 2022 • 09:21"
            fourth="00437E"
            fifth="successful"
            className="text-success font-bold bg-green-100 px-2 py-1 rounded-lg text-xs"
          />
          <TableBody
            icon={oliviaImg}
            firstName="Olivia Rhye"
            firstNum="+234 803 0000"
            second="NGN 34,600"
            third=" Jan 6, 2022 • 09:21"
            fourth="00437E"
            fifth="successful"
            className="text-success font-bold bg-green-100 px-2 py-1 rounded-lg text-xs"
          />{" "}
          <TableBody
            icon={oliviaImg}
            firstName="Olivia Rhye"
            firstNum="+234 803 0000"
            second="NGN 34,600"
            third=" Jan 6, 2022 • 09:21"
            fourth="00437E"
            fifth="successful"
            className="text-success font-bold bg-green-100 px-2 py-1 rounded-lg text-xs"
          />
          <TableBody
            icon={oliviaImg}
            firstName="Olivia Rhye"
            firstNum="+234 803 0000"
            second="NGN 34,600"
            third=" Jan 6, 2022 • 09:21"
            fourth="00437E"
            fifth="Failed"
            className=" text-red-600 font-bold bg-red-100 px-2 py-1 rounded-lg text-xs"
          />
        </div>
      </div>
    </Container>
  );
}
