import React from "react";
import imalipayLogo from "../../assets/logo.svg";
import quickMenu from "../../assets/quickMenu.svg";
import overviewIcon from "../../assets/overview-icon.svg"
import customerIcon from "../../assets/customers-icon.svg";
import defaultIcon from "../../assets/defaults.svg";
import fulfillmentIcon from "../../assets/fulfillment.svg";


import Menu from "../SidebarMenu";

export default function Sidebar() {
  return (
    <div className="w-19 bg-white h-screen border-r-2">
      <div className="pl-12 mt-10">
        <img src={imalipayLogo} className="h-10" alt="logo" />

        <div>
          <img src={quickMenu} className="h-2.5 mt-14" alt="logo" />
        </div>

        <div className="mt-10">
          <Menu link="/overview" icon={overviewIcon} title="Overview" />
          <Menu link="/customer" icon={customerIcon} title="Customers" />
          <Menu link="/defaulters" icon={defaultIcon} title="Defaulters" />
          <Menu link="/fulfillment" icon={fulfillmentIcon} title="Fulfillment" />
        </div>
      </div>
    </div>
  );
}
