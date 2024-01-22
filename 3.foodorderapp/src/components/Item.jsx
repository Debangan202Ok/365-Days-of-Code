import React from "react";

class Items extends React.Component {
  constructor(props) {
    super(props);
  }

 
  render() {
    const { name } = this.props;
    return (
      <div>
        <h3>Product Name: {name}</h3>
      </div>
    );
  }
}

export default Items;
