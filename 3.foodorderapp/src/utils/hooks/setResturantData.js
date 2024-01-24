import { API_URL } from "../constants";
import { useEffect, useState } from "react";

const setResturantData = () => {
  //! Using useEffect with IFEs to fecth data after intial rendering
  console.log("yes now i'm here");
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    console.log("fetching invoke");
    fetchData();
  }, []);

  //* IFEs -Invoke Function Expression
  const fetchData = async () => {
    const Data1 = await fetch(
      API_URL + "lat=12.960059122809971&lng=77.57337538383284"
    );
    const resData = await Data1.json();
    const resCardData =
      resData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log("data fetched successfully");
    setResInfo(resCardData);
  };

  return resInfo;
};

export default setResturantData;
