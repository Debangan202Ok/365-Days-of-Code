import React, { useState, useEffect } from "react";

function Btn() {
  let [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    console.log(count); // Log the updated count immediately after the state has been updated
  }, [count]);

  return <button onClick={increment}>Click Me: {count}</button>;
}

export default Btn;
