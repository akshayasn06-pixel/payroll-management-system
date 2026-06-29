import "./Dashboard.css";

import WelcomeBanner from "./components/WelcomeBanner";
import SummaryCards from "./components/SummaryCards";
import RecentEmployees from "./components/RecentEmployees";

function Dashboard() {
  return (
    <div className="dashboard">
  <WelcomeBanner name="Akshaya" />

  <SummaryCards />

  <RecentEmployees />
</div>
  );
}

export default Dashboard;