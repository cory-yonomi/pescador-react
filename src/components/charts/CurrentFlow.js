import React from 'react'
import { LineChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const CurrentFlow = ({data}) => {

    function customTick(x) {
        const date = new Date(x)
        return date.toLocaleDateString('en-US') 
      }

  return (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date"  interval='preserveStartEnd' tickFormatter={customTick}/>
          <YAxis dataKey="value" type="number" domain={['dataMin - 5', 'auto']} interval='preserveEnd' allowDataOverflow={true}/>
          <Line type="monotone" dataKey="value" stroke="blue" />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#1da4b3" fill="#1da4b3" />
        </LineChart>
      </ResponsiveContainer>
  )
}

export default CurrentFlow