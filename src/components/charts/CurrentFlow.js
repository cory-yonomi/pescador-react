import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts"
import { DateTime } from 'luxon'

const CustomTooltip = ({ active, payload, label }) => {
    console.log(payload)
    if (active && payload && payload.length) {
        console.log(Date(payload[0].date))
        console.log(DateTime.fromFormat(payload[0].date, 'LLLL dd yyyy'))
      return (
        <div className="custom-tooltip">
          {/* <div>{DateTime.fromISO(payload[0].date)}</div> */}
          <div>{payload[0].value} cfs</div>
        </div>
      )
    }
  
    return null;
  }

const CurrentFlow = ({ data }) => {
    console.log(data)
    function customTick(x) {
        const date = new Date(x);
        return date.toLocaleDateString("en-US");
    }

    function dataMax(dataMax) {
        if(dataMax <= 100) {
            return dataMax + 5
        } else if (dataMax >=100 && dataMax <= 1000) {
            return dataMax + 100
        } else if (dataMax > 2000) {
            return dataMax + 1000
        }
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={'500'} height={600} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="date"
                    interval="preserveStartEnd"
                    tickFormatter={customTick}
                />
                <YAxis
                    dataKey="value"
                    type="number"
                    domain={[0, dataMax]}
                    interval="preserveEnd"
                    allowDataOverflow={true}
                />
                <Line type="monotone" dataKey="value" stroke="#52e3e1" />
                <Tooltip content={<CustomTooltip />}/>
                {/* <Area type="monotone" dataKey="value" stroke="#1da4b3" fill="#1da4b3" /> */}
            </LineChart>
        </ResponsiveContainer>
    );
};

export default CurrentFlow;
