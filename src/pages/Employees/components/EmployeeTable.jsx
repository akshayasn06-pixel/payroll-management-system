import EmployeeRow from "./EmployeeRow";
function EmployeeTable({ employees }){
  return (
    <div className="employee-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {employees.map((employee) => (
            <EmployeeRow
             key={employee.id}
             employee={employee}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default EmployeeTable;