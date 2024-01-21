import { Link } from "react-router-dom";

const NavBar = () => {
  const ListStyle = {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
  };

  return (
    <nav>
      <div className="logo">
        <span>ZWIGGY</span>
      </div>
      <div className="navList">
        <ul style={ListStyle}>
          <li><Link to={`/`}>HOME</Link></li>
          <li><Link to={`/Cart`}>CART</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
