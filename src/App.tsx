import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Customers from "./pages/Customers";
import CustomerProfile from "./pages/CustomerProfile/index";
import Defaulters from "./pages/Defaulters";
import Fulfillment from "./pages/Fulfilment";
import FulfillmentDetails from "./pages/FulfillmentDetails/index";
import Reconciliation from "./pages/Reconciliation";

function App() {
  return (
    <Router basename="/Dashboard">
      <div className="flex">
        <Sidebar />
        <div className="w-full bg-bgColor overflow-hidden">
          <Header />
          <Routes>
            <Route path="/overview" element={<Overview />} />
            <Route path="/customer" element={<Customers />} />
            <Route path="/customerProfile" element={<CustomerProfile />} />
            <Route path="/defaulters" element={<Defaulters />} />
            <Route path="/fulfillment" element={<Fulfillment />} />
            <Route
              path="/fulfillmentDetails"
              element={<FulfillmentDetails />}
            />
            <Route path="/reconciliation" element={<Reconciliation/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
