import React from "react";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import Chart from "./chart";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Chart/>
    </>
  );
};

export default Dashboard;
