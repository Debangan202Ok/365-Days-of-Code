import { useEffect, useState } from "react";
import InfoCard from "./infocard";
import Skeleton from "./Shimming";
import NotFound from "./NotFound";
import SrchArea from "./bodysmallcom/SrchArea";

const Body = () => {
  const [winSize, setWinSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWinSize(window.innerWidth);
    });
  }, []);
  const containerWidth = {
    width: `${Math.floor(winSize / 310) * 310}px`,
  };
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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&page_type=DESKTOP_WEB_LISTING"
    );
    const resData = await Data1.json();
    const resCardData =
      resData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setFilterRes(resCardData);
    setSrchRes(resCardData);
  };

  const hasMore = async () => {
    const moreData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const moreDataRes = await moreData.json();
    console.log(moreDataRes);
    const moreDataCard =
      moreDataRes?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // setFetchMore(moreDataCard);
    setFilterRes([...filterRes, ...moreDataCard]);
    setSrchRes([...srchRes, ...moreDataCard]);
  };

  const fetchMoreBtn = async () => {
    hasMore();
  };
  // condlitional rendering
  return filterRes.length === 0 ? (
    <Skeleton />
  ) : (
    <div className="body">
      <SrchArea
        inputVal={inputVal}
        setInputVal={setInputVal}
        srchVal={srchVal}
      />
      {srchRes.length === 0 && <NotFound />}
      <div className="con-wrap">
        <div className="res-container" style={{ width: containerWidth.width }}>
          {srchRes.map((item) => (
            <InfoCard key={item.info.id} resData={item.info} />
          ))}
        </div>
        {filterRes.length && srchRes.length !== 0 && (
          <button onClick={fetchMoreBtn}>SHOW MORE</button>
        )}
      </div>
    </div>
  );
};

export default Body;
