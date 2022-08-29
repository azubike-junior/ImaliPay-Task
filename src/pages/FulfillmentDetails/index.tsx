import React from "react";
import Container from "../../components/Container";
import DisabledInput from "../../components/DisabledInput";
import pendingPaymentIcon from "../../assets/pendingPayment-icon.svg";
import PendingPaymentComp from "../../components/PendingPayementComp";
import { Link } from "react-router-dom";
import DetailsBox from "../../components/DetailsBox";

export default function FulfillmentDetails() {
  return (
    <Container
      backBtn={
        <>
          <Link to="/fulfillment">
            <span className="font-bold cursor-pointer">Go back </span>
          </Link>
          / <span className="text-lightAsh">Oliver Tai</span>
        </>
      }
    >
      <div className="w-full bg-white py-16 flex justify-between items-center">
        <div className="border-r-1 w-1/2 px-8">
          <span className="text-2xl font-bold tracking-wide">
            Customer’s Profile{" "}
          </span>

          <div className="mt-4 flex">
            <div className="h-12 w-12 bg-lightPurple text-center text-darkPurple text-lg rounded-full pt-2 mr-3">
              OR
            </div>
            <div className="text-xs mt-2">
              <p className="font-bold text-darkerBlue text-sm">Oliver Tai</p>{" "}
              <p className="text-shadeBlue">Customer</p>
            </div>
          </div>

          <div className="w-full mt-5 ">
            <div className="grid grid-cols-2">
              <DisabledInput label="First name" value="James" />
              <DisabledInput label="Last name" value="Warri" />
            </div>

            <div className="grid grid-cols-2">
              <DisabledInput label="Gender" value="Male" />
              <DisabledInput label="Date of birth" value="02 Feb 1990" />
            </div>
            <DisabledInput
              label="Home address"
              value="18 Street name, Town, LGA, State, Country"
            />

            <hr className="my-5" />

            <DisabledInput
              label="Location of Purchase"
              value="Mega Autoshop, Lagos "
            />

            <DisabledInput label="Vehicle Model" value="Toyota - Model Z " />
            <DisabledInput
              label="Insurance Provider"
              value="Company Insurance Plc "
            />
          </div>
        </div>

        <div className="w-1/2 px-12">
          <p className="text-tintedAsh text-xs pb-3">FULFILLMENT DETAILS</p>
          <DetailsBox
            headingOne="Repayment amount"
            info1="₦304,600"
            headingTwo="Value of car"
            info2="₦6,300,950"
          />
          <DetailsBox
            info3
            headingOne="Repayment duration"
            info1="6 Months"
            headingTwo="Repayment ends"
            info2="03 Dec 2022"
          />{" "}
          <DetailsBox
            info3
            headingOne="Transaction date"
            info1="Jan 6, 2022 @ 08:45"
            headingTwo="Status"
            info2="Active"
            status
          />
          <p className="text-tintedAsh text-xs pb-4 mt-6">UPCOMING PAYMENTS</p>
          <PendingPaymentComp overdue />
          <PendingPaymentComp pending/>
          <p className="text-tintedAsh text-xs pb-4 mt-6">COMPLETED PAYMENTS</p>
          <PendingPaymentComp paid/>
          <PendingPaymentComp paid/>
        </div>
      </div>
    </Container>
  );
}
