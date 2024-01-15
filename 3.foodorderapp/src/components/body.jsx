import { useEffect, useState } from "react";
import InfoCard from "./infocard";

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

  return (
    <div className="body">
      <div className="custom-area">
        <button>{"Filter"}</button>
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
