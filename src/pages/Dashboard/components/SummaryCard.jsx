function SummaryCard({ title, value, icon, color }) {
  return (
    <div
      className="summary-card"
      style={{
        borderLeft: `6px solid ${color}`,
      }}
    >
      <div className="summary-card__icon">
        {icon}
      </div>

      <div className="summary-card__content">
        <h3>{title}</h3>

        <h2>{value}</h2>
      </div>
    </div>
  );
}

export default SummaryCard;