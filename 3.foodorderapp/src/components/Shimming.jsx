import React, { useState } from "react";
import SkelCard from "./SkelCard";
import {v4 as uuid} from "uuid"

function Skeleton() {
  const load = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="cus-area-con">
      <div className="custom-area-skeleton">
        <div></div>
      </div>
      <div className="res-container">
        {load.map(() => (
          <SkelCard key={uuid()} />
        ))}
      </div>
    </div>
  );
}

export default Skeleton;
