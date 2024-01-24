import { useEffect, useState } from "react";
import InfoCard from "./infocard";
import Skeleton from "./Shimming";
import NotFound from "./NotFound";
import SrchArea from "./bodysmallcom/SrchArea";
import { Link } from "react-router-dom";
import setResturantData from "../utils/hooks/setResturantData";

const Body = () => {
  //states
  console.log("Hii, i'm main body");
  const [winSize, setWinSize] = useState(window.innerWidth);
  // const [inputVal, setInputVal] = useState("");
  // const [srchRes, setSrchRes] = useState([]);
  const filterRes = setResturantData();
  console.log(filterRes);
  //style objects
  const containerWidth = {
    width: `${Math.floor(winSize / 310) * 310}px`,
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWinSize(window.innerWidth);
    });
    console.log("voila rerender done");
  }, []);

  //element functions
  // const srchVal = () => {
  //   const filterData = filterRes.filter((item) =>
  //     item.info.name.toLowerCase().includes(inputVal.toLowerCase())
  //   );
  //   setSrchRes(filterData);
  // };
  console.log("i'm still in body");
  // const fetchMoreBtn = async () => {
  //   //* In IFEs Call
  //   (async () => {
  //     const moreData = await fetch(
  //       API_URL + "lat=12.9351929&lng=77.62448069999999"
  //     );
  //     const moreDataRes = await moreData.json();
  //     const moreDataCard =
  //       moreDataRes?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants;
  //     console.log(moreDataRes)
  //     setFilterRes([...filterRes, ...moreDataCard]);
  //     setSrchRes([...srchRes, ...moreDataCard]);
  //   })();
  // };

  //! Rendering
  //* condlitional rendering
  console.log(filterRes);
  return filterRes.length === 0 ? (
    <Skeleton />
  ) : (
    <div className="body">
      {/* <SrchArea
        inputVal={inputVal}
        setInputVal={setInputVal}
        srchVal={srchVal}
      /> */}
      {/* {srchRes.length === 0 && <NotFound />} */}
      <div className="con-wrap">
        <div className="res-container" style={{ width: containerWidth.width }}>
          {filterRes.map((item) => (
            <Link to={`/resturant/${item.info.id}`} key={item.info.id}>
              <InfoCard resData={item.info} />
            </Link>
          ))}
        </div>
        {/* {srchRes.length !== 0 && inputVal.length === 0 && (
          <span className="show-more" onClick={fetchMoreBtn}>
            SHOW MORE {">"}
          </span>
        )} */}
      </div>
    </div>
  );
};

export default Body;
