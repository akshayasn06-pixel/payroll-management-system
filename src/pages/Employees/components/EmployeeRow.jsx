import { FaEdit, FaTrash } from "react-icons/fa";

function EmployeeRow({ employee }) {
  return (
    <tr>

      <td>{employee.id}</td>

      <td>{employee.name}</td>

      <td>{employee.department}</td>

      <td>{employee.role}</td>

      <td>

        <span
          className={`status ${
           employee.status === "Active"
            ? "active"
            : "leave"
         }`}
        >

          {employee.status}

        </span>

      </td>

      <td>

        <button className="action-btn edit">

          <FaEdit />

        </button>

        <button className="action-btn delete">

          <FaTrash />

        </button>

      </td>

    </tr>
  );
}

export default EmployeeRow;