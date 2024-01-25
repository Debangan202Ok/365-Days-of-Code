import { useEffect, useState } from "react";
import { API_URL } from "../constants";

const useResturantData = (id) => {
  const [urlId, setUrlId] = useState(id);
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL + urlId);
        const data = await response.json();
        const resCardData = await
          data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        setResInfo((prevData) => [...prevData, ...resCardData]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [urlId]);

  return [resInfo, setUrlId];
};

export default useResturantData;
