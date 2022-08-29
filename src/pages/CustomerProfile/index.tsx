import React from "react";
import Container from "../../components/Container";
import DisabledInput from "../../components/DisabledInput";
import pendingPaymentIcon from "../../assets/pendingPayment-icon.svg";
import PendingPaymentComp from "../../components/PendingPayementComp";
import { Link } from "react-router-dom";

export default function CustomerProfile() {
  return (
    <Container
      backBtn={
        <>
          <Link to="/customer">
            <span className="font-bold cursor-pointer">Go back </span>
          </Link>
          / <span className="text-lightAsh">Oliver Tai</span>
        </>
      }
    >
      <div className="w-full bg-white py-12 flex justify-between items-center">
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
            <DisabledInput label="Phone number" value="8041 5063 789" phone />
            <div className="grid grid-cols-2">
              <DisabledInput label="Date of birth" value="02 Feb 1990" />
              <DisabledInput label="State of residence" value="Lagos" />
            </div>
            <div className="grid grid-cols-2">
              <DisabledInput label="Bank name" value="Access Bank PLC" />
              <DisabledInput label="Bank number" value="102848393" />
            </div>
            <DisabledInput
              label="Address"
              value="34 Sunville Estate, Macathony Street,  Ikeja"
            />
          </div>
        </div>

        <div className="w-1/2 px-12">
          <p className="text-tintedAsh text-xs pb-3">Transaction history</p>

          <div className="flex justify-center items-center w-full border-1 border-darkAsh h-19 mt-2 rounded-md">
            <div className="text-darkAsh py-2">
              <p className="text-xs text-shadeBlue font-medium">
                Amount loaned(NGN)
              </p>
              <p className="text-xl text-almostBlack font-bold">404,051</p>
            </div>
            <div className="w-1 h-10 mt-4  my-2 bg-darkAsh mx-10"></div>
            <div className="text-darkAsh px-2 py-2 pr-4">
              <p className="text-xs text-shadeBlue">Amount paid(NGN)</p>
              <p className="text-xl text-almostBlack font-bold">404,051</p>
            </div>
          </div>

          <p className="text-tintedAsh text-xs pb-4 mt-6">Pending Payments</p>
          <PendingPaymentComp />
          <PendingPaymentComp />
          <PendingPaymentComp />
          <PendingPaymentComp />
        </div>
      </div>
    </Container>
  );
}
