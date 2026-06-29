import {
  FaUsers,
  FaCalendarCheck,
  FaMoneyCheckAlt,
  FaCalendarAlt,
} from "react-icons/fa";

import SummaryCard from "./SummaryCard";

function SummaryCards() {
  return (
    <section className="summary-cards">

      <SummaryCard
        title="Total Employees"
        value="250"
        icon={<FaUsers />}
        color="#2563EB"
      />

      <SummaryCard
        title="Present Today"
        value="231"
        icon={<FaCalendarCheck />}
        color="#16A34A"
      />

      <SummaryCard
        title="Monthly Payroll"
        value="₹18.2 L"
        icon={<FaMoneyCheckAlt />}
        color="#F59E0B"
      />

      <SummaryCard
        title="Pending Leaves"
        value="12"
        icon={<FaCalendarAlt />}
        color="#DC2626"
      />

    </section>
  );
}

export default SummaryCards;