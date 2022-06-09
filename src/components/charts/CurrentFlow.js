import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const CurrentFlow = ({ data }) => {
    console.log(data)
    function customTick(x) {
        const date = new Date(x);
        return date.toLocaleDateString("en-US");
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={500} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="date"
                    interval="preserveStartEnd"
                    tickFormatter={customTick}
                />
                <YAxis
                    dataKey="value"
                    type="number"
                    domain={['dataMin', 'dataMax+100']}
                    interval="preserveEnd"
                    allowDataOverflow={true}
                />
                <Line type="monotone" dataKey="value" stroke="#52e3e1" />
                <Tooltip />
                {/* <Area type="monotone" dataKey="value" stroke="#1da4b3" fill="#1da4b3" /> */}
            </LineChart>
        </ResponsiveContainer>
    );
};

export default CurrentFlow;
