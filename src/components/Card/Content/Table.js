import Bar from "./Bar";

const Table = ({ data }) => {
  return (
    <div className="content-table-wrapper">
      <table className="content-table">
        <thead>
          <tr>
            <th>TERMS</th>
            <th>% OF TOTAL POSTS</th>
            <th># OF POSTS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>
                  <Bar percentage={row.count} total={100} />
                </td>
                <td>{row.count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
