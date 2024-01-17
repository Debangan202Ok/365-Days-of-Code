const NavBar = () => {
  const ListStyle = {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
  };

  return (
    <nav>
      <div><span>ZWIGGY</span></div>
      <div className="navList">
        <ul style={ListStyle}>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>CART</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
