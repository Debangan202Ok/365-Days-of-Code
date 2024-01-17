import { useEffect, useState } from "react";
import InfoCard from "./infocard";
import Skeleton from "./Shimming";
import NotFound from "./NotFound";

const Body = () => {
  console.log("Body")
  const [filterRes, setFilterRes] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [srchRes, setSrchRes] = useState([]);
  const srchVal = () => {
    const filterData = filterRes.filter((item) =>
      item.info.name.toLowerCase().includes(inputVal.toLowerCase())
    );
    setSrchRes(filterData);
  };
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
    setSrchRes(resCardData);
  };
  // condlitional rendering
  return filterRes.length === 0 ? (
    <Skeleton />
  ) : (
    <div className="body">
      <div className="custom-area">
        <div className="srch-area">
          <input
            className="srch-box"
            type="search"
            name=""
            id=""
            placeholder="Search Food or Resturant"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button onClick={srchVal}>Search</button>
        </div>
        <button className="btn-fltr">{"Filter"}</button>
      </div>
      {srchRes.length === 0 && <NotFound />}
      <div className="res-container">
        {srchRes.map((item) => (
          <InfoCard key={item.info.id} resData={item.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
