import "./Employees.css";

import { useState } from "react";

import EmployeeHeader from "./components/EmployeeHeader";
import EmployeeSearch from "./components/EmployeeSearch";
import EmployeeTable from "./components/EmployeeTable";
import AddEmployeeModal from "./components/AddEmployeeModal";

function Employees() {

  const [search, setSearch] = useState("");

  const [employees, setEmployees] = useState([
    {
      id: "EMP001",
      name: "Akash",
      department: "HR",
      role: "Manager",
      status: "Active",
    },
    {
      id: "EMP002",
      name: "Priya",
      department: "Finance",
      role: "Analyst",
      status: "Active",
    },
    {
      id: "EMP003",
      name: "Rahul",
      department: "IT",
      role: "Developer",
      status: "Active",
    },
    {
      id: "EMP004",
      name: "Sneha",
      department: "Marketing",
      role: "Executive",
      status: "On Leave",
    },
  ]);

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  function addEmployee(newEmployee) {

  const employee = {
    id: `EMP${String(employees.length + 1).padStart(3, "0")}`,
    ...newEmployee,
  };

  setEmployees((prevEmployees) => [
    ...prevEmployees,
    employee,
  ]);

  setIsModalOpen(false);

}

  return (
    <div className="employees-page">

      <EmployeeHeader
        setIsModalOpen={setIsModalOpen}
      />

      <EmployeeSearch
        search={search}
        setSearch={setSearch}
      />

      <EmployeeTable
        employees={filteredEmployees}
      />

      <AddEmployeeModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        addEmployee={addEmployee}
      />
    </div>
  );
}

export default Employees;