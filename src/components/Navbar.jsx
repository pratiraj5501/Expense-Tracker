import user from "../assets/images/user.png";
const Navbar = () => {
  return (
    <div className="header-wrapper">
      <div className="header-title">
        <span>Primary</span>
        <h2>Dashboard</h2>
      </div>
      <div className="user-info">
        <div className="search--box">
          <i className="fa-solid fa-search"></i>
          <input type="text" placeholder="search..." />
        </div>
        <img src={user} alt="User" />
      </div>
    </div>
  );
};
export default Navbar;
