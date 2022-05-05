import React from 'react'
import Station from './Station'

const StationList = ({water, loading, stations}) => {
    let allStations = stations.map(station => {
        return (
            <Station water={water} station={station} key={station.siteId}></Station>
        )
    })

  return (
      <div>
          { !loading && allStations}
    </div>
  )
}

export default StationList