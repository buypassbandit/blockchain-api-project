import React from "react";
import {
  LineChart,
  //   Brush,
  Line,
  Tooltip,
  // CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./LineGraph.module.css";

//Checks if max width is 560px and then sets new values to graph width and height
const LineGraph = (props) => {
  let width = "";
  let height = "";
  const media = () => {
    const mobile = window.matchMedia("(max-width: 560px)");
    if (mobile.matches) {
      width = 250;
      height = 250;
    } else {
      width = 500;
      height = 450;
    }
  };
  media();

  return (
    <div className={styles.container}>
      <h3>{props.currencyName}</h3>
      <div className={styles.graph}>
        <LineChart
          margin={{ left: 17, right: 6, top: 10 }}
          className={styles.graphBackground}
          width={width}
          height={height}
          data={props.data}
        >
          <Line
            dot={false}
            type="monotone"
            dataKey="price"
            stroke="#4592af"
            strokeWidth={1.5}
          />
          {/* <CartesianGrid stroke="grey" /> */}
          <XAxis
            padding={{ right: 40 }}
            dataKey={"time"}
            tick={{ fill: "white" }}
          />
          <YAxis padding={{ top: 60 }} tick={{ fill: "white" }} />
          {/* <Brush startIndex={0} dataKey="time" height={20} stroke="#4a4844" /> */}
          <Tooltip className={styles.xscroll} />
        </LineChart>
        <div>
          <button className={styles.button} onClick={props.yearClickHandler}>
            1 Year
          </button>
          <button className={styles.button} onClick={props.monthClickHandler}>
            1 Month
          </button>
          <button className={styles.button} onClick={props.weekClickHandler}>
            1 Week
          </button>
        </div>
      </div>
    </div>
  );
};
export default LineGraph;
