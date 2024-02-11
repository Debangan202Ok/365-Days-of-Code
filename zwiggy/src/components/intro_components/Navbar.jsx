import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [winSize, setWinSize] = useState(window.innerWidth);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    const calculateBannerSize = () => {
      const newSize = Math.round(window.innerWidth / 60) + 1;
      setBanner(Array.from({ length: newSize }, (_, index) => index));
      setWinSize(window.innerWidth);
    };

    // Initial calculation
    calculateBannerSize();

    // Event listener for window resize
    const handleResize = () => {
      calculateBannerSize();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        <div className="w-full bg-[#FF1111] text-white text-center text-2xl py-2 font-bold border-b-4 border-white">
          <span>ZWIGGY</span>
        </div>
        <div className="flex">
          {banner.map((_, i) => (
            <div
              key={i}
              className="w-[60px] h-[45px] rounded-b-full shadow-md bg-[#FF1111]"
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
