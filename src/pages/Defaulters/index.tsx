import React from "react";
import Container from "../../components/Container";
import OverviewBox from "./../../components/OverviewBox/index";
import balanceIcon from "../../assets/balance-icon.svg";
import pendingIcon from "../../assets/pending-icon.svg";
import totalCountIcon from "../../assets/totalCount-icon.svg";
import SearchBar from "../../components/SearchBar";
import oliviaImg from "../../assets/olivia-img.svg";
import greenArrow from "../../assets/green-arrow.svg";
import redArrow from "../../assets/red-arrow.svg";
import { ExportButton } from "../../components/ExportButton";
import TableHead from "../../components/TableHead";
import Pagination from "../../components/pagination";
import DefaulterBody from "../../components/DefaulterBody";

export default function Defaulters() {
  // ADD FILTER ICON TO THE TOP AND PERCENT ICON TO EACH BOXES
  return (
    <Container title="Defaulters" filter>
      <div className="grid grid-cols-3 gap-6">
        <OverviewBox
          icon={balanceIcon}
          info="Total outstanding balance"
          total="3,160,010"
          dropdown
        />
        <OverviewBox
          icon={pendingIcon}
          info="Total repayment pending "
          total="890,100"
          dropdown
          isIcon2
          icon2={redArrow}
          percent="10%"
          className="bg-red-100 text-red-700 h-3 flex justify-center px-2 py-2.5 items-center rounded-lg mt-6"
        />
        <OverviewBox
          icon={totalCountIcon}
          info="Total trasaction counts"
          total="316"
          dropdown
          isIcon2
          icon2={greenArrow}
          percent="100%"
          className="bg-green-100 text-green-700 h-3 flex justify-center px-2 py-2.5 items-center rounded-lg mt-6"
        />
      </div>

      <div className="flex justify-between mt-16">
        <SearchBar />
        <ExportButton />
      </div>

      <div className="mt-5">
        <div className="text-center">
          <TableHead
            first="DRIVER"
            second="LOAN AMOUNT"
            third="DATE REQUESTED"
            fourth="LOAN STATUS"
            fifth=""
          />

          <DefaulterBody
            icon={oliviaImg}
            firstName="Olivia Rhye"
            firstNum="+234 803 0000"
            second="NGN 34,600"
            third="06 Jan, 2022"
            fourth="Verified"
            fifth="VIEW"
          />

          <DefaulterBody
            icon={oliviaImg}
            firstName="Olivia Rhye"
            firstNum="+234 803 0000"
            second="NGN 34,600"
            third="06 Jan, 2022"
            fourth="Verified"
            fifth="VIEW"
          />

          <DefaulterBody
            icon={oliviaImg}
            firstName="Olivia Rhye"
            firstNum="+234 803 0000"
            second="NGN 34,600"
            third="06 Jan, 2022"
            fourth="Verified"
            fifth="VIEW"
          />

    

          <div className="grid grid-cols-5 bg-white px-5 border-b-1 border-darkAsh py-6 font-inter">
            <div className="flex mt-2">
              <div className="w-4 h-4 text-sm font-bold rounded-md border-1 mr-4 mt-1 border-darkAsh"></div>{" "}
              <div className="flex items-center justify-center ">
                <img src={oliviaImg} className="pr-2 pb-2" alt="img" />
                <div className=" text-left">
                  <p className="text-blackRussian text-sm">Olivia Rhye</p>
                  <p className="text-shadeBlue text-xs">+234 803 0000</p>
                </div>
              </div>
            </div>
            <div className="text-blackRussian text-sm  pt-2">NGN 34,600</div>
            <div className="text-blackRussian text-sm pt-2">06 Jan, 2022</div>

            {/* todo (add verified icon) */}
            <div className="text-blackRussian pt-2">
              <span className="text-success font-bold bg-green-100 px-3 py-2 rounded-lg text-xs">
                {/* <img src={mark} alt="mark-icon" className="mr-2 h-3" />{" "} */}
                Verified
              </span>
            </div>
            <div className="text-shadeBlue font-bold text-sm pt-3 cursor-pointer">
              VIEW
            </div>
          </div>
        </div>
      </div>

      <Pagination />
    </Container>
  );
}
