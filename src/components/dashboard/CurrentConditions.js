import React from 'react'

const CurrentConditions = ({station}) => {
  return (
    <div>
        <div>Current Conditions at {station[0].sourceInfo.siteName}</div>
    </div>
  )
}

export default CurrentConditions