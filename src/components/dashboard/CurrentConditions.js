import React from 'react'

const CurrentConditions = ({station}) => {
  const streamflow = 'Streamflow: ft³/s'
  console.log('station value:', station[0].values[0].value)
  return (
    <div>
        <div>
          <h3>Current Conditions</h3>
          <h5>{station[0].sourceInfo.siteName}</h5>
        </div>
        <div>
          <p>{streamflow}</p>
          <p>{station[0].values[0].value[0].value}</p>
        </div>
        <div>
          <p>{station[1].variable.variableName}</p>
          <p>{station[1].values[0].value[0].value}</p>
        </div>
    </div>
  )
}

export default CurrentConditions