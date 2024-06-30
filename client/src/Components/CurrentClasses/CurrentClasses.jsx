/* eslint-disable no-unused-vars */
import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { faculties, periods } from "../../data";
import { BackgroundLayer } from "./BackgroundLayer";

export const PX_PER_MIN = 1.5;
export const PX_PER_CLASS = 100;

const columns = [
  {
    title: "BCA-I",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "BCA-II",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "BCA-III",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "BCA-IV",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    money: "￥300,000.00",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    money: "￥1,256,000.00",
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    money: "￥120,000.00",
    address: "Sydney No. 1 Lake Park",
  },
];
const CurrentClasses = () => {
  const [routine, setRoutine] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "http://localhost:8001/api/v1/bca/get-singledr/Wednesday"
        );
        setRoutine(res.data);
        console.log("the data is ", res.data)// Assuming the response is the entire object
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="relative">
        <div className="border border-black">
          {periods.periods.map((item) => {
            const startTimeString = new Date(item.startTime)
              .toTimeString()
              .slice(0, 5);
            const endTimeString = new Date(item.endTime)
              .toTimeString()
              .slice(0, 5);

            const duration = item.endTime - item.startTime;
            const height = `${duration * ((PX_PER_MIN * 60) / 3600000)}px`;

            const hoursFrom = new Date(item.startTime).getHours();
            const minutesFrom = new Date(item.startTime).getMinutes();
            const fromTop = `${
              hoursFrom * 60 * PX_PER_MIN + minutesFrom * PX_PER_MIN
            }px`;
            const currentTime = new Date().getTime();
            const isClassActive =
              currentTime >= item.startTime && currentTime <= item.endTime;
            const fromLeft =
              faculties[item.faculty].left + (item.class - 1) * PX_PER_CLASS;
            const backgroundColor = faculties[item.faculty].color;

            return (
              <div className=""
                style={{
                  padding: "4px",
                  backgroundColor: isClassActive
                    ? "#0000ff55"
                    : backgroundColor,
                  width: "100px",
                  margin: "1px",
                  position: "absolute",
                  left: `${fromLeft}px`,
                  top: fromTop,
                  height: height,
                }}
                key={item.id}
              >
                <div>
                  {startTimeString}-{endTimeString}
                </div>
                <div>
                  {item.faculty} | {item.class}
                </div>
              </div>
            );
          })}
        </div>
      <BackgroundLayer />
      </div>
    </div>
  );
};
export default CurrentClasses;
