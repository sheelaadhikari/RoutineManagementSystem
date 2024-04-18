/* eslint-disable no-unused-vars */
import React from "react";
import { createArray } from "../../utils/utils";
import { PX_PER_CLASS, PX_PER_MIN } from "./CurrentClasses";
const nCols = 20;
const backgroundArray = createArray(24, nCols);

export const BackgroundLayer = () => {
    const currentTime= new Date();
    const hoursFrom= currentTime.getHours();
    const minutesFrom=currentTime.getMinutes();
  return (
    <div style={{ position: "absolute" }}>
      <div>
        <div
          style={{
            height: "1px",
            width: `${nCols * PX_PER_CLASS}px`,
            backgroundColor: "green",
            opacity: 0.5,
            top:`${hoursFrom*PX_PER_MIN*60+minutesFrom*PX_PER_MIN}px`,
            position: "absolute",
          }}
        />
        {backgroundArray.map((row, i) => {
          return (
            <div
              key={i}
              style={{ display: "flex", width: `${nCols * PX_PER_CLASS}px` }}
            >
              {row.map((item, j) => {
                return (
                  <div
                    key={j}
                    style={{
                      width: `${PX_PER_CLASS}px`,
                      height: `${PX_PER_MIN * 60}px`,
                      border: "1px solid #cccccc33",
                    }}
                  ></div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
