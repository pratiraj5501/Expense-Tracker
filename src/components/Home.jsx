import "./Home.css"; // Ensure you import your CSS file if you have one
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";
import { AiFillAndroid } from "react-icons/ai";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import CardWrapper from "./CardWrapper";
import TabularData from "./TableContainer";
import TableContainer from "./TableContainer";
import GraphWrapper from "./GraphWrapper";
import { Outlet } from "react-router-dom";
import Analysis from "./Analysis";
import { expenseActions } from "../store";
import { useDispatch } from "react-redux";
import AreaChart from "./AreaChart";

const Home = () => {
  // Cleanup chart on component unmount

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main--content">
        <Navbar />

        <div className="card-container">
          <h3 className="main-title">Today's Data</h3>
          <CardWrapper />
        </div>

        <div className="tabular-wrapper">
          <h3 className="main-title">Finance Data</h3>
          <TableContainer />
        </div>

        <div className="graph-wrapper">
          <AreaChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
