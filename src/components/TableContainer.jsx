import TableRow from "./TableRow";
import Modal from "./Modal";
import { useState } from "react";
import { useSelector } from "react-redux";

const TableContainer = ({ showEditBtn }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDataInModal, setShowDataInModal] = useState(null);

  const getDataIntoModal = (id, amount, date, desc, category) => {
    setShowDataInModal({ id, amount, date, desc, category });
    console.log("inside", showDataInModal);

    setShowModal(true);
  };

  // fetching data from state
  const expenseData = useSelector((state) => state.expense);
  let totalAmount = 0;

  totalAmount = expenseData.reduce(
    (total, item) => total + parseFloat(item.amount),
    0
  );
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Date</th>

            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            {showEditBtn && <th>Edit</th>}
          </tr>
        </thead>
        <tbody>
          {expenseData.map((item, index) => (
            <TableRow
              amount={item.amount}
              desc={item.desc}
              date={item.date}
              category={item.category}
              id={item.id}
              key={index}
              showEditBtn={showEditBtn}
              setShowModal={setShowModal}
              getDataIntoModal={getDataIntoModal}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="7">Total: Rs.{totalAmount}</td>
          </tr>
        </tfoot>
      </table>
      {/* Modal should be rendered outside the table */}
      {showModal && (
        <Modal setShowModal={setShowModal} showDataInModal={showDataInModal} />
      )}
    </div>
  );
};
export default TableContainer;
