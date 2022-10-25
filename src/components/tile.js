import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Tile = ({ id, title, image, timeframes, color }) => {
  const dispatch = useDispatch();
  return (
    <div
      key={id}
      className="tile"
      style={{
        backgroundImage: `url(${image})`,
        backgroundColor: `#${color}`,
      }}>
      <div className="info-tile">
        <span className="title-container">
          <p>{title}</p>
          <svg
            width="21"
            height="5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 5">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fillRule="evenodd"
            />
          </svg>
        </span>
        <span className="hour-container">
          <h1>current timeframe Hrs</h1>
          <p>Last week - previous timefram hrs</p>
        </span>
      </div>
    </div>
  );
};

export default Tile;
