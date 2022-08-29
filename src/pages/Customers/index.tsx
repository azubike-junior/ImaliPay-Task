import React from "react";
import Container from "../../components/Container";
import SearchBar from "../../components/SearchBar";
import oliviaImg from "../../assets/olivia-img.svg";
import { ExportButton } from "../../components/ExportButton";
import CustomerBox from "../../components/CustomerBox";
import redArrow from "../../assets/red-arrow.svg";
import greenArrow from "../../assets/green-arrow.svg";
import TableHead from "../../components/TableHead";
import mark from "../../assets/mark-icon.svg";
import { IoMdCheckmark } from "react-icons/io";
import TableBody from "../../components/TableBody";

export default function Customers() {
  return (
    <Container title="Customers">
      <div className="grid grid-cols-3">
        <CustomerBox
          info="Total customers"
          total="2,420"
          className="text-xs text-green-500 font-bold"
          icon2={greenArrow}
          percent="40%"
        />
        <CustomerBox
          info="Total active customers"
          total="1,210"
          className="text-xs text-red-500 font-bold"
          icon2={redArrow}
          percent="40%"
        />
        <CustomerBox
          info="Total defaulters"
          total="360"
          className="text-xs text-green-500 font-bold"
          icon2={greenArrow}
          percent="20%"
        />
      </div>

      <div className="flex justify-between mt-16">
        <SearchBar />
        <ExportButton />
      </div>

      <div className="mt-5">
        <div className="text-center my-10">
          <TableHead
            first="ID"
            second="CUSTOMER"
            third="DATE REGISTERED"
            fourth="KY STATUS"
            fifth=""
          />

          <TableBody
            customer
            second="#3066"
            icon={oliviaImg}
            firstName="Phoenix Baker"
            firstNum="+234 803 0000"
            third="06 Jan, 2022"
            fourth="Verified"
            fifth="View"
          />

          <TableBody
            customer
            second="#3066"
            icon={oliviaImg}
            firstName="Phoenix Baker"
            firstNum="+234 803 0000"
            third="06 Jan, 2022"
            fourth="Verified"
            fifth="View"
          />

          <TableBody
            customer
            second="#3066"
            icon={oliviaImg}
            firstName="Phoenix Baker"
            firstNum="+234 803 0000"
            third="06 Jan, 2022"
            fourth="Verified"
            fifth="View"
          />
        </div>
      </div>
    </Container>
  );
}
