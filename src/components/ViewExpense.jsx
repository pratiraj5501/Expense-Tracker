import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import CardWrapper from "./CardWrapper";
import TableContainer from "./TableContainer";
import { useDispatch, useSelector } from "react-redux";
import { expenseActions } from "../store";

const ViewExpense = () => {
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.expense);
  const data = expenseActions.ViewExpense();
  console.log(data);

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
      </div>
    </div>
  );
};
export default ViewExpense;
