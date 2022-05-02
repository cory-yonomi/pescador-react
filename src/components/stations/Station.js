import React from 'react'
import { gql, useQuery, useMutation } from '@apollo/client'
import classes from './Stations.module.css'

const Station = ({ water, station }) => {
    // ****************** GRAPHQL *********************
    const CREATE_STATION = gql`
      mutation AddWaterStation($usgsId: String!, $name: String!, $long: Float!, $lat: Float!){
        createStation(name: $name, usgsId: $usgsId, long: $long, lat: $lat){
          name
          usgsId
          long
          lat
        }
      }
    `

    const [createStation] = useMutation(CREATE_STATION, {
      variables: {
        name: station.siteName,
        usgsId: station.siteId,
        long: station.siteLong,
        lat: station.siteLat
      }
    })

    const clickHandler = e => {
        createStation()        
    }

    //borrowed title casing function(Greg Dean on StackOverflow)
    function toTitleCase(str) {
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        )
    }
    
    return (
        <div className={classes.StationDiv}>
          <p>{toTitleCase(station.siteName)}</p>
          
          <button onClick={clickHandler}>+</button>
    </div>
  )
}

export default Station