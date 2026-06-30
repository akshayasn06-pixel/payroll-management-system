import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaUsers,
  FaCalendarCheck,
  FaCalendarAlt,
  FaMoneyCheckAlt,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar({ isSidebarOpen }) {
  return (
    <aside 
    className={`sidebar ${isSidebarOpen ? "sidebar--open" : ""}`}
    >

      <div className="sidebar__top">

        <NavLink to="/" end className="sidebar__link">
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/employees" className="sidebar__link">
          <FaUsers />
          <span>Employees</span>
        </NavLink>

        <NavLink to="/attendance" className="sidebar__link">
          <FaCalendarCheck />
          <span>Attendance</span>
        </NavLink>

        <NavLink to="/leave" className="sidebar__link">
          <FaCalendarAlt />
          <span>Leave</span>
        </NavLink>

        <NavLink to="/payroll" className="sidebar__link">
          <FaMoneyCheckAlt />
          <span>Payroll</span>
        </NavLink>

        <NavLink to="/reports" className="sidebar__link">
          <FaChartBar />
          <span>Reports</span>
        </NavLink>

        <NavLink to="/settings" className="sidebar__link">
          <FaCog />
          <span>Settings</span>
        </NavLink>

      </div>

      <div className="sidebar__bottom">

        <button className="logout-btn">
          <FaSignOutAlt />
          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;