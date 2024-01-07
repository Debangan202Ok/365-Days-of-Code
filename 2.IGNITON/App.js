import React from "react";
import ReactDom from "react-dom/client"


const head = React.createElement("h1",{id:"top"},"Hello,React from NPM haha")

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(head)