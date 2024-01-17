import { CDN_URL } from "../utils/constants";

const InfoCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    costForTwo,
    totalRatingsString,
    avgRatingString,
    cloudinaryImageId,
  } = resData;
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={CDN_URL + cloudinaryImageId} alt="image" />
      </div>
      <div className="body-container">
        <h2>{name}</h2>
        <h4>{cuisines}</h4>
        <div className="price-con">
          <p>{totalRatingsString}Rating</p>
          <p>{avgRatingString}</p>
        </div>
        <div className="bag-con">
          <button>Add to Cart</button>
          <h3>{costForTwo}</h3>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
