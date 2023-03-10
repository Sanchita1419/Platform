// import React from "react";
// import {
//   ScatterChart,
//   Scatter,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
// } from "recharts";

// const data01 = [
//   { x: 100, y: 60, z: 200 },
//   { x: 120, y: 30, z: 260 },
//   { x: 170, y: 50, z: 400 },
//   { x: 140, y: 55, z: 280 },
//   { x: 150, y: 70, z: 500 },
//   { x: 110, y: 58, z: 200 },
// ];

// const data02 = [
//   { x: 300, y: 300, z: 200 },
//   { x: 400, y: 500, z: 260 },
//   { x: 200, y: 700, z: 400 },
//   { x: 340, y: 350, z: 280 },
//   { x: 560, y: 500, z: 500 },
//   { x: 230, y: 780, z: 200 },
//   { x: 500, y: 400, z: 200 },
//   { x: 300, y: 500, z: 260 },
//   { x: 240, y: 300, z: 400 },
//   { x: 320, y: 550, z: 280 },
//   { x: 500, y: 400, z: 500 },
//   { x: 420, y: 280, z: 200 },
// ];
// const ScatterCharts = () => {
//   return (
//     <ScatterChart
//       width={500}
//       height={400}
//       margin={{
//         top: 20,
//         right: 20,
//         bottom: 20,
//         left: 20,
//       }}
//     >
//       {/* <CartesianGrid /> */}
//       <XAxis type="number" dataKey="x" name="height" unit="cm" />
//       <YAxis
//         yAxisId="left"
//         type="number"
//         dataKey="y"
//         name="weight"
//         unit="kg"
//         stroke="#8884d8"
//       />
//       <YAxis
//         yAxisId="right"
//         type="number"
//         dataKey="y"
//         name="weight"
//         unit="kg"
//         orientation="right"
//         stroke="#82ca9d"
//       />
//       <Tooltip cursor={{ strokeDasharray: "3 3" }} />
//       <Scatter yAxisId="left" name="A school" data={data01} fill="#8884d8" />
//       {/* <Scatter yAxisId="right" name="A school" data={data02} fill="#82ca9d" /> */}
//     </ScatterChart>
//   );
// };

// export default ScatterCharts;

import React, { useEffect, useState } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import moment from "moment";
import { axiosInstance } from "../../config";

// const data01 = [
//   { x: 1, y: 1 },
//   { x: 2, y: 3 },
//   { x: 3, y: 4 },
//   { x: 4, y: 2 },
//   { x: 5, y: 4 },
//   { x: 6, y: 5 },
// ];

const data01 = [
  { x: "10.10", y: 1 },
  { x: "11.45", y: 1 },
  { x: "13.36", y: 1 },
  { x: "10.33", y: 1 },
  { x: "20.22", y: 1 },
];
// const data03 = [
//   { x: 1, y: 2 },
//   { x: 2, y: 4 },
//   { x: 3, y: 3 },
//   { x: 4, y: 1 },
//   { x: 5, y: 5 },
//   { x: 6, y: 1 },
// ];
// const data04 = [
//   { x: 1, y: 3 },
//   { x: 2, y: 5 },
//   { x: 3, y: 1 },
//   { x: 4, y: 2 },
//   { x: 5, y: 4 },
//   { x: 6, y: 5 },
// ];
const ScatterCharts = () => {
  const [graphData, setGraphData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("/data/typetime");
      // console.log(response);
      setGraphData(response.data);
    };
    fetchData();
  }, []);
  console.log(graphData);
  return (
    <ScatterChart
      width={550}
      height={330}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      {/* <CartesianGrid /> */}
      <XAxis
        // type="number"
        dataKey="time"
        name="Time"
        unit=""
        //domain={[0, 24]}
        //ticks={["0", "4", "8", "12", "16", "20", "24"]}
        //ticks={[0, 4, 8, 12, 16, 20, 24]}
        //domain={["auto", "auto"]}

        //tickFormatter={(timeStr) => moment(timeStr).format("HH:mm:ss")}
        minTickGap={2}
        label={{ value: "Time", dy: 20 }}
      />
      <YAxis
        yAxisId="left"
        // type="number"
        dataKey="defect_class"
        name="Defect Type"
        unit=""
        ticks={[1, 2, 3, 4]}
        //ticks={["Crack", "Porosity", "Weld", "Others"]}
        stroke="#455e60"
        label={{ value: "Defect Type", angle: -90, dx: -10 }}
      />
      {/* <YAxis
        yAxisId="right"
        type="number"
        dataKey="y"
        name="weight"
        unit="kg"
        orientation="right"
        stroke="#82ca9d"
      /> */}
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      {/* <Scatter
        yAxisId="left"
        name="Type 1"
        data={data01}
        fill="#f6932f"
        shape="triangle"
        legendType="triangle"
      /> */}
      <Scatter
        yAxisId="left"
        name="Crack"
        data={graphData}
        fill="#455e60"
        shape="star"
        legendType="star"
      />
      {/* <Scatter
        yAxisId="left"
        name="Type 3"
        data={data03}
        fill="#455e60"
        shape="circle"
        legendType="circle"
      /> */}
      {/* <Scatter
        yAxisId="left"
        name="Type 4"
        data={data04}
        fill="#f6932f"
        shape="square"
        legendType="square"
      /> */}
      <Legend verticalAlign="top" align="right" layout="vertical" />
      {/* <Scatter yAxisId="right" name="A school" data={data02} fill="#82ca9d" /> */}
    </ScatterChart>
  );
};

export default ScatterCharts;
