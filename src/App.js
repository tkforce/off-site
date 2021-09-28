import { Provider } from "react-redux";
import store from "./store/index";
import Card from "./components/Card/Card";

import "./styles.css";

export default function App() {
  const data = [
    {
      name: "iPhone",
      count: 90
    },
    {
      name: "Android",
      count: 80
    },
    {
      name: "Samsung",
      count: 70
    },
    {
      name: "Sony",
      count: 60
    },
    {
      name: "HTC",
      count: 50
    },
    {
      name: "ASUS",
      count: 40
    },
    {
      name: "小米",
      count: 30
    },
    {
      name: "Nokia",
      count: 20
    }
  ];

  return (
    <Provider store={store}>
      <div className="App">
        <Card data={data} />
      </div>
    </Provider>
  );
}
