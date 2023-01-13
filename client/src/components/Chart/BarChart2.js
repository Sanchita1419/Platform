import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Part 1",
    OK: 70,
    NotOK: 30,
  },
  {
    name: "Part 2",
    OK: 86,
    NotOK: 14,
  },
  {
    name: "Part 3",
    OK: 85,
    NotOK: 15,
  },
  {
    name: "Part 4",
    OK: 62,
    NotOK: 38,
  },
  {
    name: "Part 5",
    OK: 45,
    NotOK: 55,
  },
  {
    name: "Part 6",
    OK: 58,
    NotOK: 42,
  },
];
const customTooltip = () => {
  return (
    <div>
      <p></p>
    </div>
  );
};
const BarChart2 = () => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
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
          value: "% of defects in a part",
          angle: -90,
          position: "left",
          dy: -60,
        }}
      />
      <Tooltip />
      <Legend />
      <Bar dataKey="OK" stackId="a" fill="#455e60" barSize={30} />
      <Bar
        dataKey="NotOK"
        stackId="a"
        fill="#f6932f"
        radius={[10, 10, 0, 0]}
        barSize={30}
      />
    </BarChart>
  );
};
export default BarChart2;
