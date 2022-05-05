import React from 'react'
import Station from './Station'

const StationList = ({water, loading, stations, setWaterStations, source}) => {
    let allStations = stations.map(station => {
        return (
            <Station water={water} station={station} setWaterStations={setWaterStations} key={station.siteId} source={source}></Station>
        )
    })

  return (
      <div>
          { !loading && allStations }
    </div>
  )
}

export default StationList