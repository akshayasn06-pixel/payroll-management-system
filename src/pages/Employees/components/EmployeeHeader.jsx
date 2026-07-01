import { FaPlus } from "react-icons/fa";

function EmployeeHeader({ setIsModalOpen }) {
  return (
    <div className="employee-header">

      <div>
        <h1>Employees</h1>
        <p>Manage all employees in your organization.</p>
      </div>

      <button
        className="add-btn"
        onClick={() => setIsModalOpen(true)}
      >
        <FaPlus />
        <span>Add Employee</span>
      </button>

    </div>
  );
}

export default EmployeeHeader;