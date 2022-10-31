import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./features/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* wrap entire app in Provider and 
pass store as a prop to set global state */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
