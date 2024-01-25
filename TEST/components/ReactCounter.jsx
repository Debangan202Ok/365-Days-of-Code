import React, { useState } from "react";

function ReactCounter() {
  const [val, setVal] = useState(0);
  const decBtn = () => {
    setVal((preVal) => preVal - 1);
  };
  const incBtn = () => {
    setVal((preVal) => preVal + 1);
  };
  return (
    <>
      <h2>React Counter</h2>
      <p>Awesome! it's Work totally fine.</p>
      <button onClick={decBtn}>Decrease</button>
      <span>{val}</span>
      <button onClick={incBtn}>Increase</button>
    </>
  );
}

export default ReactCounter;
