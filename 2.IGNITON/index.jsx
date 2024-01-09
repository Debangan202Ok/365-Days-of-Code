import React from "react";
import Btn from "./components/button";


const fun = (
  <h1>JavaScript is fun</h1>
)
//This is a react functional component which returns jsx
//This also known as component composition. because we are composing a component from other components
function Home() {
  return (
    <div>
      <h1>Hello,World from jsx</h1>
      {fun}
      <Btn />
    </div>
  );
}

export default Home;
