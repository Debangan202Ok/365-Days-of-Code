import { useEffect, useState } from "react";
import InfoCard from "./infocard";
import Skeleton from "./Shimming";

const Body = () => {
  const [filterRes, setFilterRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Data1 = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const resData = await Data1.json();
    const resCardData =
      resData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setFilterRes(resCardData);
  };
  // condlitional rendering 
  return filterRes.length === 0 ? (<Skeleton/>) : (
    <div className="body">
      <div className="custom-area">
        <div className="srch-area">
          <input className="srch-box" type="search" name="" id=""  placeholder="Search Food or Resturant"/>
          <button>Search</button>
        </div>
        <button className="btn-fltr">{"Filter"}</button>
      </div>
      <div className="res-container">
        {filterRes.map((item) => (
          <InfoCard key={item.info.id} resData={item.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
