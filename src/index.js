import ReactDOM from "react-dom/client";
import shop from "./context/store";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={shop}>
    <App />
  </Provider>
);
