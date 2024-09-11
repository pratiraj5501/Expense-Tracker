import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import CardWrapper from "./CardWrapper";
import TableContainer from "./TableContainer";

const EditExpense = () => {
  const showEditBtn = "ok";
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
          <TableContainer showEditBtn={showEditBtn} />
        </div>
      </div>
    </div>
  );
};

export default EditExpense;
