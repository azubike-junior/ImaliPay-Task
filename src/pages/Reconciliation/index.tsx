import React, { useState } from "react";
import Container from "../../components/Container";
import SearchBar from "../../components/SearchBar";
import oliviaImg from "../../assets/olivia-img.svg";
import { ExportButton } from "../../components/ExportButton";
import kesIcon from "../../assets/kesOne.svg";
import kesTwoIcon from "../../assets/kesTwo.svg";
import TableHead from "../../components/TableHead";
import mark from "../../assets/mark-icon.svg";
import { IoMdCheckmark } from "react-icons/io";
import TableBody from "../../components/TableBody";
import OverviewBox from "../../components/OverviewBox";
import totalCountIcon from "../../assets/totalCount-icon.svg";
import filterAlt from "../../assets/filter-alt.svg";
import { IoIosArrowDown } from "react-icons/io";
import link from "../../assets/link.svg";
import paper from "../../assets/paper.svg";
import avatarIcon from "../../assets/avatar.svg";
import Modal from "../../components/Modal";
import ConnectAccountModal from "../../components/connectAccountModal";
import AccountModal from "./../../components/MobileAccount/index";
import ConnectErp from "../../components/ConnectErpModal";
import UploadModal from "../../components/UploadModal";
import OverviewTableBody from "../../components/OverviewTableBody";

export default function Reconciliation() {
  const [openConnectAccountModal, setOpenConnectAccountModal] = useState(false);
  const [openMobileMoney, setOpenMobileMoney] = useState(false);
  const [openBankAccount, setBankAccount] = useState(false);
  const [openErpAccount, setErpAccount] = useState(false);
  const [openErpDropdown, setErpDropDown] = useState(false);
  const [openUploadModal, setUploadModal] = useState(false);

  const toggleConnectAccountModal = () => {
    setOpenConnectAccountModal(!openConnectAccountModal);
  };

  const toggleMobileMoney = () => {
    setOpenMobileMoney(!openMobileMoney);
  };

  const toggleBankAccount = () => {
    setBankAccount(!openBankAccount);
  };

  const toggleErpAccount = () => {
    setErpAccount(!openErpAccount);
  };

  const toggleErpDropdown = () => {
    setErpDropDown(!openErpDropdown);
  };

  const toggleUploadModal = () => {
    setUploadModal(!openUploadModal);
  };

  return (
    <Container
      title="Account Summary"
      onClick={() => {
        openBankAccount && setBankAccount(false);
        openConnectAccountModal && setOpenConnectAccountModal(false);
        openErpAccount && setErpAccount(false);
        openErpDropdown && setErpDropDown(false);
        openUploadModal && setUploadModal(false);
        openMobileMoney && setOpenMobileMoney(false);
      }}
    >
      <div className="w-full flex justify-between mb-7 font-inter">
        <div className="bg-EAE flex px-3 py-2 rounded-lg space-x-2 justify-center items-center">
          <img src={filterAlt} alt="filter" />
          <span className="font-bold tracking-wider text-xs">Today</span>
          <IoIosArrowDown className="text-lg" />
        </div>

        <div className="flex space-x-4 ">
          <div
            onClick={() => {
              toggleErpAccount();
            }}
            className="bg-FFB flex cursor-pointer text-black px-3 py-2 rounded-lg space-x-2 justify-center items-center"
          >
            <img src={link} alt="link" className="h-6 w-6" />
            <p className="font-bold tracking-wider text-sm">Connect ERP</p>
          </div>
          <div
            onClick={() => {
              toggleUploadModal();
            }}
            className="bg-mediumGreen flex cursor-pointer text-white rounded-lg px-3 py-2  space-x-2 justify-center items-center"
          >
            <img src={paper} alt="link" className="h-6 w-6" />
            <span className="font-bold tracking-wider text-xs">Upload CSV</span>
          </div>

          <div
            onClick={() => toggleConnectAccountModal()}
            className="bg-almostBlack flex cursor-pointer text-white rounded-lg px-3 py-2 space-x-2 justify-center items-center"
          >
            <img src={avatarIcon} alt="link" className="h-6 w-6" />
            <span className="font-bold tracking-wider text-xs">
              Connect Account
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 mb-10 z-40 gap-6">
        <OverviewBox
          icon={kesIcon}
          info="Total outstanding balance"
          total="6,709,288"
          kes
        />
        <OverviewBox
          icon={kesTwoIcon}
          info="Total repayment pending "
          total="72,864"
          kes
        />
        <OverviewBox
          percentageBox
          icon={totalCountIcon}
          info="Total trasaction counts"
          total="3,062"
        />
      </div>

      <div className="w-full h-0.5 bg-gray-300"></div>

      <div className="flex justify-between mt-10">
        <SearchBar />
        <ExportButton />
      </div>

      <div className="mt-5">
        <div className="text-center my-10">
          <TableHead
            first="DATE"
            second="ACCOUNT"
            third="INVOICE TOTAL"
            fourth="AMOUNT RECEIVED"
            fifth="PERCENTAGE RECONCILED"
          />

          <OverviewTableBody
            customer
            second="Aug 4, 2022"
            icon={oliviaImg}
            firstName="Phoenix Baker"
            firstNum="+234 803 0000"
            third="06 Jan, 2022"
            fourth="82%"
            fifth="KES 90,069.00"
          />

          <OverviewTableBody
            customer
            second="Aug 5, 2022"
            icon={oliviaImg}
            firstName="Phoenix Baker"
            firstNum="+234 803 0000"
            third="06 Jan, 2022"
            fourth="82%"
            fifth="KES 90,069.00"
          />

          <OverviewTableBody
            customer
            second="Aug 6, 2022"
            icon={oliviaImg}
            firstName="Phoenix Baker"
            firstNum="+234 803 0000"
            third="06 Jan, 2022"
            fourth="62%"
            fifth="KES 90,069.00"
          />

          <OverviewTableBody
            customer
            second="Aug 4, 2022"
            icon={oliviaImg}
            firstName="Phoenix Baker"
            firstNum="+234 803 0000"
            third="06 Jan, 2022"
            fourth="72%"
            fifth="KES 90,069.00"
          />

          <OverviewTableBody
            customer
            second="Aug 5, 2022"
            icon={oliviaImg}
            firstName="Phoenix Baker"
            firstNum="+234 803 0000"
            third="06 Jan, 2022"
            fourth="52%"
            fifth="KES 90,069.00"
          />

          <OverviewTableBody
            customer
            second="Aug 4, 2022"
            icon={oliviaImg}
            firstName="Phoenix Baker"
            firstNum="+234 803 0000"
            third="06 Jan, 2022"
            fourth="82%"
            fifth="KES 90,069.00"
          />
        </div>
      </div>

      <Modal isOpen={openConnectAccountModal}>
        <ConnectAccountModal
          toggleBankAccount={toggleBankAccount}
          toggleModalAccount={toggleMobileMoney}
          toggleConnectAccountModal={toggleConnectAccountModal}
        />
      </Modal>

      <Modal isOpen={openMobileMoney}>
        <AccountModal
          toggleMobileMoney={toggleMobileMoney}
          toggleConnectAccountModal={toggleConnectAccountModal}
          header=" Mobile money account"
          btn1="Connect MPesa account"
          btn2=" Upload Mpesa statement"
          identifier={true}
        />
      </Modal>

      <Modal isOpen={openBankAccount}>
        <AccountModal
          toggleConnectAccountModal={toggleConnectAccountModal}
          toggleBankAccount={toggleBankAccount}
          header="Bank account"
          btn1="Connect bank account"
          btn2="Upload bank statement"
          identifier={false}
        />
      </Modal>

      <Modal isOpen={openErpAccount}>
        <ConnectErp
          info=""
          header="Connect your ERP"
          toggleErpDropdown={toggleErpDropdown}
          toggleErpAccount={toggleErpAccount}
          info2="Select ERP"
          btn
        />
      </Modal>

      <Modal isOpen={openErpDropdown}>
        <ConnectErp
          info="Connect your mobile account or bank statement to continue"
          header="Connect with us"
          info2="Xero"
        />
      </Modal>

      <Modal isOpen={openUploadModal}>
        <UploadModal toggleUploadModal={toggleUploadModal} />
      </Modal>
    </Container>
  );
}
