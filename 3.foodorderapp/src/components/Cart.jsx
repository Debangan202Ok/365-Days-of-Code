import React from "react";
import Items from "./Item";

class Cart extends React.Component {
  constructor() {
    super();
    console.log("I'm constructor Method");
    this.state = {
      count: 0,
    };
  }

  render() {
    console.log("I'm Render Method");
    return (
      <div>
        <h1>Cart of Class:{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase
        </button>
        <Items name={"Burger"} />
      </div>
    );
  }
}

export default Cart;
