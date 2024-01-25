import { useEffect, useState } from "react";
import InfoCard from "./infocard";
import Skeleton from "./Shimming";
import NotFound from "./NotFound";
import SrchArea from "./bodysmallcom/SrchArea";
import { Link } from "react-router-dom";
import useResturantData from "../utils/hooks/useResturantData";

const Body = () => {
  //states
  const [winSize, setWinSize] = useState(window.innerWidth);
  const [ResData, setResData] = useResturantData(
    "lat=12.960059122809971&lng=77.57337538383284"
  );
  //style objects
  const containerWidth = {
    width: `${Math.floor(winSize / 310) * 310}px`,
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWinSize(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWinSize(window.innerWidth);
      });
    };
  }, []);

  const fetchMoreBtn = () => {
    setResData("lat=12.9351929&lng=77.62448069999999");
    console.log("clicked");
  };

  //! Rendering
  //* condlitional rendering
  return ResData.length === 0 ? (
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
          {ResData.map((item) => (
            <Link to={`/resturant/${item.info.id}`} key={item.info.id}>
              <InfoCard resData={item.info} />
            </Link>
          ))}
        </div>
        {/* {srchRes.length !== 0 && inputVal.length === 0 && ( */}
        <span className="show-more" onClick={fetchMoreBtn}>
          SHOW MORE {">"}
        </span>
        {/* )} */}
      </div>
    </div>
  );
};

export default Body;
