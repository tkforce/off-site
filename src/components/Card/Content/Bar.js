const Bar = ({ percentage, total }) => {
  return (
    <div className="bar-wrapper">
      <div
        className="percentage-bar"
        style={{ width: `${(percentage / total) * 100}%` }}
      />
      <span className="percentage-txt">{`${percentage}%`}</span>
    </div>
  );
};

export default Bar;
