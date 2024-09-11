import { AiFillAndroid } from "react-icons/ai";
import logo from "../assets/images/37516276.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="menu">
        <li className="active">
          <Link to="/">
            <i>
              <AiFillAndroid />
            </i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/addexpense">
            <i>
              <AiFillAndroid />
            </i>
            <span>Add Expense</span>
          </Link>
        </li>
        <li>
          <Link to="/editExpense">
            <i>
              <AiFillAndroid />
            </i>
            <span>Edit Expense</span>
          </Link>
        </li>
        <li>
          <Link to="/viewExpense">
            <i>
              <AiFillAndroid />
            </i>
            <span>View Expense</span>
          </Link>
        </li>
        <li>
          <Link to="/analysis">
            <i>
              <AiFillAndroid />
            </i>
            <span>Analysis</span>
          </Link>
        </li>
        <li>
          <a href="">
            <i>
              <AiFillAndroid />
            </i>
            <span>Settings</span>
          </a>
        </li>
        <li className="logout">
          <a href="">
            <i>
              <AiFillAndroid />
            </i>
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
