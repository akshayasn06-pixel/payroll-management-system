import { useState } from "react";

function AddEmployeeModal({
  isModalOpen,
  setIsModalOpen,
  addEmployee,
}) {

  const [formData, setFormData] = useState({
    name: "",
    department: "",
    role: "",
    email: "",
    phone: "",
    status: "Active",
  });

  if (!isModalOpen) return null;

  function handleChange(e) {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  }

  return (

    <div className="modal-overlay">

      <div className="modal">

        <h2>Add Employee</h2>

        <div className="form-group">

          <label>Employee Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Department</label>

          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Role</label>

          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Phone</label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Status</label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option>Active</option>
            <option>On Leave</option>
          </select>

        </div>

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>

          <button
            className="save-btn"
            onClick={() => {

                addEmployee(formData);

                setFormData({
                name: "",
                department: "",
                role: "",
                email: "",
                phone: "",
                status: "Active",
                });
            }}
            >
            Save Employee
            </button>
        </div>

      </div>

    </div>

  );
}

export default AddEmployeeModal;