import React from "react";

function VanilaCounter() {
  let val = 0;
  const decBtn = () => {
    val -= 1;
    console.log(`vanila counter values decrease to ${val}`);
  };
  const incBtn = () => {
    val += 1;
    console.log(`vanila counter values increase to ${val}`);
  };
  return (
    <div>
      <h2>Vanila Counter</h2>
      <p>
        Probably you clicking on the button and value not chnaging right!!! ahh!
        that's totally fine. now open your developer console and see value is
        updating but might not effect in the ui.
      </p>
      <button onClick={decBtn}>Decrease</button>
      <span>{val}</span>
      <button onClick={incBtn}>Increase</button>
    </div>
  );
}

export default VanilaCounter;
