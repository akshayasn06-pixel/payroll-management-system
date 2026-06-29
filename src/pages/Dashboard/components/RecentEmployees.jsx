const employees = [
  {
    id: "EMP001",
    name: "Akash",
    department: "HR",
    status: "Active",
  },
  {
    id: "EMP002",
    name: "Priya",
    department: "Finance",
    status: "Active",
  },
  {
    id: "EMP003",
    name: "Rahul",
    department: "IT",
    status: "Active",
  },
  {
    id: "EMP004",
    name: "Sneha",
    department: "Marketing",
    status: "On Leave",
  },
  {
    id: "EMP005",
    name: "John",
    department: "Sales",
    status: "Active",
  },
];

function RecentEmployees() {
  return (
    <section className="recent-employees">
      <h2>Recent Employees</h2>

      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>
                <span
                  className={
                    employee.status === "Active"
                      ? "status active"
                      : "status leave"
                  }
                >
                  {employee.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default RecentEmployees;