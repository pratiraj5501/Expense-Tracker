import { useRef } from "react";
import { useDispatch } from "react-redux";
import { expenseActions } from "../store";

const Modal = ({ setShowModal, showDataInModal }) => {
  // creating varialbes to store modal data
  const dispatch = useDispatch();
  // console.log("printing initial", showDataInModal);
  const formAmount = useRef();
  const formDesc = useRef();
  const formCategory = useRef();
  const formDate = useRef();

  // following function will invoke when user submit the modal form
  const handleModalSubmit = () => {
    const id = showDataInModal.id;
    const amount = formAmount.current.value;
    const desc = formDesc.current.value;
    const date = formDate.current.value;
    const category = formCategory.current.value;
    // console.log("printing id -->", expId);
    dispatch(expenseActions.EditExpense({ id, amount, desc, date, category }));
    setShowModal(false);
  };

  return (
    <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Expense</h5>
            <button
              type="button"
              className="close"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {/* this is the code edit the expense  */}
            <form>
              <div className="form-group amount">
                <label htmlFor="amount">1. Amount</label>
                <input
                  type="text"
                  id="amount"
                  ref={formAmount}
                  defaultValue={showDataInModal.amount}
                />
              </div>
              <div className="form-group desc">
                <label htmlFor="desc">2. Description</label>
                <input
                  type="text"
                  id="desc"
                  ref={formDesc}
                  defaultValue={showDataInModal.desc}
                />
              </div>
              <div className="form-group date">
                <label htmlFor="date">3. Date</label>
                <input type="date" id="date" ref={formDate} />
              </div>
              <div className="dropdown-container">
                <label htmlFor="options">
                  4. Please select one of the following
                </label>
                <select
                  id="options"
                  ref={formCategory}
                  defaultValue={showDataInModal.category}
                >
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

              {/* this is button */}
            </form>
            {/* Add form elements for editing expense */}
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => handleModalSubmit()}
            >
              Save changes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
