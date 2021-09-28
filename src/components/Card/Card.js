import { useSelector } from "react-redux";

import Header from "./Header";
import SecondHeader from "./SecondHeader";
import Content from "./Content";
import Footer from "./Footer";

const Card = ({ data }) => {
  const secondHeaderStatus = useSelector((state) => state.secondHeaderReducer);

  return (
    <>
      <Header />
      {secondHeaderStatus.toggle && <SecondHeader />}
      <Content data={data} />
      <Footer />
    </>
  );
};

export default Card;
