import React from "react";
import ReactDom from "react-dom/client";
import "./src/styles/globals.css";
import router from "./src/routes/RouterLayout";
import {RouterProvider} from "react-router-dom"

ReactDom.createRoot(document.getElementById("root")).render(<RouterProvider router={router}/>)