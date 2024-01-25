import React from "react";
import Items from "./Item";

class Cart extends React.Component {
  constructor() {
    super();
    console.log("I'm constructor Method");
    this.state = {
      jsonUserData: {},
    };
  }

  componentDidMount() {
    (async () => {
      const githubUserData = await fetch(
        "https://api.github.com/users/debangan202ok"
      );
      const jsonUserData = await githubUserData.json();
      this.setState({ jsonUserData: jsonUserData });
    })();
  }

  render() {
    const { name, bio, login } = this.state.jsonUserData;
    console.log("I'm Render Method");
    return (
      <div>
        <h1>{name}</h1>
        <h4>{bio}</h4>
        <h4>USER NAME: {login}</h4>
        <Items name={"Burger"} />
      </div>
    );
  }
}

export default Cart;
