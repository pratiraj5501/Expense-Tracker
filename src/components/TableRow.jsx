import { CiEdit } from "react-icons/ci";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";

const TableRow = ({
  amount,
  desc,
  date,
  category,
  id,
  showEditBtn,
  getDataIntoModal,
}) => {
  // following function invoke when user clicks on edit expense on table
  const handleEditBtn = () => {
    getDataIntoModal(id, amount, desc, category, date);
  };

  return (
    <>
      <tr>
        <td>{date}</td>
        <td>{desc}</td>
        <td>{amount} Rs</td>
        <td>{category}</td>
        {showEditBtn && (
          <td>
            <button id="btn" onClick={handleEditBtn}>
              <span>
                Edit <CiEdit />
              </span>
            </button>
          </td>
        )}
      </tr>
    </>
  );
};

export default TableRow;
