import { useSelector } from "react-redux";
import Table from "./Content/Table";

const Content = ({ data }) => {
  const secondHeaderStatus = useSelector((state) => state.secondHeaderReducer);

  return (
    <section
      className={
        secondHeaderStatus.toggle
          ? "content-wrapper second-header-active"
          : "content-wrapper"
      }
    >
      {secondHeaderStatus.tab === "all" && (
        <>
          <h4 className="content-heading">TOP TERMS</h4>
          <Table data={data} />
        </>
      )}
    </section>
  );
};

export default Content;
