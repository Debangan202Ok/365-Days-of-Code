import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import Skeleton from "./Shimming";

const ResturrantCard = () => {
  let { id } = useParams();
  const [resCardData, setResCardData] = useState([]);
  const [resMenuData, setResMenuData] = useState([]);
  const [additem, setAddItem] = useState(100);

  useEffect(() => {
    resturantDetails();
  }, []);

  const resturantDetails = async () => {
    const resturantData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.960059122809971&lng=77.57337538383284&restaurantId=" +
        id
    );
    const resData = await resturantData.json();
    const resCardData = resData?.data?.cards[0]?.card?.card?.info;
    const resMenuData =
      resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
        ?.card?.itemCards;
    setResCardData(resCardData);
    setResMenuData(resMenuData);
  };

  return resCardData.length === 0 ? (
    <Skeleton />
  ) : (
    <div className="res-card">
      <div className="res-header">
        <div className="res-header-text">
          <h1>{resCardData?.name}</h1>
          <p>{resCardData?.cuisines?.join(", ")}</p>
          <p>
            {resCardData?.areaName+","} {resCardData?.sla?.lastMileTravelString}
          </p>
          <p>{resCardData?.sla?.slaString.toLowerCase()}</p>
        </div>
        <div className="res-rating">
          <h2>{resCardData?.avgRating}</h2>
          <p>{resCardData?.totalRatingsString}</p>
        </div>
      </div>
      {resMenuData.map((item) => {
        return (
          <div key={item?.card?.info?.id} className="menu-box">
            <div className="menu-text">
              <h3>{item?.card?.info?.name}</h3>
              <p>{item?.card?.info?.description}</p>
              <h5>
                ₹
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </h5>
            </div>
            <div className="menu-image">
                <img src={CDN_URL + item?.card?.info?.imageId} alt="" />
              <div className="add-to-cart-con">
                <div onClick={()=> {
                  setAddItem(additem => additem+1)
                }}>ADD:{additem}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResturrantCard;
