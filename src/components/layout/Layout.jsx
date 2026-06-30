import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import "./Layout.css";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
     />

      <div className="layout">
        <Sidebar 
          isSidebarOpen={isSidebarOpen}
        />

        <main className="layout__content">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;