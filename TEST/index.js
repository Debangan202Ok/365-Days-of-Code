import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

export const loadData = () => {
  ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

document.getElementById("btn").addEventListener("click", loadData);




