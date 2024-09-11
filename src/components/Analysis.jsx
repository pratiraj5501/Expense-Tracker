import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import CardWrapper from "./CardWrapper";
import GraphWrapper from "./GraphWrapper";
import AreaChart from "./AreaChart";

const Analysis = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main--content">
        <Navbar />

        <div className="card-container">
          <h3 className="main-title">Today's Data</h3>
          <CardWrapper />
        </div>

        {/* <div className="tabular-wrapper">
          <h3 className="main-title">Finance Data</h3>
          <TableContainer />
        </div> */}

        <div className="graph-wrapper mt-4">
          {/* <GraphWrapper /> */}
          <AreaChart />
        </div>
      </div>
    </div>
  );
};
export default Analysis;
