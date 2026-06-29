import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import "./Layout.css";

function Layout() {
  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <main className="layout__content">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;