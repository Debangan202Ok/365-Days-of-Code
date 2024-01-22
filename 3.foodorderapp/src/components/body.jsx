import { useEffect, useState } from "react";
import InfoCard from "./infocard";
import Skeleton from "./Shimming";
import NotFound from "./NotFound";
import SrchArea from "./bodysmallcom/SrchArea";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  //states
  const [winSize, setWinSize] = useState(window.innerWidth);
  const [filterRes, setFilterRes] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [srchRes, setSrchRes] = useState([]);

  //style objects
  const containerWidth = {
    width: `${Math.floor(winSize / 310) * 310}px`,
  };

  // Side effects
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWinSize(window.innerWidth);
    });
    console.log(filterRes);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  //Api calls
  const fetchData = async () => {
    const Data1 = await fetch(
      API_URL + "lat=12.960059122809971&lng=77.57337538383284"
    );
    const resData = await Data1.json();
    const resCardData =
      resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setFilterRes(resCardData);
    setSrchRes(resCardData);
  };
  if (filterRes.length == 0) {
  }
  const hasMore = async () => {
    const moreData = await fetch(
      API_URL + "lat=12.9351929&lng=77.62448069999999"
    );
    const moreDataRes = await moreData.json();
    const moreDataCard =
      moreDataRes?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setFilterRes([...filterRes, ...moreDataCard]);
    setSrchRes([...srchRes, ...moreDataCard]);
  };

  //element functions
  const srchVal = () => {
    const filterData = filterRes.filter((item) =>
      item.info.name.toLowerCase().includes(inputVal.toLowerCase())
    );
    setSrchRes(filterData);
  };

  const fetchMoreBtn = async () => {
    hasMore();
  };

  //! Rendering
  //* condlitional rendering
  // console.log(filterRes);
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
            <Link to={`/resturant/${item.info.id}`} key={item.info.id}>
              <InfoCard resData={item.info} />
            </Link>
          ))}
        </div>
        {srchRes.length !== 0 && inputVal.length == 0 && (
          <span className="show-more" onClick={fetchMoreBtn}>
            SHOW MORE {">"}
          </span>
        )}
      </div>
    </div>
  );
};

export default Body;
