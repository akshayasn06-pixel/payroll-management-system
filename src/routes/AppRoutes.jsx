import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Employees from "../pages/Employees/Employees";
import Attendance from "../pages/Attendance/Attendance";
import Leave from "../pages/Leave/Leave";
import Payroll from "../pages/Payroll/Payroll";
import Reports from "../pages/Reports/Reports";
import Settings from "../pages/Settings/Settings";
import Login from "../pages/Login/Login";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Layout Routes */}
        <Route path="/" element={<Layout />}>

          <Route index element={<Dashboard />} />

          <Route path="employees" element={<Employees />} />

          <Route path="attendance" element={<Attendance />} />

          <Route path="leave" element={<Leave />} />

          <Route path="payroll" element={<Payroll />} />

          <Route path="reports" element={<Reports />} />

          <Route path="settings" element={<Settings />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;