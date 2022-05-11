import React from 'react'

const CurrentConditions = ({station}) => {
  return (
    <div>
        <div>
          <h3>Current Conditions</h3>
          <h5>{station[0].sourceInfo.siteName}</h5>
        </div>
        <div>
          <p>{station[0].variable.variableName}</p>
        </div>
    </div>
  )
}

export default CurrentConditions