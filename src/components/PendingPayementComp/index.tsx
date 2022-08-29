import React from 'react'
import pendingPaymentIcon from "../../assets/pendingPayment-icon.svg";

interface PaymentProp {
    pending?: boolean
    overdue?: boolean
    paid?: boolean
}

export default function PendingPaymentComp({pending, overdue, paid}: PaymentProp) {
  return (
    <div className="flex justify-between mb-8">
      <div className="flex">
        <img src={pendingPaymentIcon} className="pr-3" alt="pendingIcon" />
        <div>
          <p className="text-sm">1/4 Payment</p>
          <p className="text-xs text-tintedAsh">21 Jul, 2022</p>
        </div>
        {overdue && (
          <div className="rounded-md">
            <span className="bg-red-100 rounded-md px-2 text-xs ml-3 mt-1 py-0.5 font-medium text-red-600">
              Overdue
            </span>
          </div>
        )}
        {pending && (
          <div className="rounded-md">
            <span className="bg-yellow-100 rounded-md px-2 text-xs ml-3 mt-1 py-0.5 font-medium text-yellow-600">
              Pending
            </span>
          </div>
        )}{" "}
        {paid && (
          <div className="rounded-md">
            <span className="bg-blue-100 rounded-md px-2 text-xs ml-3 mt-1 py-0.5 font-medium text-blue-600">
              Paid
            </span>
          </div>
        )}
      </div>
      <p className="font-bold text-sm">NGN 34,600</p>
    </div>
  );
}
