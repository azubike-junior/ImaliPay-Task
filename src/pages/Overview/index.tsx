import React from "react";
import Container from "./../../components/Container/index";
import OverviewBox from "./../../components/OverviewBox/index";
import balanceIcon from "../../assets/balance-icon.svg";
import pendingIcon from "../../assets/pending-icon.svg";
import totalCountIcon from "../../assets/totalCount-icon.svg";
import SearchBar from "../../components/SearchBar";
import oliviaImg from "../../assets/olivia-img.svg";
import { ExportButton } from "../../components/ExportButton";
import Pagination from './../../components/pagination/index';

export default function Overview() {
  return (
    <Container title="Overview">
      <div className="grid grid-cols-3 gap-6">
        <OverviewBox
          icon={balanceIcon}
          info="Total outstanding balance"
          total="6,709,288"
        />
        <OverviewBox
          icon={pendingIcon}
          info="Total repayment pending "
          total="72,864"
        />
        <OverviewBox
          icon={totalCountIcon}
          info="Total trasaction counts"
          total="3,062"
        />
      </div>

      <div className="flex justify-between mt-16">
        <SearchBar />
        <ExportButton />
      </div>

      <div className="mt-5">
        <div className="text-center">
          <div className="grid grid-cols-5 bg-lighterAsh rounded-sm py-4 px-5 font-bold font-inter text-xs text-lightAsh">
            <div className="flex">
              <div className="w-4 h-4 rounded-md border-1 mr-4 border-darkAsh"></div>{" "}
              <span>CUSTOMERS</span>
            </div>
            <div className="cell">DEPOSIT</div>
            <div className="cell">DATE</div>
            <div className="cell">VOUCHER NO.</div>
            <div className="cell">TRANS. STATUS</div>
          </div>

          <div className="grid grid-cols-5 bg-white px-5 border-b-1 border-darkAsh py-6 font-inter">
            <div className="flex">
              <div className="w-4 h-4 rounded-md border-1 mr-4 mt-2 border-darkAsh"></div>{" "}
              <div className="flex items-center justify-center ">
                <img src={oliviaImg} className="pr-2 pb-2" alt="img" />
                <div className=" text-left">
                  <p className="text-blackRussian text-sm">Olivia Rhye</p>
                  <p className="text-shadeBlue text-xs">+234 803 0000</p>
                </div>
              </div>
            </div>
            <div className="text-blackRussian text-sm font-bold pt-2">
              NGN 34,600
            </div>
            <div className="text-blackRussian text-sm pt-2">
              Jan 6, 2022 • 09:21
            </div>
            <div className="text-blackRussian text-sm pt-2">00437E</div>
            <div className="text-blackRussian pt-2">
              <span className="text-success font-bold bg-green-100 px-2 py-1 rounded-lg text-xs">
                successful
              </span>
            </div>
          </div>

          <div className="grid grid-cols-5 bg-white px-5 border-b-1 border-darkAsh py-6 font-inter">
            <div className="flex">
              <div className="w-4 h-4 rounded-md mt-2 border-1 mr-4 border-darkAsh"></div>
              <div className="flex items-center justify-center ">
                <img src={oliviaImg} className="pr-2 pb-2" alt="img" />
                <div className=" text-left">
                  <p className="text-blackRussian text-sm">Olivia Rhye</p>
                  <p className="text-shadeBlue text-xs">+234 803 0000</p>
                </div>
              </div>
            </div>
            <div className="text-blackRussian  pt-2 text-sm font-bold">
              NGN 34,600
            </div>
            <div className="text-blackRussian  pt-2 text-sm">Jan 6, 2022 • 09:21</div>
            <div className="text-blackRussian  pt-2 text-sm">00437E</div>
            <div className="text-blackRussian pt-2 ">
              <span className=" text-red-600 font-bold bg-red-100 px-2 py-1 rounded-lg text-xs">
                Failed
              </span>
            </div>
          </div>

          <div className="grid grid-cols-5 bg-white px-5 border-b-1 border-darkAsh py-6 font-inter">
            <div className="flex">
              <div className="w-4 h-4 rounded-md border-1 mr-4 mt-2 border-darkAsh"></div>{" "}
              <div className="flex items-center justify-center ">
                <img src={oliviaImg} className="pr-2 pb-2" alt="img" />
                <div className=" text-left">
                  <p className="text-blackRussian text-sm">Olivia Rhye</p>
                  <p className="text-shadeBlue text-xs">+234 803 0000</p>
                </div>
              </div>
            </div>
            <div className="text-blackRussian text-sm font-bold pt-2">
              NGN 34,600
            </div>
            <div className="text-blackRussian text-sm pt-2">
              Jan 6, 2022 • 09:21
            </div>
            <div className="text-blackRussian text-sm pt-2">00437E</div>
            <div className="text-blackRussian pt-2">
              <span className="text-success font-bold bg-green-100 px-2 py-1 rounded-lg text-xs">
                successful
              </span>
            </div>
          </div>

          <div className="grid grid-cols-5 bg-white px-5 border-b-1 border-darkAsh py-6 font-inter">
            <div className="flex">
              <div className="w-4 h-4 rounded-md border-1 mr-4 mt-2 border-darkAsh"></div>{" "}
              <div className="flex items-center justify-center ">
                <img src={oliviaImg} className="pr-2 pb-2" alt="img" />
                <div className=" text-left">
                  <p className="text-blackRussian text-sm">Olivia Rhye</p>
                  <p className="text-shadeBlue text-xs">+234 803 0000</p>
                </div>
              </div>
            </div>
            <div className="text-blackRussian text-sm font-bold">
              NGN 34,600
            </div>
            <div className="text-blackRussian text-sm">Jan 6, 2022 • 09:21</div>
            <div className="text-blackRussian text-sm">00437E</div>
            <div className="text-blackRussian">
              <span className=" text-red-600 font-bold bg-red-100 px-2 py-1 rounded-lg text-xs">
                Failed
              </span>
            </div>
          </div>
        </div>
      </div>

      <Pagination/>
    </Container>
  );
}
