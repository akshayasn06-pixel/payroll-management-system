import { FaSearch } from "react-icons/fa";

function EmployeeSearch({ search, setSearch }) {
  return (
    <div className="employee-search">
      <FaSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default EmployeeSearch;