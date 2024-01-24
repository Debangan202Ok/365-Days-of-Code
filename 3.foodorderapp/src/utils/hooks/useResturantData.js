import { API_URL } from "../constants";
import { useEffect, useState } from "react";

const useResturantData = (id) => {
  const [resInfo, setResInfo] = useState([]);

  //! Using useEffect with IFEs to fecth data after intial rendering
  useEffect(() => {
    //* IFEs -Invoke Function Expression
    (async () => {
      const Data1 = await fetch(API_URL + id);
      const resData = await Data1.json();
      const resCardData =
        resData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setResInfo((prevData) => [...prevData, ...resCardData]);
    })();
  }, []);

  console.log(resInfo);
  return resInfo;
};

export default useResturantData;
