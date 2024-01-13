import Oil from "../../public/oil.jpg";

const InfoCard = (props) => {
  const { resData } = props;
  const { name, description, price } = resData;

  return (
    <div className="card-container">
      <div className="img-container">
        <img src={Oil} alt="image" />
      </div>
      <div className="body-container">
        <h2>{name}</h2>
        <h4>{description}</h4>
        <div className="price-con">
          <h3>Price:</h3>
          <p>${price}</p>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default InfoCard;
