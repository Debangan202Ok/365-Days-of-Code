import React from "react";
import ReactDom from "react-dom/client"
import Home from ".";


const head = React.createElement("h1",{id:"top"},"Hello,React from NPM haha")

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<Home/>)


// "use strict"
// a=2
// console.log(a)
// var a = 2


// var Add = (a,b) => {
//     return a+b   //ecma script 5/6
// }

// console.log(Add(2,3));
// var Obj1 = {
//     names1: "Rohan",
//     PrintName1: function () {
//         console.log(this.names1);
//     }
// }

// Obj1.PrintName1()