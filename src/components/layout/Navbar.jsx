import "./Navbar.css";
import {
  FaBell,
  FaUserCircle,
  FaBars,
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar__left">

        <button className="navbar__menu-btn">
          <FaBars />
        </button>

        <div className="navbar__brand">
          <h2>Payroll</h2>
          <span>Management System</span>
        </div>

      </div>

      <div className="navbar__right">

        <button className="navbar__icon">
          <FaBell />
        </button>

        <div className="navbar__profile">
          <FaUserCircle className="profile-icon" />

          <div>
            <h4>Admin</h4>
            <span>HR Manager</span>
          </div>
        </div>

      </div>

    </header>
  );
}

export default Navbar;