import React from 'react'
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
  import classes from "./Chart.module.css"
// Sample chart data
const pdata = [
    // {
        
    // },
    
    // {
    //     name: '2 min',
    //     fees: 2
    // },
    // {
    //     name: '3 min',
    //     fees: 3
    // },
    
];
const Chart = () => {
  return (
    <div className={classes.chart}>
            <h1 className="text-heading">
            </h1>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="name" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="defect"
                        stroke="black" activeDot={{ r: 8 }} />
                    <Line dataKey=""
                        stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
  )
}

export default Chart