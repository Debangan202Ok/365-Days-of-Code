import React from "react";
import SkelCard from "./SkelCard";

function Skeleton() {
  return (
    <div>
      <div className="custom-area-skeleton">
        <div></div>
      </div>
      <div className="res-container">
          <SkelCard />
          <SkelCard />
          <SkelCard />
          <SkelCard />
          <SkelCard />
          <SkelCard />
          <SkelCard />
      </div>
    </div>
  );
}

export default Skeleton;
