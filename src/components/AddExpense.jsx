import "./AddExpense.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import CardWrapper from "./CardWrapper";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { expenseActions } from "../store";
const AddExpense = () => {
  const dispatch = useDispatch();
  const formAmount = useRef();
  const formDesc = useRef();
  const formDate = useRef();
  const formCategory = useRef();
  const onFormSubmit = (event) => {
    event.preventDefault();

    const amount = formAmount.current.value;
    const desc = formDesc.current.value;
    const date = formDate.current.value;
    const category = formCategory.current.value;
    dispatch(expenseActions.AddExpense({ amount, desc, date, category }));
  };
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main--content">
        <Navbar />

        <div className="card-container">
          <CardWrapper />
        </div>
        <div className="tabular-wrapper">
          <h3 className="main-title">Enter Your Expense</h3>
          <div className="form-container">
            <form onSubmit={() => onFormSubmit(event)}>
              <div className="form-group amount">
                <label htmlFor="amount">1. Amount</label>
                <input type="text" id="amount" ref={formAmount} />
              </div>
              <div className="form-group desc">
                <label htmlFor="desc">2. Description</label>
                <input type="text" id="desc" ref={formDesc} />
              </div>
              <div className="form-group date">
                <label htmlFor="date">3. Date</label>
                <input type="date" id="date" ref={formDate} />
              </div>
              <div className="dropdown-container">
                <label htmlFor="options">
                  4. Please select one of the following
                </label>
                <select id="options" ref={formCategory}>
                  <option>Please select</option>
                  <optgroup
                    label="Recharge "
                    style={{ color: "rgb(10, 8, 8)", fontSize: "20px" }}
                  >
                    <option className="recharge">mobile</option>
                    <option className="recharge">T.V.</option>
                    <option className="recharge">WiFi</option>
                  </optgroup>

                  <optgroup
                    label="Bill's"
                    style={{ color: "rgb(10, 8, 8)", fontSize: "20px" }}
                  >
                    <option className="bill">Electrity</option>
                    <option className="bill">Water</option>
                  </optgroup>
                  <optgroup
                    label="Rent"
                    style={{ color: "rgb(10, 8, 8)", fontSize: "20px" }}
                  >
                    <option className="rent">Rent</option>
                    <option className="rent">Office Rent</option>
                    <option className="rent">Equipment Rent</option>
                  </optgroup>

                  <optgroup
                    label="Other"
                    style={{ color: "rgb(10, 8, 8)", fontSize: "20px" }}
                  >
                    <option className="other">Travel</option>
                    <option className="other">Dinner</option>
                    <option className="other">Lunch</option>
                    <option className="other">Shopping</option>
                  </optgroup>
                </select>
              </div>
              {/* this is button */}

              <button className="button-36" role="button" type="submit">
                Add expense
              </button>

              {/* this is button */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddExpense;
