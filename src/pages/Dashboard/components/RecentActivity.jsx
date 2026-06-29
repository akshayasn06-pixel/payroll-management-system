const activities = [
  {
    id: 1,
    message: "Payroll generated for June",
    time: "10 mins ago",
  },
  {
    id: 2,
    message: "Leave request approved",
    time: "25 mins ago",
  },
  {
    id: 3,
    message: "New employee added",
    time: "1 hour ago",
  },
  {
    id: 4,
    message: "Attendance updated",
    time: "2 hours ago",
  },
];

function RecentActivity() {
  return (
    <section className="recent-activity">
      <h2>Recent Activity</h2>

      <div className="activity-list">
        {activities.map((activity) => (
          <div className="activity-item" key={activity.id}>
            <div className="activity-icon">✔</div>

            <div>
              <p>{activity.message}</p>
              <small>{activity.time}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentActivity;