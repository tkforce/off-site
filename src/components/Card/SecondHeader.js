import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import {
  ToggleSecondHeader,
  SetSecondHeaderTab
} from "../../actions/secondHeader";

const SecondHeader = () => {
  const dispatch = useDispatch();
  const secondHeaderStatus = useSelector((state) => state.secondHeaderReducer);

  const clickHideHandler = () => dispatch(ToggleSecondHeader());
  const clickTabHandler = (tabName) => dispatch(SetSecondHeaderTab(tabName));

  const tabList = [
    {
      name: "all",
      icon: null
    },
    {
      name: "twitter",
      icon: <FaTwitter />
    },
    {
      name: "facebook",
      icon: <FaFacebookF />
    },
    {
      name: "instagram",
      icon: <FaInstagram />
    },
    {
      name: "youtube",
      icon: <FaYoutube />
    }
  ];

  return (
    <nav className="second-header">
      <ul className="nav-bar">
        {tabList.map((tab) => {
          return (
            <li
              key={tab.name}
              className={
                secondHeaderStatus.tab === tab.name
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={() => clickTabHandler(tab.name)}
            >
              {tab.icon ? tab.icon : tab.name}
            </li>
          );
        })}
      </ul>
      <div className="nav-btn-hide" onClick={() => clickHideHandler()}>
        HIDE
      </div>
    </nav>
  );
};

export default SecondHeader;
