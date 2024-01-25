import React from "react";
import ReactDom from "react-dom/client";
import { lazy } from "react";

const App = lazy(() => import("./App"));
export const loadData = () => {
  ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <React.Suspense fallback={<h1>Loading</h1>}>
        <App />
      </React.Suspense>
    </React.StrictMode>
  );
};

document.getElementById("btn").addEventListener("click", loadData);
