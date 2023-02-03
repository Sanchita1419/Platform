import React, { useEffect, useState } from "react";

import { axiosInstance } from "../../config";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// const data = [
//   {
//     name: "Defect 1",
//     Device1: 300,
//     Device2: 139,
//   },
//   {
//     name: "Defect 2",
//     Device1: 200,
//     Device2: 780,
//     amt: 229,
//   },
//   {
//     name: "Defect 3",
//     Device1: 278,
//     Device2: 398,
//     amt: 200,
//   },
//   {
//     name: "Defect 4",
//     Device1: 250,
//     Device2: 358,
//     amt: 200,
//   },
//   {
//     name: "Defect 5",
//     Device1: 188,
//     Device2: 278,
//     amt: 200,
//   },
// ];

const graphData = [
  {
    name: "Defect 1",
    Device1: 0,
  },
  {
    name: "Defect 2",
    Device1: 0,
  },
  {
    name: "Defect 3",
    Device1: 0,
  },
  {
    name: "Defect 4",
    Device1: 0,
  },
];

const BarCharts = () => {
  const [gData, setGData] = useState(graphData[0].Device1);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("/data/typenumber");
      console.log(response.data);
      for (var i = 0; i < graphData.length; i++) {
        if (graphData[i].name === "Defect 1") {
          setGData(response.data);
          graphData[i].Device1 = response.data;
        }
      }
    };
    fetchData();
  }, [gData]);
  console.log(graphData[0].Device1);
  return (
    <BarChart
      width={500}
      height={300}
      data={graphData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis
        label={{
          value: "Total no. of defects",
          angle: -90,
          position: "left",
          dy: -60,
        }}
      />
      <Tooltip />
      <Legend />
      {/* <Bar dataKey="Device2" stackId="a" fill="#455e60" barSize={60} /> */}
      <Bar
        dataKey="Device1"
        stackId="a"
        fill="#f6932f"
        radius={[10, 10, 0, 0]}
        barSize={60}
      />
    </BarChart>
  );
};
export default BarCharts;
