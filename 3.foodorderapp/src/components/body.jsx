import { useState } from "react";
import InfoCard from "./infocard";
import { Data } from "../utils/mockData";

const Body = () => {
  const[filterRes,setFilterRes]=useState(Data);

  const filterItem = () => {
    setFilterRes(filterRes.filter((item) => item.price >= 100))
  };
  return (
    <div className="body">
      <div className="custom-area">
        <button onClick={filterItem}>Filter to Top</button>
      </div>
      {filterRes.map((item, index) => (
        <InfoCard key={index} resData={item} />
      ))}
    </div>
  );
};

export default Body;
