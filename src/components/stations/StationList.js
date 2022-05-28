import React from 'react'
import AddButton from '../shared/AddButton'
import FavoriteButton from '../shared/FavoriteButton'
import Station from './Station'

const StationList = ({water, loading, stations, setWaterStations, source}) => {
    
    let allStations

    if(!water){
        allStations = stations.map(station => {
            return <Station station={station} key={station.usgsId} provideData={true}/>
        })
    } else if(water && source === 'water'){
        allStations = stations.map(station => {
            return (
                <Station station={station} key={station.usgsId}>
                    <FavoriteButton station={station}/>
                </Station>
            )
        })
    } else if(water && source === 'found'){
        allStations = stations.map(station => {
            return (
                <Station station={station} key={station.usgsId}>
                    <AddButton setWaterStations={setWaterStations} water={water} station={station}/>
                </Station>
            )
        })
    }
    
    

  return (
      <div>
          { !loading && allStations }
    </div>
  )
}

export default StationList