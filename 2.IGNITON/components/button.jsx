import React from "react";
import { useState } from "react";

function Btn() {
    let [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
        console.log(count);
    }
    return (
        <button onClick={increment}>Click Me:{count}</button>
    )
}

export default Btn;