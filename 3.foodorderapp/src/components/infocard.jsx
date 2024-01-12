const InfoCard = () => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src="../../public/oil.jpg" alt="image" />
      </div>
      <div className="body-container">
        <h2>Product Name</h2>
        <h4>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
          ipsa?
        </h4> 
        <div className="price-con">
        <h3>Price</h3>
        <p>$100</p>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default InfoCard;
