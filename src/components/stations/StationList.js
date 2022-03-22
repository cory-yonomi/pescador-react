import React from 'react'
import Station from './Station'

const StationList = ({loading, stations}) => {
    let allStations = stations.map(station => {
        return (
            <Station station={station} key={station.siteId}></Station>
        )
    })

  return (
      <div>
          { loading && "Finding stations..."}
          { !loading && allStations}
    </div>
  )
}

export default StationList