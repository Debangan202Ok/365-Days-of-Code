import React from "react";

class Items extends React.Component {
  constructor(props) {
    super(props);
    console.log("I'm child Constructor")
  }
  
 
  render() {
    console.log("I'm Child render")
    const { name } = this.props;
    return (
      <div>
        <h3>Product Name: {name}</h3>
      </div>
    );
  }
}

export default Items;
