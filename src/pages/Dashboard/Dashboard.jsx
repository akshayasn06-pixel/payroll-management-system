import "./Dashboard.css";

import WelcomeBanner from "./components/WelcomeBanner";
import SummaryCards from "./components/SummaryCards";
import RecentEmployees from "./components/RecentEmployees";
import RecentActivity from "./components/RecentActivity";

function Dashboard() {
  return (
    <div className="dashboard">
      <WelcomeBanner name="Akshaya" />

      <SummaryCards />

      <div className="dashboard-grid">
        <RecentEmployees />
        <RecentActivity />
      </div>
    </div>
  );
}

export default Dashboard;