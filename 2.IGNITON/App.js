import React from "react";
import ReactDom from "react-dom/client";
import Home from ".";

// const head = React.createElement("h1",{id:"top"},"Hello,React from NPM haha")
//jsx heading 
//This is react Element. not a component
const jsxHeading = <h1>Hello, Jsx</h1>
console.log(typeof jsxHeading)
//JSX transpiled before it reach js (-PARCEL -BABEL)
const root = ReactDom.createRoot(document.getElementById("root"));
// console.log(React.StrictMode);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
